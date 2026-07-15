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
          <div className="min-w-[60px] rounded-lg bg-[#F8F8FF] px-3 py-2 text-center sm:min-w-[74px] sm:px-4 sm:py-3">
            <p
              className={`text-xl font-bold sm:text-2xl ${
                isLow ? "text-red-500" : "text-brand-link"
              }`}
            >
              {String(unit.value).padStart(2, "0")}
            </p>
            <p className="mt-0.5 text-[10px] font-medium text-gray-400 sm:text-[11px]">
              {unit.label}
            </p>
          </div>
          {i < units.length - 1 && (
            <span
              className={`text-lg font-bold ${
                isLow ? "text-red-500" : "text-brand-link"
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
