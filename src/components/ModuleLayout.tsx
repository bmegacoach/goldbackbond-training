import { ReactNode } from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useTraining } from '../context/TrainingContext';
import { ViewType } from '../types';

interface ModuleLayoutProps {
  moduleId: ViewType;
  moduleNumber: number;
  title: string;
  description: string;
  children: ReactNode;
}

export function ModuleLayout({
  moduleId,
  moduleNumber,
  title,
  description,
  children,
}: ModuleLayoutProps) {
  const { setCurrentView, checklistItems, toggleChecklistItem } = useTraining();
  const item = checklistItems.find(i => i.id === moduleId);
  const isCompleted = item?.completed ?? false;

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => setCurrentView('dashboard')}
          className="flex items-center gap-2 text-neutral-500 hover:text-neutral-700 transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Dashboard</span>
        </button>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-sm font-medium">
                Module {moduleNumber}
              </span>
              {isCompleted && (
                <span className="flex items-center gap-1 px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  Completed
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">{title}</h1>
            <p className="text-neutral-600 max-w-2xl">{description}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="p-6 md:p-8">{children}</div>

        {/* Footer with Mark Complete */}
        <div className="border-t border-neutral-200 px-6 md:px-8 py-4 bg-neutral-50">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-neutral-600">
              {isCompleted
                ? 'Great job! You have completed this module.'
                : 'Mark this module as complete when you have reviewed all content.'}
            </p>
            <button
              onClick={() => toggleChecklistItem(moduleId)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                isCompleted
                  ? 'bg-success text-white hover:bg-success/90'
                  : 'btn-gold'
              }`}
            >
              {isCompleted ? 'Completed' : 'Mark as Complete'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
