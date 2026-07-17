import { Container } from "@/components/common/container";
import { VerificationEmptyState } from "./VerificationEmptyState";

type CertificateResultProps = {
  status: "idle" | "loading" | "success" | "not-found" | "error";
};

export function CertificateResult({ status }: CertificateResultProps) {
  return (
    <section className="bg-[#F9F9FB] pb-16 pt-4">
      <Container>
        <div className="rounded-2xl bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
          <h2 className="mb-2 text-center font-poppins text-[20px] font-semibold text-[#111]">
            Certificates
          </h2>

          {status === "loading" && (
            <div className="flex flex-col items-center py-16 text-center">
              <div className="mb-4 size-10 animate-spin rounded-full border-4 border-[#E2E2E8] border-t-[#2F45FF]" />
              <p className="font-poppins text-[14px] text-[#666]">Verifying certificate...</p>
            </div>
          )}

          {status === "idle" && <VerificationEmptyState />}
          {status === "not-found" && <VerificationEmptyState />}

          {status === "error" && (
            <div className="flex flex-col items-center py-16 text-center">
              <div className="mb-5 flex size-[72px] items-center justify-center rounded-full bg-red-50">
                <span className="text-3xl">⚠️</span>
              </div>
              <h3 className="font-poppins text-[18px] font-semibold text-[#111]">
                Verification Error
              </h3>
              <p className="mt-2 max-w-[400px] font-poppins text-[13px] leading-[22px] text-[#666]">
                Something went wrong while verifying your certificate. Please
                try again later.
              </p>
            </div>
          )}

          {status === "success" && (
            <div className="flex flex-col items-center py-16 text-center">
              <div className="mb-5 flex size-[72px] items-center justify-center rounded-full bg-green-50">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="font-poppins text-[18px] font-semibold text-[#111]">
                Certificate Verified
              </h3>
              <p className="mt-2 max-w-[400px] font-poppins text-[13px] leading-[22px] text-[#666]">
                This certificate is authentic and has been successfully verified.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
