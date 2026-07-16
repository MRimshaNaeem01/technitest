"use client";

import { useEffect, useState } from "react";

type QuizTimerProps = {
  duration: number;
  onTimeUp: () => void;
  isLocked?: boolean;
};

export function QuizTimer({ duration, onTimeUp, isLocked }: QuizTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (isLocked || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, isLocked, onTimeUp]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const isLow = timeLeft <= 10;

  const units = [
    { value: hours, label: "Hour" },
    { value: minutes, label: "Minutes" },
    { value: seconds, label: "Seconds" },
  ];

  return (
    <div className="flex items-center gap-2">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-2">
          <div className="flex h-[54px] w-[54px] flex-col items-center justify-center rounded-[6px] bg-[#F8F8FF]">
            <p
              className={`font-poppins text-[18px] font-medium leading-none ${
                isLow ? "text-red-500" : "text-[#2945FF]"
              }`}
            >
              {String(unit.value).padStart(2, "0")}
            </p>
            <p className="mt-1 text-[9px] text-[#9CA3AF]">
              {unit.label}
            </p>
          </div>
          {i < units.length - 1 && (
            <span
              className={`text-[16px] font-semibold ${
                isLow ? "text-red-500" : "text-[#2945FF]"
              }`}
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
