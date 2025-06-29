import { FormData, DiagnosisResult, Recommendation } from '@/types';

const operationScores = {
  customerManagement: {
    infoManagement: { spreadsheet: 50, crm: 80, paper: 20, none: 0 },
    proposalCreation: { manual: 30, template: 60, automated: 90 },
    followUp: { manual: 40, scheduled: 70, none: 10 },
    recordManagement: { spreadsheet: 50, crm: 80, paper: 20 }
  },
  accounting: {
    invoicing: { manual: 30, accounting_software: 70, automated: 90 },
    expenseProcessing: { manual: 30, app: 70, automated: 90 },
    salesAggregation: { manual: 30, spreadsheet: 60, automated: 90 },
    taxDocuments: { manual: 40, tax_software: 70, outsourced: 80 }
  },
  marketing: {
    socialMedia: { manual: 40, scheduled: 70, none: 20 },
    advertising: { manual: 40, platform_managed: 70, none: 20 },
    customerEmails: { manual: 30, email_service: 70, none: 20 },
    websiteUpdates: { manual: 30, cms: 70, none: 20 }
  },
  inventory: {
    stockManagement: { manual: 30, spreadsheet: 60, system: 80 },
    productData: { manual: 30, spreadsheet: 60, database: 80 },
    pricing: { manual: 30, rule_based: 60, dynamic: 90 }
  }
};

const taskTimeSavings: Record<string, number> = {
  '顧客対応・問い合わせ対応': 20,
  '見積書・提案書作成': 15,
  '請求書作成・送付': 10,
  '経費精算・帳簿付け': 15,
  'SNS投稿・コンテンツ作成': 10,
  'メール作成・送信': 8,
  '在庫確認・発注': 12,
  'データ入力・転記': 15,
  '報告書・レポート作成': 12,
  'スケジュール調整': 5
};

function calculateBaseScore(operations: FormData['operations']): number {
  let totalScore = 0;
  let totalCategories = 0;

  Object.entries(operations).forEach(([category, items]) => {
    if (items && category in operationScores) {
      const categoryScores = operationScores[category as keyof typeof operationScores];
      Object.entries(items).forEach(([item, value]) => {
        if (item in categoryScores && value) {
          const itemScores = categoryScores[item as keyof typeof categoryScores] as Record<string, number>;
          if (itemScores && typeof value === 'string' && value in itemScores) {
            totalScore += itemScores[value];
            totalCategories++;
          }
        }
      });
    }
  });

  return totalCategories > 0 ? Math.round(totalScore / totalCategories) : 0;
}

function calculateTimeSavings(challenges: FormData['challenges']): number {
  let monthlyHours = 0;
  
  challenges.timeConsumingTasks.forEach(task => {
    monthlyHours += taskTimeSavings[task] || 5;
  });
  
  monthlyHours += challenges.overtimeAreas.length * 8;
  monthlyHours += challenges.errorProneAreas.length * 3;
  monthlyHours += challenges.dependentProcesses.filter(p => p !== '属人化なし').length * 10;
  
  return Math.round(monthlyHours * 12);
}

function generateRecommendations(formData: FormData): Recommendation[] {
  const recommendations: Recommendation[] = [];
  const { operations, challenges } = formData;
  
  // 即座に導入可能な提案
  if (operations.customerManagement.proposalCreation === 'manual') {
    recommendations.push({
      priority: 'immediate',
      timeframe: '1-2ヶ月',
      title: 'ChatGPTを活用した提案書・見積書の自動生成',
      description: 'テンプレートとChatGPTを組み合わせて、顧客情報を入力するだけで提案書を自動生成',
      estimatedTimeSaving: 180,
      estimatedCostSaving: 360000,
      tools: ['ChatGPT', 'Googleドキュメント', 'テンプレート']
    });
  }
  
  if (operations.marketing.socialMedia === 'manual') {
    recommendations.push({
      priority: 'immediate',
      timeframe: '1-2ヶ月',
      title: 'SNS投稿の自動化・予約投稿',
      description: 'AI画像生成とスケジュール管理ツールで投稿を効率化',
      estimatedTimeSaving: 120,
      estimatedCostSaving: 240000,
      tools: ['Buffer', 'Canva AI', 'ChatGPT']
    });
  }
  
  // 短期導入の提案
  if (operations.accounting.invoicing === 'manual') {
    recommendations.push({
      priority: 'short',
      timeframe: '3-4ヶ月',
      title: '請求書発行の自動化システム導入',
      description: '顧客データベースと連携した請求書自動生成・送付システム',
      estimatedTimeSaving: 120,
      estimatedCostSaving: 240000,
      tools: ['freee', 'マネーフォワード', 'APIカスタマイズ']
    });
  }
  
  if (operations.customerManagement.infoManagement !== 'crm') {
    recommendations.push({
      priority: 'short',
      timeframe: '3-4ヶ月',
      title: 'AI搭載CRMシステムの導入',
      description: '顧客情報の一元管理と自動フォローアップ',
      estimatedTimeSaving: 240,
      estimatedCostSaving: 480000,
      tools: ['HubSpot', 'Salesforce Starter', 'kintone']
    });
  }
  
  // 中期導入の提案
  if (formData.basicInfo.businessType === 'ec' || formData.basicInfo.businessType === 'retail') {
    if (!operations.inventory || operations.inventory.stockManagement !== 'system') {
      recommendations.push({
        priority: 'medium',
        timeframe: '6-8ヶ月',
        title: 'AI在庫予測・自動発注システム',
        description: '売上データと連動した需要予測と自動発注',
        estimatedTimeSaving: 144,
        estimatedCostSaving: 300000,
        tools: ['在庫管理AI', 'データ分析ツール', 'APIカスタマイズ']
      });
    }
  }
  
  if (challenges.errorProneAreas.length > 3) {
    recommendations.push({
      priority: 'medium',
      timeframe: '6-8ヶ月',
      title: '業務プロセス全体のAI統合',
      description: 'RPA導入による定型業務の完全自動化',
      estimatedTimeSaving: 360,
      estimatedCostSaving: 720000,
      tools: ['UiPath', 'Power Automate', 'Zapier']
    });
  }
  
  return recommendations.sort((a, b) => {
    const priorityOrder = { immediate: 0, short: 1, medium: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
}

export function calculateDiagnosis(formData: FormData): DiagnosisResult {
  const aiScore = calculateBaseScore(formData.operations);
  const annualTimeSavings = calculateTimeSavings(formData.challenges);
  
  // 時給2,000円として計算
  const annualCostSavings = annualTimeSavings * 2000;
  
  // 投資回収期間（月数）- AIツール導入コストを月10万円と仮定
  const monthlyInvestment = 100000;
  const monthlySavings = annualCostSavings / 12;
  const roi = Math.ceil(monthlyInvestment / monthlySavings);
  
  const recommendations = generateRecommendations(formData);
  
  return {
    aiScore,
    annualTimeSavings,
    annualCostSavings,
    roi,
    recommendations
  };
}