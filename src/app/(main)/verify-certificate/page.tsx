"use client";

import { useState } from "react";
import { Container } from "@/components/common/container";
import { VerificationBanner } from "@/components/verify-certificate/VerificationBanner";
import { CertificateIdForm } from "@/components/verify-certificate/CertificateIdForm";
import { QRCodeUploadForm } from "@/components/verify-certificate/QRCodeUploadForm";
import { CertificateResult } from "@/components/verify-certificate/CertificateResult";

type VerificationStatus = "idle" | "loading" | "success" | "not-found" | "error";

export default function VerifyCertificatePage() {
  const [status, setStatus] = useState<VerificationStatus>("idle");

  const handleVerifyById = async (id: string) => {
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Verifying certificate ID:", id);
    setStatus(id.toLowerCase().includes("demo") ? "success" : "not-found");
  };

  const handleVerifyByQR = async (file: File) => {
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Verifying QR code:", file.name);
    setStatus("not-found");
  };

  return (
    <>
      <VerificationBanner />

      <section className="bg-[#F9F9FB] py-12">
        <Container>
          <div className="mx-auto  grid gap-8 lg:grid-cols-2">
            <CertificateIdForm onVerify={handleVerifyById} loading={status === "loading"} />
            <QRCodeUploadForm onVerify={handleVerifyByQR} loading={status === "loading"} />
          </div>
        </Container>
      </section>

      <CertificateResult status={status} />
    </>
  );
}
