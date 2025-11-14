import { Badge } from "@/components/ui/badge";

interface RiskBadgeProps {
  score: number;
}

export function RiskBadge({ score }: RiskBadgeProps) {
  const getRiskLevel = (score: number) => {
    if (score <= 30) {
      return { label: "Low Risk", variant: "default" as const, color: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20 hover:bg-green-500/20 transition-colors duration-200" };
    } else if (score <= 70) {
      return { label: "Medium Risk", variant: "secondary" as const, color: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20 hover:bg-amber-500/20 transition-colors duration-200" };
    } else {
      return { label: "High Risk", variant: "destructive" as const, color: "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20 hover:bg-red-500/20 transition-colors duration-200" };
    }
  };

  const risk = getRiskLevel(score);

  return (
    <Badge className={risk.color}>
      {risk.label}
    </Badge>
  );
}
