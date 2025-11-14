'use client';

import { useState, useMemo } from "react";
import { RiskBadge } from "@/components/risk-badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Search } from 'lucide-react';

const mockClaims = [
  {
    id: "1",
    patient_name: "John Smith",
    payer: "Aetna",
    cpt_code: "99213",
    icd_code: "J02.9",
    billed_amount: 120,
    eligibility_status: "active",
    risk_score: 42,
  },
  {
    id: "2",
    patient_name: "Sarah Johnson",
    payer: "Blue Cross",
    cpt_code: "99214",
    icd_code: "I10",
    billed_amount: 185,
    eligibility_status: "active",
    risk_score: 78,
  },
  {
    id: "3",
    patient_name: "Michael Chen",
    payer: "UnitedHealthcare",
    cpt_code: "99215",
    icd_code: "E11.9",
    billed_amount: 220,
    eligibility_status: "inactive",
    risk_score: 85,
  },
  {
    id: "4",
    patient_name: "Emily Davis",
    payer: "Cigna",
    cpt_code: "99212",
    icd_code: "M79.3",
    billed_amount: 95,
    eligibility_status: "active",
    risk_score: 15,
  },
  {
    id: "5",
    patient_name: "David Martinez",
    payer: "Humana",
    cpt_code: "99213",
    icd_code: "R51.9",
    billed_amount: 130,
    eligibility_status: "active",
    risk_score: 58,
  },
];

export default function ClaimsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [riskFilter, setRiskFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredClaims = useMemo(() => {
    return mockClaims.filter((claim) => {
      const matchesSearch = 
        claim.patient_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        claim.id.includes(searchTerm) ||
        claim.payer.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesRisk = 
        riskFilter === "all" ||
        (riskFilter === "low" && claim.risk_score <= 30) ||
        (riskFilter === "medium" && claim.risk_score > 30 && claim.risk_score <= 70) ||
        (riskFilter === "high" && claim.risk_score > 70);
      
      const matchesStatus = 
        statusFilter === "all" ||
        claim.eligibility_status === statusFilter;

      return matchesSearch && matchesRisk && matchesStatus;
    });
  }, [searchTerm, riskFilter, statusFilter]);

  return (
    <div className="px-8 py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Claims</h1>
        <p className="text-muted-foreground mt-1 leading-relaxed">
          Review all claims with automated risk scoring
        </p>
      </div>

      <Card className="rounded-xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-semibold tracking-tight">All Claims</CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            {filteredClaims.length} of {mockClaims.length} claims displayed
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by patient, claim ID, or payer..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={riskFilter} onValueChange={setRiskFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Risk Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Risk Levels</SelectItem>
                <SelectItem value="low">Low (0-30)</SelectItem>
                <SelectItem value="medium">Medium (31-70)</SelectItem>
                <SelectItem value="high">High (71+)</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Patient Name</TableHead>
                  <TableHead className="font-semibold">Payer</TableHead>
                  <TableHead className="font-semibold">CPT Code</TableHead>
                  <TableHead className="font-semibold">ICD Code</TableHead>
                  <TableHead className="text-right font-semibold">Billed Amount</TableHead>
                  <TableHead className="font-semibold">Eligibility</TableHead>
                  <TableHead className="font-semibold">Risk Score</TableHead>
                  <TableHead className="text-right font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredClaims.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                      No claims found matching your filters
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredClaims.map((claim) => (
                    <TableRow key={claim.id} className="hover:bg-muted/50 transition-colors duration-200">
                      <TableCell className="font-medium">
                        {claim.patient_name}
                      </TableCell>
                      <TableCell>{claim.payer}</TableCell>
                      <TableCell>
                        <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
                          {claim.cpt_code}
                        </code>
                      </TableCell>
                      <TableCell>
                        <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
                          {claim.icd_code}
                        </code>
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        ${claim.billed_amount.toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            claim.eligibility_status === "active"
                              ? "default"
                              : "secondary"
                          }
                          className={
                            claim.eligibility_status === "active"
                              ? "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                              : "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20"
                          }
                        >
                          {claim.eligibility_status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <RiskBadge score={claim.risk_score} />
                      </TableCell>
                      <TableCell className="text-right">
                        <Button asChild size="sm" variant="ghost" className="hover:bg-primary/10 transition-colors duration-200">
                          <Link href={`/claims/${claim.id}`}>View</Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
