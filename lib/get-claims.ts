// Placeholder data functions for claims
export interface Claim {
  id: string;
  patient_name: string;
  payer: string;
  cpt_code: string;
  icd_code: string;
  billed_amount: number;
  eligibility_status: string;
  risk_score: number;
}

export interface ClaimIssue {
  title: string;
  severity: "low" | "medium" | "high";
  recommendation: string;
}

export interface ClaimDetail extends Claim {
  issues: ClaimIssue[];
}

export async function getClaims(): Promise<Claim[]> {
  return [
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
}

export async function getClaimById(id: string): Promise<ClaimDetail | null> {
  const claims: Record<string, ClaimDetail> = {
    "1": {
      id: "1",
      patient_name: "John Smith",
      payer: "Aetna",
      cpt_code: "99213",
      icd_code: "J02.9",
      billed_amount: 120,
      eligibility_status: "active",
      risk_score: 42,
      issues: [
        {
          title: "Missing Prior Authorization",
          severity: "high",
          recommendation: "Verify prior authorization with payer before submitting claim.",
        },
        {
          title: "Documentation Incomplete",
          severity: "medium",
          recommendation: "Ensure all required medical records are attached.",
        },
      ],
    },
    "2": {
      id: "2",
      patient_name: "Sarah Johnson",
      payer: "Blue Cross",
      cpt_code: "99214",
      icd_code: "I10",
      billed_amount: 185,
      eligibility_status: "active",
      risk_score: 78,
      issues: [
        {
          title: "Code Mismatch Detected",
          severity: "high",
          recommendation: "Review CPT and ICD code pairing for medical necessity.",
        },
        {
          title: "Duplicate Claim Risk",
          severity: "high",
          recommendation: "Check for previously submitted claims with same date of service.",
        },
        {
          title: "Missing Modifier",
          severity: "medium",
          recommendation: "Add appropriate modifier to CPT code if applicable.",
        },
      ],
    },
    "3": {
      id: "3",
      patient_name: "Michael Chen",
      payer: "UnitedHealthcare",
      cpt_code: "99215",
      icd_code: "E11.9",
      billed_amount: 220,
      eligibility_status: "inactive",
      risk_score: 85,
      issues: [
        {
          title: "Patient Eligibility Inactive",
          severity: "high",
          recommendation: "Verify patient insurance eligibility before claim submission.",
        },
        {
          title: "Prior Authorization Required",
          severity: "high",
          recommendation: "Obtain prior authorization for this CPT code.",
        },
      ],
    },
    "4": {
      id: "4",
      patient_name: "Emily Davis",
      payer: "Cigna",
      cpt_code: "99212",
      icd_code: "M79.3",
      billed_amount: 95,
      eligibility_status: "active",
      risk_score: 15,
      issues: [
        {
          title: "Minor Documentation Gap",
          severity: "low",
          recommendation: "Consider adding supplemental notes for better claim support.",
        },
      ],
    },
    "5": {
      id: "5",
      patient_name: "David Martinez",
      payer: "Humana",
      cpt_code: "99213",
      icd_code: "R51.9",
      billed_amount: 130,
      eligibility_status: "active",
      risk_score: 58,
      issues: [
        {
          title: "Timely Filing Alert",
          severity: "medium",
          recommendation: "Submit claim within payer's timely filing deadline.",
        },
        {
          title: "Coding Specificity",
          severity: "medium",
          recommendation: "Use more specific ICD code if clinical documentation supports it.",
        },
      ],
    },
  };

  return claims[id] || null;
}
