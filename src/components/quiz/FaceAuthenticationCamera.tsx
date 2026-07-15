"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Camera, SwitchCamera, Zap, ZapOff, VideoOff } from "lucide-react";

type FaceAuthenticationCameraProps = {
  onVerified: () => void;
};

export function FaceAuthenticationCamera({
  onVerified,
}: FaceAuthenticationCameraProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [hasCamera, setHasCamera] = useState(true);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [facingMode, setFacingMode] = useState<"user" | "environment">(
    "user"
  );
  const [torchSupported, setTorchSupported] = useState(false);
  const [torchOn, setTorchOn] = useState(false);

  const startCamera = useCallback(async (facing: "user" | "environment") => {
    try {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: facing },
        audio: false,
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      const track = stream.getVideoTracks()[0];
      const capabilities = track.getCapabilities?.() as MediaTrackCapabilities | undefined;
      setTorchSupported(!!(capabilities as Record<string, unknown>)?.torch);
      setHasCamera(true);
      setPermissionDenied(false);
    } catch {
      setHasCamera(false);
      setPermissionDenied(true);
    }
  }, []);

  useEffect(() => {
    startCamera(facingMode);
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, [facingMode, startCamera]);

  const handleSwitchCamera = () => {
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
  };

  const handleToggleTorch = async () => {
    if (!streamRef.current || !torchSupported) return;
    const track = streamRef.current.getVideoTracks()[0];
    const newTorch = !torchOn;
    await track.applyConstraints({
      advanced: [{ torch: newTorch } as MediaTrackConstraintSet],
    });
    setTorchOn(newTorch);
  };

  const handleConfirm = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
    }
    onVerified();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-6 h-[300px] w-[300px] overflow-hidden rounded-2xl bg-gray-900 sm:h-[380px] sm:w-[380px]">
        <div className="pointer-events-none absolute inset-0 z-10">
          <span className="absolute left-0 top-0 h-12 w-12 border-l-4 border-t-4 border-blue-500" />
          <span className="absolute right-0 top-0 h-12 w-12 border-r-4 border-t-4 border-blue-500" />
          <span className="absolute bottom-0 left-0 h-12 w-12 border-b-4 border-l-4 border-blue-500" />
          <span className="absolute bottom-0 right-0 h-12 w-12 border-b-4 border-r-4 border-blue-500" />
        </div>

        {hasCamera && !permissionDenied ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-white/70">
            <VideoOff className="size-12" />
            <p className="text-center text-sm">
              {permissionDenied
                ? "Camera permission denied. Please allow camera access in your browser settings."
                : "No camera detected. Please connect a camera device."}
            </p>
          </div>
        )}
      </div>

      <p className="mb-8 max-w-xs text-center text-sm text-gray-500">
        Turn your head slowly in all direction for face verification
      </p>

      <div className="flex items-center gap-5">
        <button
          onClick={handleSwitchCamera}
          aria-label="Switch camera"
          className="flex size-12 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200"
        >
          <SwitchCamera className="size-5" />
        </button>

        <button
          onClick={handleConfirm}
          aria-label="Confirm face verification"
          className="flex size-16 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-colors hover:bg-brand-hover"
        >
          <svg
            className="size-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </button>

        <button
          onClick={handleToggleTorch}
          aria-label="Toggle flash"
          disabled={!torchSupported}
          className={`flex size-12 items-center justify-center rounded-full transition-colors ${
            torchSupported
              ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
              : "cursor-not-allowed bg-gray-50 text-gray-300"
          }`}
        >
          {torchOn ? (
            <Zap className="size-5" />
          ) : (
            <ZapOff className="size-5" />
          )}
        </button>
      </div>
    </div>
  );
}
