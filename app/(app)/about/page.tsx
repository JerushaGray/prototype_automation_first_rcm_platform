import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserCog, Lightbulb, AlertTriangle, Workflow, CheckCircle2, Map, Target, ExternalLink } from 'lucide-react';
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <UserCog className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">About This Prototype</h1>
            <p className="text-lg text-muted-foreground mt-1">
              Built by <strong>Jerusha Gray — Product Owner, Automation & AI</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Why I Built This */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-accent" />
            </div>
            <CardTitle className="text-2xl">Why I Built This</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            This prototype was created as part of my application for the Product Owner, Automation role at HealthPrime. 
            It demonstrates how I approach complex operational challenges in healthcare revenue cycle management through 
            automation, standardization, and data-driven product thinking.
          </p>
        </CardContent>
      </Card>

      {/* The Challenge */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-error/10 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-error" />
            </div>
            <CardTitle className="text-2xl">The Challenge</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed text-pretty mb-4">
            Healthcare revenue cycle teams face mounting pressure from multiple directions:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-error mt-2 flex-shrink-0" />
              <span className="leading-relaxed">
                <strong className="text-foreground">High denial rates</strong> that erode revenue and require costly rework
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-error mt-2 flex-shrink-0" />
              <span className="leading-relaxed">
                <strong className="text-foreground">Inconsistent workflows</strong> across teams and facilities
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-error mt-2 flex-shrink-0" />
              <span className="leading-relaxed">
                <strong className="text-foreground">Manual pre-submission errors</strong> that could be caught earlier
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-error mt-2 flex-shrink-0" />
              <span className="leading-relaxed">
                <strong className="text-foreground">Fragmented processes</strong> without centralized automation
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-error mt-2 flex-shrink-0" />
              <span className="leading-relaxed">
                <strong className="text-foreground">Lack of proactive automation</strong> to scale operations efficiently
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* My Approach */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Workflow className="w-5 h-5 text-primary" />
            </div>
            <CardTitle className="text-2xl">My Approach</CardTitle>
          </div>
          <CardDescription className="text-base">
            How I would tackle this as a Product Owner
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Shadow users</strong> to understand current workflows, pain points, and edge cases
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Gather pain points through interviews and data</strong> to identify high-impact opportunities
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Translate insights into user stories</strong> with clear acceptance criteria
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Partner with standardization teams</strong> to ensure consistency across implementations
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Deliver incremental automation</strong> with measurable ROI at each release
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Define KPIs and measure ROI</strong> to validate impact and prioritize next features
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Skills Demonstrated */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-success" />
            </div>
            <CardTitle className="text-2xl">Skills Demonstrated</CardTitle>
          </div>
          <CardDescription className="text-base">
            Core competencies showcased in this prototype
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-foreground">Automation & RPA concepts</div>
                <p className="text-sm text-muted-foreground mt-1">Workflow optimization and intelligent automation patterns</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-foreground">AI-assisted UX</div>
                <p className="text-sm text-muted-foreground mt-1">Risk scoring and predictive analytics interfaces</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-foreground">RCM domain insight</div>
                <p className="text-sm text-muted-foreground mt-1">Healthcare revenue cycle operations understanding</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-foreground">Backlog architecture</div>
                <p className="text-sm text-muted-foreground mt-1">Feature prioritization and incremental delivery planning</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-foreground">Agile/Scrum methodologies</div>
                <p className="text-sm text-muted-foreground mt-1">Sprint planning and iterative development methodology</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-foreground">KPI-driven prioritization</div>
                <p className="text-sm text-muted-foreground mt-1">Data-driven decision making and ROI measurement</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How This Prototype Demonstrates Fit for the Product Owner, Automation Role */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <CardTitle className="text-2xl">How This Prototype Demonstrates Fit for the Product Owner, Automation Role</CardTitle>
          </div>
          <CardDescription className="text-base">
            Connecting the prototype to the responsibilities of the Product Owner, Automation role
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Product Vision & Roadmapping</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                The Vision Page shows how I define product direction, articulate value, establish KPIs, and outline strategic phases.
                Demonstrates an understanding of automation opportunities across the RCM lifecycle.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Requirements Gathering & User Insight</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                The Workflow Map reflects user-shadowing analysis, highlighting current-state gaps and automation opportunities.
                Shows how I identify pain points, map processes, and translate them into requirements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Backlog Creation & Prioritization</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                The Backlog Page includes real user stories with acceptance criteria, value scoring, and complexity evaluation.
                Demonstrates my ability to maintain a refined, prioritized backlog aligned with business value.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Automation Intake & Standardization Alignment</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                The Intake Page models a structured process for gathering operational input, RCA, business value, standardization impact, and feasibility.
                Reflects how I would partner with operations and standardization teams.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">AI & Automation Strategy Understanding</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                The Claims Module illustrates how automation and AI can support operational teams and reduce variability.
                Shows an ability to define measurable outcomes and support smarter workflows.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Cross-Functional Communication</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                The structured pages show how I break down complex problems into clear stories, requirements, and priorities.
                Demonstrates my ability to bridge the gap between business needs and technical delivery.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t">
              <p className="text-muted-foreground leading-relaxed text-pretty italic">
                Together, these elements show not only that I can build functional prototypes, but that I think holistically as a Product Owner—balancing user needs, business value, technical feasibility, and measurable outcomes.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Roadmap */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Map className="w-5 h-5 text-accent" />
            </div>
            <CardTitle className="text-2xl">Roadmap</CardTitle>
          </div>
          <CardDescription className="text-base">
            Future enhancements to expand automation capabilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 rounded-lg border">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary flex-shrink-0">
                1
              </div>
              <div>
                <div className="font-medium text-foreground">Operational intake form</div>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  Structured request form for teams to submit automation opportunities
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 rounded-lg border">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary flex-shrink-0">
                2
              </div>
              <div>
                <div className="font-medium text-foreground">Real-time rules engine</div>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  Configurable validation rules that execute during claim submission
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 rounded-lg border">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary flex-shrink-0">
                3
              </div>
              <div>
                <div className="font-medium text-foreground">EDI preprocessing</div>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  Automated claim validation before EDI file generation
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 rounded-lg border">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary flex-shrink-0">
                4
              </div>
              <div>
                <div className="font-medium text-foreground">Pattern-based denial prediction</div>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  Machine learning models trained on historical denial patterns by payer
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 rounded-lg border">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary flex-shrink-0">
                5
              </div>
              <div>
                <div className="font-medium text-foreground">Expanded automation modules</div>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  Additional RPA workflows for eligibility verification, prior auth, and appeals
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <p className="text-lg text-foreground leading-relaxed">
              Connect with me to discuss this prototype or product thinking in healthcare automation
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button asChild variant="outline">
                <Link href="https://www.linkedin.com/in/jerushagray/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://github.com/JerushaGray" target="_blank" rel="noopener noreferrer">
                  GitHub
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
