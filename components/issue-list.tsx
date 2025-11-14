import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { ClaimIssue } from "@/lib/get-claims";

interface IssueListProps {
  issues: ClaimIssue[];
}

export function IssueList({ issues }: IssueListProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "low":
        return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20";
      case "medium":
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20";
      case "high":
        return "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20";
      default:
        return "";
    }
  };

  if (issues.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Issues</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">No issues detected</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Issues Detected</CardTitle>
        <CardDescription>
          {issues.length} {issues.length === 1 ? "issue" : "issues"} found that may impact claim approval
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {issues.map((issue, index) => (
          <div key={index}>
            {index > 0 && <Separator className="mb-4" />}
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-semibold text-sm">{issue.title}</h4>
                <Badge className={getSeverityColor(issue.severity)}>
                  {issue.severity}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{issue.recommendation}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
