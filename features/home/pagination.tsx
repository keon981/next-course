"use client"

import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  Pagination as PaginationRoot,
} from "@/components/ui/pagination"
import { useSearchParams } from "next/navigation"
import { useMemo } from "react"

interface PaginationProps {
  totalPages: number
}

function Pagination({ totalPages }: PaginationProps) {
  const currentPage = useSearchParams().get("page") || "1"
  const time = useMemo(() => new Date().getTime(), [])

  return (
    <>
      <PaginationRoot className="flex gap-4 text-sm font-semibold">
        <PaginationContent>
          {Array.from({ length: totalPages }).map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href={`?page=${index + 1}`}
                isActive={currentPage === `${index + 1}`}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </PaginationRoot>
      <span suppressHydrationWarning>{time}</span>
    </>
  )
}

export default Pagination
