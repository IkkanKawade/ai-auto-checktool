'use client';

import { BasicInfo } from '@/types';
import { businessTypes, employeeRanges, revenueRanges, revenueSources } from '@/lib/questions';

interface BasicInfoFormProps {
  data: BasicInfo;
  onChange: (data: BasicInfo) => void;
  onNext: () => void;
}

export default function BasicInfoForm({ data, onChange, onNext }: BasicInfoFormProps) {
  const handleChange = (field: keyof BasicInfo) => (value: string) => {
    onChange({ ...data, [field]: value });
  };

  const isComplete = data.businessType && data.employeeRange && data.revenueRange && data.revenueSource;

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">基本情報入力</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            事業形態
          </label>
          <div className="grid grid-cols-1 gap-3">
            {businessTypes.map((type) => (
              <label key={type.value} className="flex items-center">
                <input
                  type="radio"
                  name="businessType"
                  value={type.value}
                  checked={data.businessType === type.value}
                  onChange={(e) => handleChange('businessType')(e.target.value)}
                  className="mr-3 h-4 w-4 text-blue-600"
                />
                <span className="text-gray-900">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            従業員数
          </label>
          <div className="grid grid-cols-3 gap-3">
            {employeeRanges.map((range) => (
              <label
                key={range.value}
                className={`border rounded-lg p-4 cursor-pointer transition-colors text-center
                  ${data.employeeRange === range.value 
                    ? 'border-blue-600 bg-blue-50' 
                    : 'border-gray-300 hover:border-gray-400'
                  }`}
              >
                <input
                  type="radio"
                  name="employeeRange"
                  value={range.value}
                  checked={data.employeeRange === range.value}
                  onChange={(e) => handleChange('employeeRange')(e.target.value)}
                  className="sr-only"
                />
                <span className="font-medium">{range.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            年商規模
          </label>
          <div className="grid grid-cols-2 gap-3">
            {revenueRanges.map((range) => (
              <label
                key={range.value}
                className={`border rounded-lg p-4 cursor-pointer transition-colors text-center
                  ${data.revenueRange === range.value 
                    ? 'border-blue-600 bg-blue-50' 
                    : 'border-gray-300 hover:border-gray-400'
                  }`}
              >
                <input
                  type="radio"
                  name="revenueRange"
                  value={range.value}
                  checked={data.revenueRange === range.value}
                  onChange={(e) => handleChange('revenueRange')(e.target.value)}
                  className="sr-only"
                />
                <span className="font-medium">{range.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            主要な収益源
          </label>
          <div className="grid grid-cols-2 gap-3">
            {revenueSources.map((source) => (
              <label
                key={source.value}
                className={`border rounded-lg p-4 cursor-pointer transition-colors text-center
                  ${data.revenueSource === source.value 
                    ? 'border-blue-600 bg-blue-50' 
                    : 'border-gray-300 hover:border-gray-400'
                  }`}
              >
                <input
                  type="radio"
                  name="revenueSource"
                  value={source.value}
                  checked={data.revenueSource === source.value}
                  onChange={(e) => handleChange('revenueSource')(e.target.value)}
                  className="sr-only"
                />
                <span className="font-medium">{source.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={onNext}
          disabled={!isComplete}
          className={`px-6 py-3 rounded-lg font-medium transition-colors
            ${isComplete 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
        >
          次へ進む
        </button>
      </div>
    </div>
  );
}