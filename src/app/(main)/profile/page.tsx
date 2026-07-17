import { Suspense } from "react";
import { ProfileLayout } from "@/components/profileSettings/profile-layout";

export default function ProfilePage() {
  return (
    <Suspense>
      <ProfileLayout />
    </Suspense>
  );
}
