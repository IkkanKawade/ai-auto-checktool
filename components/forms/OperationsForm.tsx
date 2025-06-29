'use client';

import { BusinessOperations } from '@/types';
import { operationOptions } from '@/lib/questions';

interface OperationsFormProps {
  data: BusinessOperations;
  onChange: (data: BusinessOperations) => void;
  onNext: () => void;
  onBack: () => void;
  showInventory: boolean;
}

export default function OperationsForm({ data, onChange, onNext, onBack, showInventory }: OperationsFormProps) {
  const handleChange = (category: keyof BusinessOperations, field: string, value: string) => {
    onChange({
      ...data,
      [category]: {
        ...data[category as keyof BusinessOperations],
        [field]: value
      }
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">業務実態チェック</h2>
      
      <div className="space-y-8">
        {/* 顧客管理・営業 */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">顧客管理・営業</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(operationOptions.customerManagement).map(([field, options]) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field === 'infoManagement' && '顧客情報管理方法'}
                  {field === 'proposalCreation' && '見積書・提案書作成'}
                  {field === 'followUp' && '営業フォローアップ'}
                  {field === 'recordManagement' && '商談記録の管理'}
                </label>
                <select
                  value={data.customerManagement[field as keyof typeof data.customerManagement]}
                  onChange={(e) => handleChange('customerManagement', field, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">選択してください</option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* 経理・事務 */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">経理・事務</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(operationOptions.accounting).map(([field, options]) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field === 'invoicing' && '請求書作成・管理'}
                  {field === 'expenseProcessing' && '経費処理'}
                  {field === 'salesAggregation' && '売上データ集計'}
                  {field === 'taxDocuments' && '税務書類作成'}
                </label>
                <select
                  value={data.accounting[field as keyof typeof data.accounting]}
                  onChange={(e) => handleChange('accounting', field, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">選択してください</option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* マーケティング */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">マーケティング</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(operationOptions.marketing).map(([field, options]) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field === 'socialMedia' && 'SNS投稿・更新'}
                  {field === 'advertising' && '広告運用'}
                  {field === 'customerEmails' && '顧客への案内メール'}
                  {field === 'websiteUpdates' && 'ホームページ更新'}
                </label>
                <select
                  value={data.marketing[field as keyof typeof data.marketing]}
                  onChange={(e) => handleChange('marketing', field, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">選択してください</option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* 在庫・商品管理 */}
        {showInventory && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">在庫・商品管理</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(operationOptions.inventory).map(([field, options]) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field === 'stockManagement' && '在庫確認・発注'}
                    {field === 'productData' && '商品データ管理'}
                    {field === 'pricing' && '価格設定・更新'}
                  </label>
                  <select
                    value={data.inventory?.[field as keyof typeof data.inventory] || ''}
                    onChange={(e) => handleChange('inventory', field, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">選択してください</option>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-3 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          戻る
        </button>
        <button
          onClick={onNext}
          className="px-6 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700"
        >
          次へ進む
        </button>
      </div>
    </div>
  );
}