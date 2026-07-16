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
    <div className="mt-8 flex flex-col items-center">
      {/* Camera Preview */}
      <div className="relative mb-8 h-[320px] w-full max-w-[540px] overflow-hidden rounded-xl bg-gray-900 sm:h-[420px]">
        {/* Scanning Corner Brackets */}
        <div className="pointer-events-none absolute inset-0 z-10">
          <span className="absolute left-0 top-0 h-14 w-14 border-l-[3px] border-t-[3px] border-blue-500" />
          <span className="absolute right-0 top-0 h-14 w-14 border-r-[3px] border-t-[3px] border-blue-500" />
          <span className="absolute bottom-0 left-0 h-14 w-14 border-b-[3px] border-l-[3px] border-blue-500" />
          <span className="absolute bottom-0 right-0 h-14 w-14 border-b-[3px] border-r-[3px] border-blue-500" />
        </div>

        {/* Scanning Line Animation */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[2px] animate-[scan_2s_linear_infinite] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

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
            <p className="max-w-[280px] text-center text-sm">
              {permissionDenied
                ? "Camera permission denied. Please allow camera access in your browser settings."
                : "No camera detected. Please connect a camera device."}
            </p>
          </div>
        )}
      </div>

      {/* Instruction Text */}
      <p className="mb-10 max-w-lg text-center font-poppins text-[24px] font-normal leading-relaxed text-gray-500">
        Turn your head slowly in all direction for face verification
      </p>

      {/* Action Buttons */}
      <div className="flex items-center gap-10">
        {/* Camera Switch */}
        <button
          onClick={handleSwitchCamera}
          aria-label="Switch camera"
          className="flex size-[72px] items-center justify-center rounded-full bg-[#F3F4F6] text-gray-600 transition-colors hover:bg-gray-200"
        >
          <SwitchCamera className="size-8" />
        </button>

        {/* Confirm / Verify */}
        <button
          onClick={handleConfirm}
          aria-label="Confirm face verification"
          className="flex size-[78px] items-center justify-center rounded-full bg-[#F59E0B] text-white shadow-[0_4px_20px_rgba(245,158,11,0.35)] transition-colors hover:bg-[#D97706]"
        >
          <svg
            className="size-9"
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

        {/* Flash Toggle */}
        <button
          onClick={handleToggleTorch}
          aria-label="Toggle flash"
          disabled={!torchSupported}
          className={`flex size-[72px] items-center justify-center rounded-full transition-colors ${
            torchSupported
              ? "bg-[#F3F4F6] text-gray-600 hover:bg-gray-200"
              : "cursor-not-allowed bg-gray-50 text-gray-300"
          }`}
        >
          {torchOn ? (
            <Zap className="size-8" />
          ) : (
            <ZapOff className="size-8" />
          )}
        </button>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(420px); }
        }
      `}</style>
    </div>
  );
}
