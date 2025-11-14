import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, TrendingUp, Layers, Users } from 'lucide-react';

export default function VisionPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Product Vision</h1>
            <p className="text-lg text-muted-foreground mt-1">
              Strategic direction for claims automation and revenue cycle optimization
            </p>
          </div>
        </div>
      </div>

      {/* Mission */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            To improve revenue cycle performance through automation, AI-driven insights, and standardized workflows 
            that reduce variability and improve first-pass yield.
          </p>
        </CardContent>
      </Card>

      {/* North Star KPI */}
      <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <CardTitle className="text-2xl">North Star KPI</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <div className="text-5xl font-bold text-primary mb-2">Clean Claim Rate</div>
            <p className="text-lg text-muted-foreground">
              The primary metric that drives all automation and optimization efforts
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Supporting KPIs */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <CardTitle className="text-2xl">Supporting KPIs</CardTitle>
          </div>
          <CardDescription className="text-base">
            Key metrics that contribute to overall revenue cycle health
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border bg-card">
              <div className="font-semibold text-foreground mb-1">First Pass Acceptance Rate</div>
              <p className="text-sm text-muted-foreground">Percentage of claims accepted on first submission</p>
            </div>
            
            <div className="p-4 rounded-lg border bg-card">
              <div className="font-semibold text-foreground mb-1">Denial Rate</div>
              <p className="text-sm text-muted-foreground">Percentage of claims denied by payers</p>
            </div>
            
            <div className="p-4 rounded-lg border bg-card">
              <div className="font-semibold text-foreground mb-1">Cost-to-Collect</div>
              <p className="text-sm text-muted-foreground">Average cost to process and collect payment per claim</p>
            </div>
            
            <div className="p-4 rounded-lg border bg-card">
              <div className="font-semibold text-foreground mb-1">Touch Time Reduction</div>
              <p className="text-sm text-muted-foreground">Hours saved per claim through automation</p>
            </div>
            
            <div className="p-4 rounded-lg border bg-card">
              <div className="font-semibold text-foreground mb-1">Automation Coverage</div>
              <p className="text-sm text-muted-foreground">Percentage of claims processed with automation assistance</p>
            </div>
            
            <div className="p-4 rounded-lg border bg-card">
              <div className="font-semibold text-foreground mb-1">Rework Rate</div>
              <p className="text-sm text-muted-foreground">Percentage of claims requiring manual intervention</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Strategic Phases */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
              <Layers className="w-5 h-5 text-success" />
            </div>
            <CardTitle className="text-2xl">Strategic Phases</CardTitle>
          </div>
          <CardDescription className="text-base">
            Incremental approach to building comprehensive automation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-lg border">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary flex-shrink-0">
                1
              </div>
              <div>
                <div className="font-semibold text-foreground mb-2">Stabilize → Standardize → Automate → Optimize</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Start with claims pre-submission validation, then expand to real-time processing rules
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg border">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary flex-shrink-0">
                2
              </div>
              <div>
                <div className="font-semibold text-foreground mb-2">Expand automation modules</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Build eligibility verification, coding assistance, and pre-submission workflow automation
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg border">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary flex-shrink-0">
                3
              </div>
              <div>
                <div className="font-semibold text-foreground mb-2">Build ML-powered denial intelligence</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Train models on historical patterns to predict and prevent denials before submission
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg border">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary flex-shrink-0">
                4
              </div>
              <div>
                <div className="font-semibold text-foreground mb-2">Provide unified operational dashboards</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Centralized visibility into KPIs, automation performance, and workflow bottlenecks
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stakeholders */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-accent" />
            </div>
            <CardTitle className="text-2xl">Key Stakeholders</CardTitle>
          </div>
          <CardDescription className="text-base">
            Teams and roles impacted by automation initiatives
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Billing teams", desc: "Direct users of claim screening and validation" },
              { title: "Coding teams", desc: "Benefit from coding guidance and automation" },
              { title: "Standardization leaders", desc: "Define rules and ensure consistency" },
              { title: "Practice administrators", desc: "Oversight of revenue cycle performance" },
              { title: "Development teams", desc: "Build and maintain automation platforms" },
              { title: "RCM leadership", desc: "Strategic direction and budget allocation" },
            ].map((stakeholder, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted/50">
                <div className="font-medium text-foreground mb-1">{stakeholder.title}</div>
                <p className="text-sm text-muted-foreground">{stakeholder.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
