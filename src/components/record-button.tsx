import { useCallback } from "react";
import { Recorder } from "@geenee/armature";
import { AvatarRenderer } from "../avatarrenderer";

interface RecordButtonProps {
  renderer: AvatarRenderer | null;
}

export default function RecordButton({ renderer }: RecordButtonProps) {
  const handleRecordClick = useCallback(() => {
    if (!renderer) return;

    const safari =
      navigator.userAgent.indexOf("Safari") > -1 &&
      navigator.userAgent.indexOf("Chrome") <= -1;
    const ext = safari ? "mp4" : "webm";
    const recorder = new Recorder(renderer, "video/" + ext);

    recorder.start();
    setTimeout(async () => {
      const blob = await recorder.stop();
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.hidden = true;
      link.href = url;
      link.download = "capture." + ext;
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    }, 10000);
  }, [renderer]);

  return (
    <button
      id="record"
      className="button"
      style={{
        position: "absolute",
        top: "0.5rem",
        left: "0.5rem",
        zIndex: 1,
      }}
      onClick={handleRecordClick}
    >
      <div className="icon" style={{ mask: "url(./shot.svg)" }}></div>
    </button>
  );
}
