"use client";

import { useState } from "react";
import { Container } from "@/components/common/container";
import { VerificationBanner } from "@/components/verify-certificate/VerificationBanner";
import { CertificateIdForm } from "@/components/verify-certificate/CertificateIdForm";
import { QRCodeUploadForm } from "@/components/verify-certificate/QRCodeUploadForm";
import { CertificateResult } from "@/components/verify-certificate/CertificateResult";

type VerificationStatus = "idle" | "loading" | "success" | "not-found" | "error";

// TODO: Replace with actual API call when backend is available
// async function verifyCertificateById(id: string): Promise<VerificationStatus> {
//   const res = await fetch(`/api/certificates/verify?id=${encodeURIComponent(id)}`);
//   if (!res.ok) return "error";
//   const data = await res.json();
//   return data.found ? "success" : "not-found";
// }
//
// async function verifyCertificateByQR(file: File): Promise<VerificationStatus> {
//   const formData = new FormData();
//   formData.append("qr", file);
//   const res = await fetch("/api/certificates/verify-qr", { method: "POST", body: formData });
//   if (!res.ok) return "error";
//   const data = await res.json();
//   return data.found ? "success" : "not-found";
// }

export default function VerifyCertificatePage() {
  const [status, setStatus] = useState<VerificationStatus>("idle");

  const handleVerifyById = async (id: string) => {
    setStatus("loading");
    // Simulate API call — replace with real endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Verifying certificate ID:", id);
    // Placeholder: randomly succeed or fail for demo
    setStatus(id.toLowerCase().includes("demo") ? "success" : "not-found");
  };

  const handleVerifyByQR = async (file: File) => {
    setStatus("loading");
    // Simulate API call — replace with real endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Verifying QR code:", file.name);
    // Placeholder: always show not-found for demo
    setStatus("not-found");
  };

  return (
    <>
      <VerificationBanner />

      <section className="bg-[#F9F9FB] py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <CertificateIdForm onVerify={handleVerifyById} loading={status === "loading"} />
            <QRCodeUploadForm onVerify={handleVerifyByQR} loading={status === "loading"} />
          </div>
        </Container>
      </section>

      <CertificateResult status={status} />
    </>
  );
}
