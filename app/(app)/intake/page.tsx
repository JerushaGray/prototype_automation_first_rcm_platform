"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Inbox, Send } from 'lucide-react';
import { useState } from "react";

export default function IntakePage() {
  const [formData, setFormData] = useState({
    workflowArea: "",
    problemDescription: "",
    userRoles: "",
    painPoints: "",
    rcaSummary: "",
    businessValue: "",
    automationFeasibility: "",
    standardizationImpact: "",
    dependencies: "",
    successMetrics: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[v0] Automation Intake Form Submitted:", formData);
    alert("Thank you! Your automation request has been submitted for review.");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Inbox className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Automation Intake Form</h1>
            <p className="text-lg text-muted-foreground mt-1">
              Submit automation opportunities for evaluation and prioritization
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Submit Your Automation Idea</CardTitle>
          <CardDescription className="leading-relaxed">
            Help us identify automation opportunities by sharing workflow pain points, business value, and technical feasibility. 
            Your submission will be reviewed by the Product Owner and prioritized in the backlog.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Form */}
      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Workflow Area */}
            <div className="space-y-2">
              <Label htmlFor="workflowArea">Workflow Area *</Label>
              <Select onValueChange={(value) => handleChange("workflowArea", value)}>
                <SelectTrigger id="workflowArea">
                  <SelectValue placeholder="Select workflow area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="claims">Claims Processing</SelectItem>
                  <SelectItem value="eligibility">Eligibility Verification</SelectItem>
                  <SelectItem value="coding">Coding & Documentation</SelectItem>
                  <SelectItem value="denial">Denial Management</SelectItem>
                  <SelectItem value="auth">Prior Authorization</SelectItem>
                  <SelectItem value="billing">Billing & Collections</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Problem Description */}
            <div className="space-y-2">
              <Label htmlFor="problemDescription">Problem Description *</Label>
              <Textarea
                id="problemDescription"
                placeholder="Describe the current manual process and what makes it inefficient..."
                rows={4}
                value={formData.problemDescription}
                onChange={(e) => handleChange("problemDescription", e.target.value)}
                className="resize-none"
              />
            </div>

            {/* User Roles Affected */}
            <div className="space-y-2">
              <Label htmlFor="userRoles">User Roles Affected *</Label>
              <Input
                id="userRoles"
                type="text"
                placeholder="e.g., Billing Specialists, Coding Teams, Practice Managers"
                value={formData.userRoles}
                onChange={(e) => handleChange("userRoles", e.target.value)}
              />
            </div>

            {/* Pain Points */}
            <div className="space-y-2">
              <Label htmlFor="painPoints">Pain Points *</Label>
              <Textarea
                id="painPoints"
                placeholder="What specific pain points do users experience? How does this impact their daily work?"
                rows={4}
                value={formData.painPoints}
                onChange={(e) => handleChange("painPoints", e.target.value)}
                className="resize-none"
              />
            </div>

            {/* RCA Summary */}
            <div className="space-y-2">
              <Label htmlFor="rcaSummary">Root Cause Analysis Summary</Label>
              <Textarea
                id="rcaSummary"
                placeholder="What is the root cause of this inefficiency? Have you conducted an RCA or gathered data?"
                rows={3}
                value={formData.rcaSummary}
                onChange={(e) => handleChange("rcaSummary", e.target.value)}
                className="resize-none"
              />
              <p className="text-xs text-muted-foreground">Optional but strongly recommended</p>
            </div>

            {/* Scoring Section */}
            <div className="grid md:grid-cols-3 gap-4 pt-4 border-t">
              <div className="space-y-2">
                <Label htmlFor="businessValue">Business Value Score (1-5) *</Label>
                <Select onValueChange={(value) => handleChange("businessValue", value)}>
                  <SelectTrigger id="businessValue">
                    <SelectValue placeholder="Rate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 - Low Impact</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3 - Medium Impact</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5 - High Impact</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="automationFeasibility">Automation Feasibility (1-5) *</Label>
                <Select onValueChange={(value) => handleChange("automationFeasibility", value)}>
                  <SelectTrigger id="automationFeasibility">
                    <SelectValue placeholder="Rate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 - Very Complex</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3 - Moderate</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5 - Easy to Automate</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="standardizationImpact">Standardization Impact (1-5) *</Label>
                <Select onValueChange={(value) => handleChange("standardizationImpact", value)}>
                  <SelectTrigger id="standardizationImpact">
                    <SelectValue placeholder="Rate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 - No Standardization</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3 - Some Consistency</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5 - Fully Standardized</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Dependencies */}
            <div className="space-y-2">
              <Label htmlFor="dependencies">Dependencies</Label>
              <Input
                id="dependencies"
                type="text"
                placeholder="e.g., Integration with EHR, API access to payer systems"
                value={formData.dependencies}
                onChange={(e) => handleChange("dependencies", e.target.value)}
              />
            </div>

            {/* Success Metrics */}
            <div className="space-y-2">
              <Label htmlFor="successMetrics">Proposed Success Metrics *</Label>
              <Textarea
                id="successMetrics"
                placeholder="How would you measure success? (e.g., Time saved per claim, reduction in rework, increase in clean claim rate)"
                rows={3}
                value={formData.successMetrics}
                onChange={(e) => handleChange("successMetrics", e.target.value)}
                className="resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <Button type="submit" size="lg" className="gap-2">
                <Send className="w-4 h-4" />
                Submit Request
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Help Text */}
      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            All submissions are reviewed within 5 business days. High-priority requests will be added to the backlog and 
            scheduled for the next sprint planning session. You'll receive email confirmation once your request has been evaluated.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
