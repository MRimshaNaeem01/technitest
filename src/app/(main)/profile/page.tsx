import type { Metadata } from "next";
import { Suspense } from "react";
import { ProfileLayout } from "@/components/profileSettings/profile-layout";

export const metadata: Metadata = {
  title: "Profile & Settings | Technitest",
  description:
    "Manage your Technitest profile, update account settings, and customize your learning experience from your personal dashboard.",
  openGraph: {
    title: "Profile & Settings | Technitest",
    description:
      "Manage your profile and account settings on the Technitest platform.",
    type: "website",
  },
  keywords: [
    "profile settings",
    "account management",
    "Technitest profile",
    "user settings",
    "edit profile",
    "account preferences",
  ],
};

export default function ProfilePage() {
  return (
    <Suspense>
      <ProfileLayout />
    </Suspense>
  );
}
