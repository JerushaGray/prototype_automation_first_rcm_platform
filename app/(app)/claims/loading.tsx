import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ClaimsLoading() {
  return (
    <div className="px-8 py-6 space-y-6">
      <div>
        <Skeleton className="h-9 w-32 mb-2" />
        <Skeleton className="h-5 w-64" />
      </div>

      <Card className="rounded-xl shadow-sm">
        <CardHeader>
          <Skeleton className="h-6 w-24 mb-2" />
          <Skeleton className="h-4 w-40" />
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10 w-full md:w-[180px]" />
            <Skeleton className="h-10 w-full md:w-[180px]" />
          </div>

          <div className="rounded-md border">
            <div className="p-4 space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
