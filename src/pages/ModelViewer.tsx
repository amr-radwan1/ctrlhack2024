import { useEffect, useState } from "react";
import { PoseEngine } from "@geenee/bodyprocessors";
import { OutfitParams } from "@geenee/bodyrenderers-common";
import { AvatarRenderer } from "../avatarrenderer";
import LoadingScreen from "../components/loading-screen";
import CameraSwitch from "../components/camera-switch";
import RecordButton from "../components/record-button";
import ModelCarousel from "../components/model-carousel";

const modelMap: {
  [key: string]: {
    file: string;
    avatar: boolean;
    outfit?: OutfitParams;
  };
} = {
  empty: {
    file: "empty.glb", // No model to display
    avatar: false,
  },
  heart: {
    file: "heart.glb",
    avatar: false,
    outfit: {
      occluders: [/Body/],
      hidden: [],
    },
  },
  lungs: {
    file: "lungs.glb",
    avatar: false,
    outfit: {
      occluders: [/Head$/, /Body/],
      hidden: [],
    },
  },
  intestines: {
    file: "intestines.glb",
    avatar: false,
    outfit: {
      occluders: [/Head$/, /Body/],
      hidden: [],
    },
  },
};

export default function ModelViewer() {
  const [isLoading, setIsLoading] = useState(true);
  const [engine, setEngine] = useState<PoseEngine | null>(null);
  const [renderer, setRenderer] = useState<AvatarRenderer | null>(null);
  const [rear, setRear] = useState(false);

  useEffect(() => {
    const initializeViewer = async () => {
      const newEngine = new PoseEngine();
      const token =
        location.hostname === "localhost"
          ? "x2PL34IsOrDDG9WYmTY2Yv26ZEl5H4-0"
          : "prod.url_sdk_token";

      const urlParams = new URLSearchParams(window.location.search);
      const initialRear = urlParams.has("rear");
      setRear(initialRear);

      const container = document.getElementById("root");
      if (!container) return;

      const newRenderer = new AvatarRenderer(
        container,
        "crop",
        !initialRear,
      );

      await Promise.all([
        newEngine.addRenderer(newRenderer),
        newEngine.init({ token: token }),
      ]);
      await newEngine.setup({
        size: { width: 1920, height: 1080 },
        rear: initialRear,
      });
      await newEngine.start();

      setEngine(newEngine);
      setRenderer(newRenderer);
      setIsLoading(false);
    };

    initializeViewer();
  }, []);

  const handleCameraSwitch = async () => {
    if (!engine || !renderer) return;
    const newRear = !rear;
    setRear(newRear);
    await engine.setup({ size: { width: 1920, height: 1080 }, rear: newRear });
    await engine.start();
    renderer.setMirror(!newRear);
  };

  const handleModelChange = async (modelName: string) => {
    if (!renderer) return;
    const model = modelMap[modelName];
  
    // If no model is selected, clear the outfit
    if (model.file === null) {
      await renderer.setOutfit(""); // Clear the current model
    } else {
      await renderer.setOutfit(
        model.file,
        model.avatar ? undefined : model.outfit
      );
    }
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div id="root" className="full-screen"></div>
      <CameraSwitch onSwitch={handleCameraSwitch} />
      <RecordButton renderer={renderer} />
      <ModelCarousel onChange={handleModelChange} />
    </>
  );
}
