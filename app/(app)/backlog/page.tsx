import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ListTodo } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export default function BacklogPage() {
  const stories = [
    {
      id: "US-001",
      story: "As a billing specialist, I want automated risk scoring on claims so that I can prioritize high-risk claims for review",
      acceptanceCriteria: "Risk score visible on claim detail page; Claims sortable by risk level; Score updates in real-time",
      value: "High",
      complexity: "Medium",
      priority: "P0",
    },
    {
      id: "US-002",
      story: "As a revenue cycle manager, I want pre-submission validation rules so that claims are checked before they go out",
      acceptanceCriteria: "Rules engine configurable by admin; Validation runs on save/submit; Errors displayed with clear messaging",
      value: "High",
      complexity: "High",
      priority: "P0",
    },
    {
      id: "US-003",
      story: "As a billing specialist, I want workflow alerts for missing data so that I can fix issues before submission",
      acceptanceCriteria: "Alerts show on claim form; Contextual guidance provided; Alert dismissible after resolution",
      value: "High",
      complexity: "Low",
      priority: "P1",
    },
    {
      id: "US-004",
      story: "As a billing specialist, I want real-time eligibility checks so that I know coverage status before submitting",
      acceptanceCriteria: "Eligibility check button on claim form; Results displayed within 3 seconds; Status saved with claim",
      value: "High",
      complexity: "Medium",
      priority: "P1",
    },
    {
      id: "US-005",
      story: "As a standardization lead, I want a payer rule library so that we enforce consistent validation across facilities",
      acceptanceCriteria: "Admin interface to manage rules; Rules mapped to payers; Version control for rule changes",
      value: "Medium",
      complexity: "High",
      priority: "P2",
    },
    {
      id: "US-006",
      story: "As a revenue cycle manager, I want an automation coverage dashboard so that I can track automation adoption",
      acceptanceCriteria: "Dashboard shows % of claims automated; Drill-down by facility and payer; Export to CSV",
      value: "Medium",
      complexity: "Medium",
      priority: "P2",
    },
    {
      id: "US-007",
      story: "As an operations director, I want an automation intake form so that teams can request new automation opportunities",
      acceptanceCriteria: "Form captures workflow area, pain points, and ROI; Submissions stored in database; Admin review queue",
      value: "Medium",
      complexity: "Low",
      priority: "P2",
    },
    {
      id: "US-008",
      story: "As a billing specialist, I want intelligent claim routing so that claims automatically go to the right queue",
      acceptanceCriteria: "Claims route based on risk score and payer; Manual override available; Audit log of routing decisions",
      value: "High",
      complexity: "Medium",
      priority: "P1",
    },
    {
      id: "US-009",
      story: "As a standardization lead, I want standardization mapping tools so that we normalize data across systems",
      acceptanceCriteria: "Mapping interface for codes and values; Bulk import/export; Change history tracking",
      value: "Medium",
      complexity: "High",
      priority: "P2",
    },
    {
      id: "US-010",
      story: "As a revenue cycle manager, I want denial pattern analytics so that I can identify recurring issues by payer",
      acceptanceCriteria: "Dashboard shows top denial reasons; Filterable by payer and date range; Trend analysis over time",
      value: "High",
      complexity: "Medium",
      priority: "P1",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "P0":
        return "bg-error/10 text-error border-error/20";
      case "P1":
        return "bg-warning/10 text-warning border-warning/20";
      case "P2":
        return "bg-accent/10 text-accent border-accent/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getValueColor = (value: string) => {
    switch (value) {
      case "High":
        return "bg-success/10 text-success border-success/20";
      case "Medium":
        return "bg-accent/10 text-accent border-accent/20";
      case "Low":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "High":
        return "bg-error/10 text-error border-error/20";
      case "Medium":
        return "bg-warning/10 text-warning border-warning/20";
      case "Low":
        return "bg-success/10 text-success border-success/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <ListTodo className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Product Backlog & Prioritization</h1>
            <p className="text-lg text-muted-foreground mt-1">
              User stories ranked by value, complexity, and priority
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Backlog Overview</CardTitle>
          <CardDescription>
            This backlog demonstrates how I would prioritize features for a claims automation product. Stories are 
            ranked using a value-complexity matrix, considering business impact, user needs, and technical feasibility.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* User Stories */}
      <div className="space-y-4">
        {stories.map((story) => (
          <Card key={story.id} className="hover:shadow-md transition-all duration-200">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="outline" className="font-mono text-xs">
                      {story.id}
                    </Badge>
                    <Badge className={getPriorityColor(story.priority)}>
                      {story.priority}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-relaxed">{story.story}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-semibold text-foreground mb-2">Acceptance Criteria</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{story.acceptanceCriteria}</p>
                </div>
                
                <div className="flex items-center gap-4 pt-2 border-t">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-muted-foreground">Value:</span>
                    <Badge variant="outline" className={getValueColor(story.value)}>
                      {story.value}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-muted-foreground">Complexity:</span>
                    <Badge variant="outline" className={getComplexityColor(story.complexity)}>
                      {story.complexity}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Legend */}
      <Card className="bg-muted/30">
        <CardHeader>
          <CardTitle className="text-lg">Priority Legend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <Badge className="bg-error/10 text-error border-error/20 mb-2">P0</Badge>
              <p className="text-muted-foreground">Critical - Ship immediately</p>
            </div>
            <div>
              <Badge className="bg-warning/10 text-warning border-warning/20 mb-2">P1</Badge>
              <p className="text-muted-foreground">High - Next sprint</p>
            </div>
            <div>
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-2">P2</Badge>
              <p className="text-muted-foreground">Medium - Future iteration</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
