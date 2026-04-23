"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function Skeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse bg-muted rounded-md ${className}`} />;
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <Card>
      <CardContent>
        <div className="space-y-4 py-3.5">
          {/* Header */}
          <div className="flex justify-between items-center">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-9 w-28" />
          </div>

          {/* Search */}
          <Skeleton className="h-10 w-full" />

          <Separator />

          <Table>
            {/* 🔥 Skeleton Header */}
            <TableHeader>
              <TableRow>
                {Array.from({ length: 6 }).map((_, i) => (
                  <TableHead key={i}>
                    <Skeleton className="h-4 w-20" />
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            {/* 🔥 Skeleton Body */}
            <TableBody>
              {Array.from({ length: rows }).map((_, i) => (
                <TableRow key={i}>
                  {Array.from({ length: rows }).map((_, i) => (
                    <TableCell key={`C-${i}`}>
                      <Skeleton className="h-4 w-24" />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
