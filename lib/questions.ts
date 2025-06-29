export const businessTypes = [
  { value: 'ec', label: 'EC・オンライン販売' },
  { value: 'retail', label: '小売・店舗販売' },
  { value: 'service', label: 'サービス業' },
  { value: 'manufacturing', label: '製造業' },
  { value: 'professional', label: '士業・専門サービス' }
];

export const employeeRanges = [
  { value: '3-5', label: '3-5名' },
  { value: '6-10', label: '6-10名' },
  { value: '11-15', label: '11-15名' }
];

export const revenueRanges = [
  { value: '20m', label: '2000万円台' },
  { value: '30m', label: '3000万円台' }
];

export const revenueSources = [
  { value: 'store', label: '店舗販売' },
  { value: 'online', label: 'オンライン' },
  { value: 'contract', label: '受託業務' },
  { value: 'mixed', label: '複合型' }
];

export const operationOptions = {
  customerManagement: {
    infoManagement: [
      { value: 'spreadsheet', label: 'エクセル・スプレッドシート' },
      { value: 'crm', label: 'CRMツール' },
      { value: 'paper', label: '紙・手書き' },
      { value: 'none', label: '特に管理していない' }
    ],
    proposalCreation: [
      { value: 'manual', label: '都度手作業で作成' },
      { value: 'template', label: 'テンプレート利用' },
      { value: 'automated', label: '自動生成ツール利用' }
    ],
    followUp: [
      { value: 'manual', label: '手動で実施' },
      { value: 'scheduled', label: 'スケジュール管理' },
      { value: 'none', label: '特に実施していない' }
    ],
    recordManagement: [
      { value: 'spreadsheet', label: 'エクセル・スプレッドシート' },
      { value: 'crm', label: 'CRMツール' },
      { value: 'paper', label: '紙・手書き' }
    ]
  },
  accounting: {
    invoicing: [
      { value: 'manual', label: '手作業で作成' },
      { value: 'accounting_software', label: '会計ソフト利用' },
      { value: 'automated', label: '自動化済み' }
    ],
    expenseProcessing: [
      { value: 'manual', label: '手入力' },
      { value: 'app', label: '経費精算アプリ利用' },
      { value: 'automated', label: '自動化済み' }
    ],
    salesAggregation: [
      { value: 'manual', label: '手作業で集計' },
      { value: 'spreadsheet', label: 'エクセル関数利用' },
      { value: 'automated', label: '自動集計' }
    ],
    taxDocuments: [
      { value: 'manual', label: '手作業で作成' },
      { value: 'tax_software', label: '税務ソフト利用' },
      { value: 'outsourced', label: '外部委託' }
    ]
  },
  marketing: {
    socialMedia: [
      { value: 'manual', label: '都度手動投稿' },
      { value: 'scheduled', label: '予約投稿利用' },
      { value: 'none', label: '実施していない' }
    ],
    advertising: [
      { value: 'manual', label: '手動で運用' },
      { value: 'platform_managed', label: 'プラットフォーム自動最適化' },
      { value: 'none', label: '実施していない' }
    ],
    customerEmails: [
      { value: 'manual', label: '個別送信' },
      { value: 'email_service', label: 'メール配信サービス利用' },
      { value: 'none', label: '実施していない' }
    ],
    websiteUpdates: [
      { value: 'manual', label: '都度HTML編集' },
      { value: 'cms', label: 'CMS利用' },
      { value: 'none', label: '更新していない' }
    ]
  },
  inventory: {
    stockManagement: [
      { value: 'manual', label: '目視確認' },
      { value: 'spreadsheet', label: 'エクセル管理' },
      { value: 'system', label: '在庫管理システム' }
    ],
    productData: [
      { value: 'manual', label: '手作業管理' },
      { value: 'spreadsheet', label: 'エクセル管理' },
      { value: 'database', label: 'データベース管理' }
    ],
    pricing: [
      { value: 'manual', label: '都度手動設定' },
      { value: 'rule_based', label: 'ルールベース' },
      { value: 'dynamic', label: '動的価格設定' }
    ]
  }
};

export const challengeOptions = {
  timeConsumingTasks: [
    '顧客対応・問い合わせ対応',
    '見積書・提案書作成',
    '請求書作成・送付',
    '経費精算・帳簿付け',
    'SNS投稿・コンテンツ作成',
    'メール作成・送信',
    '在庫確認・発注',
    'データ入力・転記',
    '報告書・レポート作成',
    'スケジュール調整'
  ],
  overtimeAreas: [
    '月末の請求処理',
    '決算期の書類作成',
    '繁忙期の顧客対応',
    '新商品登録・更新',
    'キャンペーン準備',
    '在庫棚卸し',
    '営業報告書作成',
    '顧客データ整理'
  ],
  errorProneAreas: [
    '金額計算・請求額',
    '在庫数の管理',
    '顧客情報の入力',
    'スケジュール管理',
    '商品価格設定',
    'メール送信先',
    'データ転記',
    '発注数量'
  ],
  dependentProcesses: [
    '社長・代表者のみ',
    '経理担当者のみ',
    '営業担当者のみ',
    'Web担当者のみ',
    '特定スタッフのみ',
    '属人化なし'
  ]
};