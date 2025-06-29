export type BusinessType = 'ec' | 'retail' | 'service' | 'manufacturing' | 'professional';

export type EmployeeRange = '3-5' | '6-10' | '11-15';

export type RevenueRange = '20m' | '30m';

export type RevenueSource = 'store' | 'online' | 'contract' | 'mixed';

export interface BasicInfo {
  businessType: BusinessType;
  employeeRange: EmployeeRange;
  revenueRange: RevenueRange;
  revenueSource: RevenueSource;
}

export interface BusinessOperations {
  customerManagement: {
    infoManagement: 'spreadsheet' | 'crm' | 'paper' | 'none';
    proposalCreation: 'manual' | 'template' | 'automated';
    followUp: 'manual' | 'scheduled' | 'none';
    recordManagement: 'spreadsheet' | 'crm' | 'paper';
  };
  accounting: {
    invoicing: 'manual' | 'accounting_software' | 'automated';
    expenseProcessing: 'manual' | 'app' | 'automated';
    salesAggregation: 'manual' | 'spreadsheet' | 'automated';
    taxDocuments: 'manual' | 'tax_software' | 'outsourced';
  };
  marketing: {
    socialMedia: 'manual' | 'scheduled' | 'none';
    advertising: 'manual' | 'platform_managed' | 'none';
    customerEmails: 'manual' | 'email_service' | 'none';
    websiteUpdates: 'manual' | 'cms' | 'none';
  };
  inventory?: {
    stockManagement: 'manual' | 'spreadsheet' | 'system';
    productData: 'manual' | 'spreadsheet' | 'database';
    pricing: 'manual' | 'rule_based' | 'dynamic';
  };
}

export interface BusinessChallenges {
  timeConsumingTasks: string[];
  overtimeAreas: string[];
  errorProneAreas: string[];
  dependentProcesses: string[];
}

export interface DiagnosisResult {
  aiScore: number;
  annualTimeSavings: number;
  annualCostSavings: number;
  roi: number;
  recommendations: Recommendation[];
}

export interface Recommendation {
  priority: 'immediate' | 'short' | 'medium';
  timeframe: string;
  title: string;
  description: string;
  estimatedTimeSaving: number;
  estimatedCostSaving: number;
  tools: string[];
}

export interface FormData {
  basicInfo: BasicInfo;
  operations: BusinessOperations;
  challenges: BusinessChallenges;
}