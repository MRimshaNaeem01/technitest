"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Container } from "@/components/common/container";
import { ProfileHeader } from "./profile-header";
import { ProfileTabs } from "./profile-tabs";
import { MyProfileTab } from "./tabs/my-profile-tab";
import { MyQuizzesTab } from "./tabs/my-quizzes-tab";
import { MyCertificatesTab } from "./tabs/my-certificates-tab";
import { TransactionsTab } from "./tabs/transactions-tab";
import { ReferralsTab } from "./tabs/referrals-tab";
import { FavoriteQuizzesTab } from "./tabs/favorite-quizzes-tab";
import { PaymentMethodTab } from "./tabs/payment-method-tab";
import { profileUser } from "./profile-data";
import type { ProfileTab } from "./profile-types";

const tabComponents: Record<ProfileTab, React.ReactNode> = {
  "my-profile": <MyProfileTab />,
  "my-quizzes": <MyQuizzesTab />,
  "my-certificates": <MyCertificatesTab />,
  transactions: <TransactionsTab />,
  referrals: <ReferralsTab />,
  "favorite-quizzes": <FavoriteQuizzesTab />,
  "payment-method": <PaymentMethodTab />,
};

export function ProfileLayout() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialTab = (searchParams.get("tab") as ProfileTab) || "my-profile";
  const [activeTab, setActiveTab] = useState<ProfileTab>(initialTab);

  const handleTabChange = (tab: ProfileTab) => {
    setActiveTab(tab);
    router.replace(`/profile?tab=${tab}`, { scroll: false });
  };

  return (
    <section className="bg-[#F6F7FF] py-10">
      <Container className="max-w-[1280px] px-4 sm:px-8 xl:px-12">
        <h1 className="mb-6 font-poppins text-[20px] font-semibold text-[#0B0B0B] sm:text-[24px]">
          Profile and Settings
        </h1>

        <ProfileHeader user={profileUser} />

        <div className="mt-8">
          <ProfileTabs activeTab={activeTab} onTabChange={handleTabChange} />
        </div>

        <div className="mt-6">{tabComponents[activeTab]}</div>
      </Container>
    </section>
  );
}
