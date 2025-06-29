'use client';

import { BusinessChallenges } from '@/types';
import { challengeOptions } from '@/lib/questions';

interface ChallengesFormProps {
  data: BusinessChallenges;
  onChange: (data: BusinessChallenges) => void;
  onSubmit: () => void;
  onBack: () => void;
}

export default function ChallengesForm({ data, onChange, onSubmit, onBack }: ChallengesFormProps) {
  const handleCheckboxChange = (category: keyof BusinessChallenges, value: string) => {
    const currentValues = data[category] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    
    onChange({
      ...data,
      [category]: newValues
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">課題・悩みの深掘り</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">最も時間を取られている業務</h3>
          <p className="text-sm text-gray-600 mb-4">該当するものを全て選択してください</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {challengeOptions.timeConsumingTasks.map((task) => (
              <label key={task} className="flex items-center">
                <input
                  type="checkbox"
                  checked={data.timeConsumingTasks.includes(task)}
                  onChange={() => handleCheckboxChange('timeConsumingTasks', task)}
                  className="mr-3 h-4 w-4 text-blue-600 rounded"
                />
                <span className="text-gray-900">{task}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">残業が発生しやすい業務</h3>
          <p className="text-sm text-gray-600 mb-4">該当するものを全て選択してください</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {challengeOptions.overtimeAreas.map((area) => (
              <label key={area} className="flex items-center">
                <input
                  type="checkbox"
                  checked={data.overtimeAreas.includes(area)}
                  onChange={() => handleCheckboxChange('overtimeAreas', area)}
                  className="mr-3 h-4 w-4 text-blue-600 rounded"
                />
                <span className="text-gray-900">{area}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">ミスが起こりやすい業務</h3>
          <p className="text-sm text-gray-600 mb-4">該当するものを全て選択してください</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {challengeOptions.errorProneAreas.map((area) => (
              <label key={area} className="flex items-center">
                <input
                  type="checkbox"
                  checked={data.errorProneAreas.includes(area)}
                  onChange={() => handleCheckboxChange('errorProneAreas', area)}
                  className="mr-3 h-4 w-4 text-blue-600 rounded"
                />
                <span className="text-gray-900">{area}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">属人化している業務</h3>
          <p className="text-sm text-gray-600 mb-4">特定の人しかできない業務がある場合、選択してください</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {challengeOptions.dependentProcesses.map((process) => (
              <label key={process} className="flex items-center">
                <input
                  type="checkbox"
                  checked={data.dependentProcesses.includes(process)}
                  onChange={() => handleCheckboxChange('dependentProcesses', process)}
                  className="mr-3 h-4 w-4 text-blue-600 rounded"
                />
                <span className="text-gray-900">{process}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-3 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          戻る
        </button>
        <button
          onClick={onSubmit}
          className="px-6 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700"
        >
          診断結果を見る
        </button>
      </div>
    </div>
  );
}