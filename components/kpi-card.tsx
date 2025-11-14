import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface KPICardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
}

export function KPICard({ title, value, description, icon }: KPICardProps) {
  return (
    <Card className="transition-all duration-200 ease-out hover:shadow-md hover:scale-[1.01] rounded-xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium tracking-tight">{title}</CardTitle>
        {icon && <div className="text-muted-foreground opacity-70">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold tracking-tight">{value}</div>
        {description && (
          <CardDescription className="text-xs mt-1 leading-relaxed">{description}</CardDescription>
        )}
      </CardContent>
    </Card>
  );
}
