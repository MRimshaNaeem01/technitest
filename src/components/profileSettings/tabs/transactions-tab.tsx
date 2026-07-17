"use client";

import { useState, useMemo } from "react";
import { Search, CalendarDays, ChevronLeft, ChevronRight, Receipt } from "lucide-react";
import { profileTransactions } from "../profile-data";
import { TransactionCard } from "../components/transaction-card";

const ITEMS_PER_PAGE = 3;

export function TransactionsTab() {
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    return profileTransactions.filter((t) => {
      if (statusFilter !== "all" && t.status !== statusFilter) return false;
      if (
        searchQuery &&
        !t.orderId.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false;
      return true;
    });
  }, [statusFilter, searchQuery]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const visible = filtered.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  return (
    <div className="space-y-5">
      {/* Header */}
      <h3 className="font-poppins text-[18px] font-semibold text-[#0B0B0B]">
        My Transactions
      </h3>

      {/* Filters */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-[180px_1fr_1fr]">
        {/* Status */}
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setCurrentPage(1);
          }}
          className="h-10 rounded-[6px] border border-[#E2E2E8] bg-white px-3 font-poppins text-[13px] text-[#333] outline-none"
        >
          <option value="all">All Status</option>
          <option value="success">Success</option>
          <option value="cancelled">Cancelled</option>
          <option value="pending">Pending</option>
        </select>

        {/* Date range */}
        <div className="relative">
          <CalendarDays className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#999]" />
          <input
            type="text"
            readOnly
            defaultValue="Jan 1, 2025 - Dec 31, 2026"
            className="h-10 w-full rounded-[6px] border border-[#E2E2E8] bg-white pl-9 pr-3 font-poppins text-[13px] text-[#333] outline-none"
          />
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#999]" />
          <input
            type="text"
            placeholder="Search by Order ID..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="h-10 w-full rounded-[6px] border border-[#E2E2E8] bg-white pl-9 pr-3 font-poppins text-[13px] text-[#333] outline-none placeholder:text-[#BBB]"
          />
        </div>
      </div>

      {/* Transaction Cards */}
      {visible.length === 0 ? (
        <div className="flex flex-col items-center py-16 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5F5F5]">
            <Receipt className="h-7 w-7 text-[#CCC]" />
          </div>
          <p className="font-poppins text-[15px] font-medium text-[#333]">
            No transactions found.
          </p>
          <p className="mt-1 font-poppins text-[13px] text-[#999]">
            Try adjusting your filters or search.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {visible.map((t) => (
            <TransactionCard key={t.id} transaction={t} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E2E2E8] bg-white text-[#666] disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="font-poppins text-[13px] text-[#666]">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E2E2E8] bg-white text-[#666] disabled:opacity-40"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
