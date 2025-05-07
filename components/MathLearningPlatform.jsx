import React, { useState } from 'react';
import { Home, BookOpen, Target, Calendar, Trophy, Settings as SettingsIcon } from 'lucide-react';
import Dashboard from './Dashboard';
import ProblemSolving from './ProblemSolving';
import WeaknessDiagnosis from './WeaknessDiagnosis';
import LearningPlan from './LearningPlan';
import Achievements from './Achievements';
import Settings from './Settings';

export default function MathLearningPlatform() {
  const [activePage, setActivePage] = useState('dashboard');
  const [expandedTopics, setExpandedTopics] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'problem-solving':
        return <ProblemSolving />;
      case 'weakness-diagnosis':
        return <WeaknessDiagnosis />;
      case 'learning-plan':
        return <LearningPlan />;
      case 'achievements':
        return <Achievements />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">수학 학습</h1>
        </div>
        <nav className="mt-6">
          <div
            className={`flex items-center px-6 py-3 cursor-pointer ${
              activePage === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActivePage('dashboard')}
          >
            <Home className="w-5 h-5 mr-3" />
            <span>대시보드</span>
          </div>
          <div
            className={`flex items-center px-6 py-3 cursor-pointer ${
              activePage === 'problem-solving' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActivePage('problem-solving')}
          >
            <BookOpen className="w-5 h-5 mr-3" />
            <span>문제 풀이</span>
          </div>
          <div
            className={`flex items-center px-6 py-3 cursor-pointer ${
              activePage === 'weakness-diagnosis' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActivePage('weakness-diagnosis')}
          >
            <Target className="w-5 h-5 mr-3" />
            <span>약점 진단</span>
          </div>
          <div
            className={`flex items-center px-6 py-3 cursor-pointer ${
              activePage === 'learning-plan' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActivePage('learning-plan')}
          >
            <Calendar className="w-5 h-5 mr-3" />
            <span>학습 계획</span>
          </div>
          <div
            className={`flex items-center px-6 py-3 cursor-pointer ${
              activePage === 'achievements' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActivePage('achievements')}
          >
            <Trophy className="w-5 h-5 mr-3" />
            <span>성취도</span>
          </div>
          <div
            className={`flex items-center px-6 py-3 cursor-pointer ${
              activePage === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActivePage('settings')}
          >
            <SettingsIcon className="w-5 h-5 mr-3" />
            <span>설정</span>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {renderPage()}
        </div>
      </div>
    </div>
  );
} 