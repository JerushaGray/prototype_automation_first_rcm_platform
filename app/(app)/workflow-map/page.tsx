import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Workflow, AlertTriangle, Sparkles, TrendingUp } from 'lucide-react';

export default function WorkflowMapPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Workflow className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Workflow Map & Journey Overview</h1>
            <p className="text-lg text-muted-foreground mt-1">
              Understanding current state and planning future automation
            </p>
          </div>
        </div>
      </div>

      {/* Current State */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Current State</CardTitle>
          <CardDescription className="text-base">
            How claims are processed today without automation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-error/5 border border-error/20">
              <div className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-error" />
                Manual pre-checks
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Staff manually review claims for common errors before submission, leading to inconsistent quality and high touch time
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-error/5 border border-error/20">
              <div className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-error" />
                Missing or incorrect data
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Claims submitted with incomplete patient information, incorrect codes, or missing documentation
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-error/5 border border-error/20">
              <div className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-error" />
                Broken workflows
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No standardized process for handling errors, leading to claims sitting in queues or being overlooked
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-error/5 border border-error/20">
              <div className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-error" />
                Lack of standardization
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Different teams and facilities follow different validation procedures, creating quality inconsistencies
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pain Points */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-error/10 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-error" />
            </div>
            <CardTitle className="text-2xl">Pain Points</CardTitle>
          </div>
          <CardDescription className="text-base">
            Critical issues driving the need for automation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border">
              <div className="font-semibold text-foreground mb-2">High denials</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                15-20% denial rate erodes revenue and creates costly rework loops
              </p>
            </div>
            
            <div className="p-4 rounded-lg border">
              <div className="font-semibold text-foreground mb-2">Rework loops</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Claims bounce back multiple times, increasing cost-to-collect
              </p>
            </div>
            
            <div className="p-4 rounded-lg border">
              <div className="font-semibold text-foreground mb-2">Redundant user actions</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Staff perform the same validations repeatedly without automation
              </p>
            </div>
            
            <div className="p-4 rounded-lg border">
              <div className="font-semibold text-foreground mb-2">Inconsistent quality</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Quality depends on individual staff knowledge and attention to detail
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Future State Automation */}
      <Card className="border-success/50 bg-gradient-to-br from-success/5 to-primary/5">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-success" />
            </div>
            <CardTitle className="text-2xl">Future State Automation</CardTitle>
          </div>
          <CardDescription className="text-base">
            How automation transforms the claims workflow
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-success/5 border border-success/20">
              <div className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-success" />
                Automated eligibility validation
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Real-time checks against payer requirements before claim submission, catching errors early
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-success/5 border border-success/20">
              <div className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-success" />
                AI-powered risk scoring
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Machine learning models identify high-risk claims and surface them for review before submission
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-success/5 border border-success/20">
              <div className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-success" />
                Guided corrections
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Contextual suggestions help staff fix issues quickly with clear next steps and validation
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-success/5 border border-success/20">
              <div className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-success" />
                RPA-driven routing
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Automated claim routing to appropriate queues and workflows based on risk level and issue type
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Impact Metrics */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <CardTitle className="text-2xl">Expected Impact Metrics</CardTitle>
          </div>
          <CardDescription className="text-base">
            Quantifiable improvements from automation implementation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="text-4xl font-bold text-primary mb-2">-40%</div>
              <div className="text-sm font-medium text-foreground mb-1">Reduction in rework</div>
              <p className="text-xs text-muted-foreground">Fewer claims requiring manual correction</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-success/5 to-primary/5">
              <div className="text-4xl font-bold text-success mb-2">+25%</div>
              <div className="text-sm font-medium text-foreground mb-1">Increase in clean claim rate</div>
              <p className="text-xs text-muted-foreground">More claims accepted on first submission</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-accent/5 to-success/5">
              <div className="text-4xl font-bold text-accent mb-2">3-5 min</div>
              <div className="text-sm font-medium text-foreground mb-1">Time saved per claim</div>
              <p className="text-xs text-muted-foreground">Reduced manual validation and correction time</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/5 to-success/5">
              <div className="text-4xl font-bold text-primary mb-2">-30%</div>
              <div className="text-sm font-medium text-foreground mb-1">Lower cost-to-collect</div>
              <p className="text-xs text-muted-foreground">Decreased operational expenses per claim</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
