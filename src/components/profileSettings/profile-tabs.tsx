"use client";

import { cn } from "@/lib/utils";
import type { ProfileTab } from "./profile-types";
import { PROFILE_TABS } from "./profile-types";

type ProfileTabsProps = {
  activeTab: ProfileTab;
  onTabChange: (tab: ProfileTab) => void;
};

export function ProfileTabs({ activeTab, onTabChange }: ProfileTabsProps) {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-0 border-b border-[#ECEEFF]">
        {PROFILE_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "relative shrink-0 px-5 py-3 font-poppins text-[14px] font-medium transition-colors",
              activeTab === tab.id
                ? "text-[#F5A000]"
                : "text-[#666] hover:text-[#333]"
            )}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-t bg-[#F5A000]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
