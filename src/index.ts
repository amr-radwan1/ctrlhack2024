import { PoseEngine } from "@geenee/bodyprocessors";
import { Recorder } from "@geenee/armature";
import { OutfitParams } from "@geenee/bodyrenderers-common";
import { AnatomyRenderer } from "./anatomyrenderer";

// Engine
const engine = new PoseEngine();
const token =
  location.hostname === "localhost"
    ? "x2PL34IsOrDDG9WYmTY2Yv26ZEl5H4-0"
    : "prod.url_sdk_token";

// Parameters
const urlParams = new URLSearchParams(window.location.search);
let rear = urlParams.has("rear");
// Model map
const modelMap: {
  [key: string]: {
    file: string;
    layer: boolean;
    outfit?: OutfitParams;
  };
} = {
  skeleton: {
    file: "skeleton.glb",
    layer: false,
    outfit: {
      occluders: [],
      hidden: [],
    },
  },
  muscles: {
    file: "muscles.glb",
    layer: false,
    outfit: {
      occluders: [],
      hidden: [],
    },
  },
  organs: {
    file: "organs.glb",
    layer: false,
    outfit: {
      occluders: [],
      hidden: [],
    },
  },
};
let model = "skeleton";
let layer = modelMap["skeleton"].layer;

// Create spinner element
function createSpinner() {
  const spinner = document.createElement("div");
  spinner.className = "boxes";
  spinner.id = "spinner";
  for (let i = 0; i < 4; i++) {
    const box = document.createElement("div");
    box.className = "box";
    for (let j = 0; j < 4; j++) box.appendChild(document.createElement("div"));
    spinner.appendChild(box);
  }
  return spinner;
}

async function main() {
  // Renderer
  const container = document.getElementById("root");
  if (!container) return;
  const renderer = new AnatomyRenderer(
    container,
    "crop",
    !rear,
    modelMap[model].file,
    layer ? undefined : modelMap[model].outfit
  );
  // Camera switch
  const cameraSwitch = document.getElementById(
    "camera-switch"
  ) as HTMLButtonElement | null;
  if (cameraSwitch) {
    cameraSwitch.onclick = async () => {
      cameraSwitch.disabled = true;
      rear = !rear;
      await engine.setup({ size: { width: 1920, height: 1080 }, rear });
      await engine.start();
      renderer.setMirror(!rear);
      cameraSwitch.disabled = false;
    };
  }
  // Layer switch
  const layerSwitch = document.getElementById(
    "layer-switch"
  ) as HTMLInputElement;
  layerSwitch.checked = layer;
  layerSwitch.onchange = async () => {
    modelBtns.forEach((btn) => {
      btn.disabled = true;
    });
    layerSwitch.disabled = true;
    const spinner = createSpinner();
    document.body.appendChild(spinner);
    layer = layerSwitch.checked;
    await renderer.setLayer(
      modelMap[model].file,
      layer ? undefined : modelMap[model].outfit
    );
    document.body.removeChild(spinner);
    modelBtns.forEach((btn) => {
      btn.disabled = false;
    });
    layerSwitch.disabled = false;
  };
  // Info button
  const infoButton = document.getElementById(
    "info"
  ) as HTMLButtonElement | null;
  if (infoButton) {
    infoButton.onclick = () => {
      alert(`Current model: ${model}\nLayer mode: ${layer ? "On" : "Off"}`);
    };
  }
  // Model carousel
  const modelBtns = document.getElementsByName(
    "model"
  ) as NodeListOf<HTMLInputElement>;
  modelBtns.forEach((btn) => {
    btn.onchange = async () => {
      if (btn.checked && modelMap[btn.value]) {
        modelBtns.forEach((btn) => {
          btn.disabled = true;
        });
        layerSwitch.disabled = true;
        const spinner = createSpinner();
        document.body.appendChild(spinner);
        model = btn.value;
        layer = modelMap[model].layer;
        await renderer.setLayer(
          modelMap[model].file,
          layer ? undefined : modelMap[model].outfit
        );
        layerSwitch.checked = layer;
        document.body.removeChild(spinner);
        modelBtns.forEach((btn) => {
          btn.disabled = false;
        });
        layerSwitch.disabled = false;
      }
    };
  });
  // Initialization
  await Promise.all([
    engine.addRenderer(renderer),
    engine.init({ token: token }),
  ]);
  await engine.setup({ size: { width: 1920, height: 1080 }, rear });
  await engine.start();
  document.getElementById("loadui")?.remove();
}
main();
