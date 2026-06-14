import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import bgMusic from "@/assets/bgmusic.mp3.asset.json";

export function BgMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const a = new Audio(bgMusic.url);
    a.loop = true;
    a.volume = 0.35;
    a.muted = true;
    a.preload = "auto";
    audioRef.current = a;

    // Attempt muted autoplay (allowed by browsers)
    const tryPlay = () => {
      a.play().then(() => setReady(true)).catch(() => {
        // Will start on first user interaction
        const onAny = () => {
          a.play().catch(() => {});
          setReady(true);
          window.removeEventListener("pointerdown", onAny);
          window.removeEventListener("keydown", onAny);
        };
        window.addEventListener("pointerdown", onAny, { once: true });
        window.addEventListener("keydown", onAny, { once: true });
      });
    };
    tryPlay();

    return () => {
      a.pause();
      a.src = "";
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    const next = !muted;
    a.muted = next;
    setMuted(next);
    if (!next && a.paused) a.play().catch(() => {});
  };

  return (
    <button
      onClick={toggle}
      aria-label={muted ? "Unmute background music" : "Mute background music"}
      aria-pressed={!muted}
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center justify-center h-11 w-11 rounded-full border backdrop-blur-md transition-all hover:-translate-y-0.5"
      style={{
        background: "linear-gradient(135deg, rgba(247,199,106,0.95) 0%, rgba(212,175,55,0.95) 55%, rgba(184,134,11,0.95) 100%)",
        borderColor: "rgba(247,231,206,0.4)",
        color: "#1a0f0a",
        boxShadow: "0 8px 28px -8px rgba(212,175,55,0.55)",
      }}
      title={muted ? "Play music" : "Mute music"}
    >
      {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      {ready && muted && (
        <span
          aria-hidden
          className="absolute inset-0 rounded-full animate-ping"
          style={{ background: "rgba(212,175,55,0.35)" }}
        />
      )}
    </button>
  );
}
