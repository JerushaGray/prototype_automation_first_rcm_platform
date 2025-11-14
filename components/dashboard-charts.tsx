"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Cell } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const trendData = [
  { month: "Jan", claims: 45, flagged: 12 },
  { month: "Feb", claims: 52, flagged: 15 },
  { month: "Mar", claims: 48, flagged: 11 },
  { month: "Apr", claims: 61, flagged: 18 },
  { month: "May", claims: 55, flagged: 16 },
  { month: "Jun", claims: 58, flagged: 17 },
];

const riskDistribution = [
  { range: "0-20", count: 12 },
  { range: "21-40", count: 8 },
  { range: "41-60", count: 15 },
  { range: "61-80", count: 10 },
  { range: "81-100", count: 5 },
];

export function DashboardCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="rounded-xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-semibold tracking-tight">Claims Trend</CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            Monthly claims volume and flagged rate
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              claims: { label: "Total Claims", color: "hsl(210 100% 50%)" },
              flagged: { label: "Flagged", color: "hsl(0 84% 60%)" },
            }}
            className="h-[250px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="claims" 
                  stroke="hsl(210 100% 50%)" 
                  strokeWidth={2.5}
                  dot={{ fill: "hsl(210 100% 50%)", r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="flagged" 
                  stroke="hsl(0 84% 60%)" 
                  strokeWidth={2.5}
                  dot={{ fill: "hsl(0 84% 60%)", r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="rounded-xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-semibold tracking-tight">Risk Distribution</CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            Claims by risk score range
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              count: { label: "Claims", color: "hsl(210 100% 50%)" },
            }}
            className="h-[250px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={riskDistribution}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="range" className="text-xs" />
                <YAxis className="text-xs" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                  {riskDistribution.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={
                        index === 0 ? "hsl(142 76% 36%)" : // green for 0-20
                        index === 1 ? "hsl(173 80% 40%)" : // teal for 21-40
                        index === 2 ? "hsl(38 92% 50%)" :  // amber for 41-60
                        index === 3 ? "hsl(25 95% 53%)" :  // orange for 61-80
                        "hsl(0 84% 60%)"                   // red for 81-100
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
