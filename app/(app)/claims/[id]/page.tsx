import { getClaimById } from "@/lib/get-claims";
import { RiskBadge } from "@/components/risk-badge";
import { IssueList } from "@/components/issue-list";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

interface ClaimDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ClaimDetailPage({ params }: ClaimDetailPageProps) {
  const { id } = await params;
  const claim = await getClaimById(id);

  if (!claim) {
    notFound();
  }

  return (
    <div className="px-8 py-6 space-y-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="sm" className="hover:bg-muted transition-all duration-200">
          <Link href="/claims">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Claims
          </Link>
        </Button>
      </div>

      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Claim Details</h1>
        <p className="text-muted-foreground mt-1 leading-relaxed">
          Detailed view and risk analysis for claim #{claim.id}
        </p>
      </div>

      <Card className="rounded-xl shadow-sm">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl font-semibold tracking-tight">{claim.patient_name}</CardTitle>
              <CardDescription className="mt-1 text-sm leading-relaxed">
                Claim ID: {claim.id}
              </CardDescription>
            </div>
            <RiskBadge score={claim.risk_score} />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Payer</p>
                <p className="text-base mt-1 font-medium">{claim.payer}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">CPT Code</p>
                <code className="text-base bg-muted px-2 py-1 rounded mt-1 inline-block font-mono">
                  {claim.cpt_code}
                </code>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">ICD Code</p>
                <code className="text-base bg-muted px-2 py-1 rounded mt-1 inline-block font-mono">
                  {claim.icd_code}
                </code>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Billed Amount</p>
                <p className="text-base mt-1 font-semibold">
                  ${claim.billed_amount.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Eligibility Status</p>
                <Badge
                  variant={
                    claim.eligibility_status === "active"
                      ? "default"
                      : "secondary"
                  }
                  className={
                    claim.eligibility_status === "active"
                      ? "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20 mt-1"
                      : "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20 mt-1"
                  }
                >
                  {claim.eligibility_status}
                </Badge>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Risk Score</p>
                <p className="text-base mt-1 font-semibold">{claim.risk_score}/100</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <IssueList issues={claim.issues} />
    </div>
  );
}
