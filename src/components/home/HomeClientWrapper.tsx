"use client";

import { useState, useEffect } from "react";
import {
  RoleSelectionModal,
  type UserRole,
} from "@/components/home/RoleSelectionModal";

export function HomeClientWrapper() {
  const [isRoleModalOpen, setRoleModalOpen] = useState(false);

  useEffect(() => {
    const savedRole = localStorage.getItem("technitest-user-role");
    const dismissed = sessionStorage.getItem("role-modal-dismissed");

    if (!savedRole && !dismissed) {
      setRoleModalOpen(true);
    }
  }, []);

  return (
    <RoleSelectionModal
      isOpen={isRoleModalOpen}
      onClose={() => {
        sessionStorage.setItem("role-modal-dismissed", "true");
        setRoleModalOpen(false);
      }}
      onSave={(role: UserRole) => {
        console.log("Selected role:", role);
      }}
    />
  );
}
