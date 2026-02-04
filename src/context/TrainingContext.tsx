import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ChecklistItem, ViewType } from '../types';

interface TrainingContextType {
  checklistItems: ChecklistItem[];
  toggleChecklistItem: (id: string) => void;
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  completedCount: number;
  totalCount: number;
  progressPercentage: number;
  isCertified: boolean;
}

const STORAGE_KEY = 'gbb-training-progress';

const initialChecklistItems: ChecklistItem[] = [
  { id: 'module-1', label: 'Module 1: Contractor Master Agreement', completed: false, moduleId: 1 },
  { id: 'module-2', label: 'Module 2: Sales Compliance Playbook', completed: false, moduleId: 2 },
  { id: 'module-3', label: 'Module 3: FAQ & Rebuttals', completed: false, moduleId: 3 },
  { id: 'module-4', label: 'Module 4: Product Comparison Matrix', completed: false, moduleId: 4 },
  { id: 'module-5', label: 'Module 5: Referral Fee Schedule', completed: false, moduleId: 5 },
  { id: 'contract', label: 'Signed Contractor Agreement (via OpenSign)', completed: false, isExternal: true },
];

const TrainingContext = createContext<TrainingContextType | undefined>(undefined);

export function TrainingProvider({ children }: { children: ReactNode }) {
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialChecklistItems;
      }
    }
    return initialChecklistItems;
  });

  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checklistItems));
  }, [checklistItems]);

  const toggleChecklistItem = (id: string) => {
    setChecklistItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const completedCount = checklistItems.filter(item => item.completed).length;
  const totalCount = checklistItems.length;
  const progressPercentage = Math.round((completedCount / totalCount) * 100);
  const isCertified = completedCount === totalCount;

  return (
    <TrainingContext.Provider
      value={{
        checklistItems,
        toggleChecklistItem,
        currentView,
        setCurrentView,
        completedCount,
        totalCount,
        progressPercentage,
        isCertified,
      }}
    >
      {children}
    </TrainingContext.Provider>
  );
}

export function useTraining() {
  const context = useContext(TrainingContext);
  if (context === undefined) {
    throw new Error('useTraining must be used within a TrainingProvider');
  }
  return context;
}
