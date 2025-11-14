import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, TrendingUp, Layers, Timer } from 'lucide-react';
import { Footer } from "@/components/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Image src="/aa_primary.png" alt="AA" width={20} height={20} />
                Automation Assistant
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                If This Is What I Build in Less Than 90 Minutes, Imagine What I Can Build With Your Team
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                This prototype shows how I approach automation opportunities at scale: structured intake, standardized workflows, AI-supported insights, and clear measurable value across the revenue cycle.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link href="/dashboard">
                    View Dashboard
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base">
                  <Link href="/about">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative aspect-[4/3] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-success/5 rounded-2xl" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <Image 
                  src="/workflow-illustration.png" 
                  alt="Automated Claims Workflow: Claim → Eligibility Check (AI) → Coding Validation (AI) → Risk Scoring → Submission"
                  width={1400}
                  height={900}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">
              Built for Modern Revenue Cycle Teams
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Four core pillars that transform how healthcare organizations manage claims
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Automation-First Workflows</CardTitle>
                <CardDescription className="leading-relaxed">
                  Eliminate manual claim screening with intelligent automation that catches issues before submission
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">AI-Assisted Risk Scoring</CardTitle>
                <CardDescription className="leading-relaxed">
                  Proactive risk identification powered by machine learning and historical patterns
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-success" />
                </div>
                <CardTitle className="text-xl">RCM Standardization</CardTitle>
                <CardDescription className="leading-relaxed">
                  Consistent processes and quality control across all revenue cycle operations
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center mb-4">
                  <Timer className="w-6 h-6 text-warning" />
                </div>
                <CardTitle className="text-xl">Operational Efficiency</CardTitle>
                <CardDescription className="leading-relaxed">
                  Reduce cycle times and improve first-pass resolution rates with smart prioritization
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">
                See It In Action
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Explore the dashboard and claim management interface
              </p>
            </div>
            
            <Button asChild size="lg" className="text-base">
              <Link href="/dashboard">
                View Live Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer variant="landing" />
    </div>
  );
}
