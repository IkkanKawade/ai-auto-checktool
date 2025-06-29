'use client';

import { useState } from 'react';
import StepIndicator from '@/components/StepIndicator';
import BasicInfoForm from '@/components/forms/BasicInfoForm';
import OperationsForm from '@/components/forms/OperationsForm';
import ChallengesForm from '@/components/forms/ChallengesForm';
import DiagnosisResultComponent from '@/components/DiagnosisResult';
import { FormData, BasicInfo, BusinessOperations, BusinessChallenges, DiagnosisResult } from '@/types';
import { calculateDiagnosis } from '@/lib/scoring';

const stepTitles = ['基本情報', '業務実態', '課題分析', '診断結果'];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    basicInfo: {
      businessType: '' as any,
      employeeRange: '' as any,
      revenueRange: '' as any,
      revenueSource: '' as any
    },
    operations: {
      customerManagement: {
        infoManagement: '' as any,
        proposalCreation: '' as any,
        followUp: '' as any,
        recordManagement: '' as any
      },
      accounting: {
        invoicing: '' as any,
        expenseProcessing: '' as any,
        salesAggregation: '' as any,
        taxDocuments: '' as any
      },
      marketing: {
        socialMedia: '' as any,
        advertising: '' as any,
        customerEmails: '' as any,
        websiteUpdates: '' as any
      }
    },
    challenges: {
      timeConsumingTasks: [],
      overtimeAreas: [],
      errorProneAreas: [],
      dependentProcesses: []
    }
  });
  const [diagnosisResult, setDiagnosisResult] = useState<DiagnosisResult | null>(null);

  const showInventory = formData.basicInfo.businessType === 'ec' || 
                       formData.basicInfo.businessType === 'retail' || 
                       formData.basicInfo.businessType === 'manufacturing';

  const handleBasicInfoChange = (data: BasicInfo) => {
    setFormData({ ...formData, basicInfo: data });
  };

  const handleOperationsChange = (data: BusinessOperations) => {
    setFormData({ ...formData, operations: data });
  };

  const handleChallengesChange = (data: BusinessChallenges) => {
    setFormData({ ...formData, challenges: data });
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    const result = calculateDiagnosis(formData);
    setDiagnosisResult(result);
    setCurrentStep(3);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setFormData({
      basicInfo: {
        businessType: '' as any,
        employeeRange: '' as any,
        revenueRange: '' as any,
        revenueSource: '' as any
      },
      operations: {
        customerManagement: {
          infoManagement: '' as any,
          proposalCreation: '' as any,
          followUp: '' as any,
          recordManagement: '' as any
        },
        accounting: {
          invoicing: '' as any,
          expenseProcessing: '' as any,
          salesAggregation: '' as any,
          taxDocuments: '' as any
        },
        marketing: {
          socialMedia: '' as any,
          advertising: '' as any,
          customerEmails: '' as any,
          websiteUpdates: '' as any
        }
      },
      challenges: {
        timeConsumingTasks: [],
        overtimeAreas: [],
        errorProneAreas: [],
        dependentProcesses: []
      }
    });
    setDiagnosisResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            小規模事業者向けAI業務自動化診断ツール
          </h1>
          <p className="mt-2 text-gray-600">
            あなたのビジネスに最適なAI活用方法を診断します
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <StepIndicator 
          currentStep={currentStep} 
          totalSteps={4} 
          stepTitles={stepTitles}
        />

        <div className="bg-white rounded-lg shadow-md p-8 mt-8">
          {currentStep === 0 && (
            <BasicInfoForm
              data={formData.basicInfo}
              onChange={handleBasicInfoChange}
              onNext={handleNext}
            />
          )}

          {currentStep === 1 && (
            <OperationsForm
              data={formData.operations}
              onChange={handleOperationsChange}
              onNext={handleNext}
              onBack={handleBack}
              showInventory={showInventory}
            />
          )}

          {currentStep === 2 && (
            <ChallengesForm
              data={formData.challenges}
              onChange={handleChallengesChange}
              onSubmit={handleSubmit}
              onBack={handleBack}
            />
          )}

          {currentStep === 3 && diagnosisResult && (
            <DiagnosisResultComponent
              result={diagnosisResult}
              onReset={handleReset}
            />
          )}
        </div>
      </main>
    </div>
  );
}