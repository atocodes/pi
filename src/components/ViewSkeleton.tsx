"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "./ui/card";

export function ViewSkeleton() {
  return (
    <div className="flex flex-col gap-5 p-4 md:p-6 animate-pulse">
      {/* HEADER */}
      <div className="flex justify-between items-center gap-3">
        <div className="h-6 w-48 bg-muted rounded-md" />

        <div className="flex gap-3 items-center">
          <div className="h-6 w-24 bg-muted rounded-md" />
          <div className="h-9 w-28 bg-muted rounded-md" />
          <div className="h-9 w-20 bg-muted rounded-md" />
          <div className="h-9 w-20 bg-muted rounded-md" />
        </div>
      </div>

      {/* PRODUCT INFO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* LEFT CARD */}
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <div className="h-5 w-40 bg-muted rounded-md" />
          </CardHeader>

          <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-3 w-16 bg-muted rounded-md" />
                <div className="h-4 w-full bg-muted rounded-md" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* RIGHT SIDE */}
        <div className="grid grid-rows-2 gap-5">
          {/* DESCRIPTION */}
          <Card>
            <CardHeader>
              <div className="h-5 w-32 bg-muted rounded-md" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-4 w-full bg-muted rounded-md" />
                <div className="h-4 w-5/6 bg-muted rounded-md" />
                <div className="h-4 w-2/3 bg-muted rounded-md" />
              </div>
            </CardContent>
          </Card>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-5 text-center">
            {[1, 2].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="h-5 w-32 mx-auto bg-muted rounded-md" />
                </CardHeader>
                <CardContent>
                  <div className="h-6 w-12 mx-auto bg-muted rounded-md" />
                </CardContent>
                <CardFooter>
                  <div className="h-4 w-20 mx-auto bg-muted rounded-md" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* TABLE SKELETON */}
      <Card>
        <CardHeader>
          <div className="h-5 w-40 bg-muted rounded-md" />
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-10 w-full bg-muted rounded-md" />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* MOVEMENTS SKELETON */}
      <Card>
        <CardHeader>
          <div className="h-5 w-40 bg-muted rounded-md" />
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-10 w-full bg-muted rounded-md" />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}