import { FileText } from "lucide-react";

export function MyCertificatesTab() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
      <h3 className="font-poppins text-[18px] font-semibold text-[#0B0B0B]">
        My Certificates
      </h3>
      <div className="flex flex-col items-center py-16 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5F5F5]">
          <FileText className="h-7 w-7 text-[#CCC]" />
        </div>
        <p className="font-poppins text-[15px] font-medium text-[#333]">
          No certificates yet
        </p>
        <p className="mt-1 font-poppins text-[13px] text-[#999]">
          Complete a quiz to earn your first certificate.
        </p>
      </div>
    </div>
  );
}
