interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
}

export default function StepIndicator({ currentStep, totalSteps, stepTitles }: StepIndicatorProps) {
  return (
    <div className="w-full px-8 py-6">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                  ${i < currentStep 
                    ? 'bg-blue-600 text-white' 
                    : i === currentStep 
                    ? 'bg-blue-600 text-white ring-4 ring-blue-200' 
                    : 'bg-gray-200 text-gray-500'
                  }`}
              >
                {i + 1}
              </div>
              <span className={`mt-2 text-xs font-medium ${i <= currentStep ? 'text-gray-900' : 'text-gray-500'}`}>
                {stepTitles[i]}
              </span>
            </div>
            {i < totalSteps - 1 && (
              <div className={`w-full h-1 mx-4 ${i < currentStep ? 'bg-blue-600' : 'bg-gray-200'}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}