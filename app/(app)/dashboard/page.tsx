import { KPICard } from "@/components/kpi-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getClaims } from "@/lib/get-claims";
import { AlertTriangle, TrendingUp, FileWarning, Files } from 'lucide-react';
import { DashboardCharts } from "@/components/dashboard-charts";

export default async function DashboardPage() {
  const claims = await getClaims();

  // Calculate KPIs
  const totalClaims = claims.length;
  const flaggedClaims = claims.filter((c) => c.risk_score > 30).length;
  const flaggedPercentage = ((flaggedClaims / totalClaims) * 100).toFixed(1);
  const avgRiskScore = (
    claims.reduce((sum, c) => sum + c.risk_score, 0) / totalClaims
  ).toFixed(1);

  // Calculate issue categories (mock data for demo)
  const issueCategories = [
    { name: "Missing Prior Auth", count: 12 },
    { name: "Documentation Gaps", count: 8 },
    { name: "Code Mismatches", count: 6 },
    { name: "Eligibility Issues", count: 5 },
    { name: "Timely Filing", count: 4 },
  ];

  const topIssue = issueCategories[0].name;

  return (
    <div className="px-8 py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1 leading-relaxed">
          Overview of claims risk and automation insights
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Flagged Claims"
          value={`${flaggedPercentage}%`}
          description={`${flaggedClaims} of ${totalClaims} claims require attention`}
          icon={<AlertTriangle className="h-4 w-4" />}
        />
        <KPICard
          title="Average Risk Score"
          value={avgRiskScore}
          description="Across all claims in system"
          icon={<TrendingUp className="h-4 w-4" />}
        />
        <KPICard
          title="Top Issue Type"
          value={topIssue}
          description="Most common denial risk"
          icon={<FileWarning className="h-4 w-4" />}
        />
        <KPICard
          title="Total Claims"
          value={totalClaims}
          description="Currently in system"
          icon={<Files className="h-4 w-4" />}
        />
      </div>

      <DashboardCharts />

      <Card className="rounded-xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-semibold tracking-tight">Issue Categories</CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            Common issues detected across claims
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {issueCategories.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{category.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {category.count} claims
                    </span>
                  </div>
                  <div className="w-full bg-secondary/20 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-200"
                      style={{
                        width: `${(category.count / issueCategories[0].count) * 100}%`,
                        backgroundColor: index === 0 
                          ? "hsl(0 84% 60%)"      // red for top issue
                          : index === 1 
                          ? "hsl(25 95% 53%)"     // orange
                          : index === 2
                          ? "hsl(38 92% 50%)"     // amber
                          : "hsl(210 100% 50%)"   // blue for lower priority
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
