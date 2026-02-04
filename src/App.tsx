import { TrainingProvider, useTraining } from './context/TrainingContext';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Module1, Module2, Module3, Module4, Module5, Module6 } from './components/modules';

function MainContent() {
  const { currentView } = useTraining();

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'module-1':
        return <Module1 />;
      case 'module-2':
        return <Module2 />;
      case 'module-3':
        return <Module3 />;
      case 'module-4':
        return <Module4 />;
      case 'module-5':
        return <Module5 />;
      case 'module-6':
        return <Module6 />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <main className="flex-1 min-h-screen lg:min-h-0 pt-16 lg:pt-0">
      <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
        {renderContent()}
      </div>
    </main>
  );
}

function App() {
  return (
    <TrainingProvider>
      <div className="flex min-h-screen bg-page">
        <Sidebar />
        <MainContent />
      </div>
    </TrainingProvider>
  );
}

export default App;
