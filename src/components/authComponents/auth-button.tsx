type AuthButtonProps = {
  children: React.ReactNode;
  loading?: boolean;
};

export function AuthButton({ children, loading }: AuthButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="h-11 w-full rounded-full bg-[#EA9700] text-sm font-medium text-white transition-colors hover:bg-[#d48a00] disabled:opacity-60"
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
