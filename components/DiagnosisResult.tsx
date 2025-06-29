'use client';

import { DiagnosisResult } from '@/types';

interface DiagnosisResultProps {
  result: DiagnosisResult;
  onReset: () => void;
}

export default function DiagnosisResultComponent({ result, onReset }: DiagnosisResultProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'immediate': return 'bg-red-100 text-red-800';
      case 'short': return 'bg-yellow-100 text-yellow-800';
      case 'medium': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'immediate': return '即座に導入可能';
      case 'short': return '短期導入';
      case 'medium': return '中期導入';
      default: return priority;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">AI活用診断結果</h2>
      
      {/* スコアカード */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">{result.aiScore}</div>
          <div className="text-sm text-gray-600">AI活用度スコア</div>
          <div className="text-xs text-gray-500 mt-1">/100点</div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {Math.round(result.annualTimeSavings / 12)}
          </div>
          <div className="text-sm text-gray-600">月間削減時間</div>
          <div className="text-xs text-gray-500 mt-1">年間{result.annualTimeSavings}時間</div>
        </div>
        
        <div className="bg-yellow-50 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-yellow-600 mb-2">
            {Math.round(result.annualCostSavings / 10000)}
          </div>
          <div className="text-sm text-gray-600">年間削減コスト</div>
          <div className="text-xs text-gray-500 mt-1">万円</div>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">{result.roi}</div>
          <div className="text-sm text-gray-600">投資回収期間</div>
          <div className="text-xs text-gray-500 mt-1">ヶ月</div>
        </div>
      </div>

      {/* 改善提案 */}
      <div>
        <h3 className="text-2xl font-bold mb-6">優先度別改善提案</h3>
        <div className="space-y-6">
          {result.recommendations.map((rec, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-lg font-semibold flex-1">{rec.title}</h4>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(rec.priority)}`}>
                  {getPriorityLabel(rec.priority)}
                </span>
              </div>
              
              <p className="text-gray-700 mb-4">{rec.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <div className="text-sm">
                  <span className="text-gray-500">導入期間:</span>
                  <span className="ml-2 font-medium">{rec.timeframe}</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">削減時間:</span>
                  <span className="ml-2 font-medium">年間{rec.estimatedTimeSaving}時間</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">削減コスト:</span>
                  <span className="ml-2 font-medium">¥{rec.estimatedCostSaving.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {rec.tools.map((tool, toolIndex) => (
                  <span key={toolIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* アクションボタン */}
      <div className="mt-12 flex flex-col items-center">
        <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 mb-4">
          詳細な提案書をダウンロード
        </button>
        <button onClick={onReset} className="text-gray-600 hover:text-gray-800">
          もう一度診断する
        </button>
      </div>
    </div>
  );
}