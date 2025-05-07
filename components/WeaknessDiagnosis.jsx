import { BarChart, PieChart, TrendingUp, AlertTriangle, ChevronRight } from 'lucide-react';

export default function WeaknessDiagnosis() {
  return (
    <div className="p-8">
      {/* Overall Analysis */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">전체 학습 분석</h2>
          <button className="text-blue-600 text-sm flex items-center">
            상세 보고서 <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <BarChart className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="font-medium">전체 정답률</h3>
            </div>
            <p className="text-3xl font-bold text-blue-600">78%</p>
            <p className="text-sm text-gray-600 mt-1">지난 주 대비 +5%</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <PieChart className="h-5 w-5 text-green-600 mr-2" />
              <h3 className="font-medium">학습 완료율</h3>
            </div>
            <p className="text-3xl font-bold text-green-600">65%</p>
            <p className="text-sm text-gray-600 mt-1">목표 대비 80%</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <TrendingUp className="h-5 w-5 text-purple-600 mr-2" />
              <h3 className="font-medium">성장률</h3>
            </div>
            <p className="text-3xl font-bold text-purple-600">12%</p>
            <p className="text-sm text-gray-600 mt-1">지난 달 대비</p>
          </div>
        </div>
      </div>
      
      {/* Weak Areas */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">약점 영역 분석</h2>
          <button className="text-blue-600 text-sm flex items-center">
            맞춤형 학습 계획 <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                <h3 className="font-medium">미적분 - 도함수</h3>
              </div>
              <span className="text-red-600 font-medium">42%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: '42%' }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">주요 오답 유형: 연쇄법칙, 음함수 미분</p>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
                <h3 className="font-medium">확률과 통계 - 조건부 확률</h3>
              </div>
              <span className="text-orange-600 font-medium">61%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '61%' }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">주요 오답 유형: 베이즈 정리, 독립사건</p>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                <h3 className="font-medium">기하와 벡터 - 공간도형</h3>
              </div>
              <span className="text-yellow-600 font-medium">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">주요 오답 유형: 공간좌표, 벡터의 내적</p>
          </div>
        </div>
      </div>
      
      {/* Learning Progress */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-6">학습 진행도</h2>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">미적분</h3>
              <span className="text-blue-600">15/20 단원</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">확률과 통계</h3>
              <span className="text-green-600">12/15 단원</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">기하와 벡터</h3>
              <span className="text-purple-600">18/25 단원</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '72%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-medium text-blue-800 mb-2">학습 추천</h3>
          <p className="text-sm text-blue-600">
            미적분의 도함수 단원을 집중적으로 학습하시는 것을 추천드립니다. 
            현재 정답률이 42%로 가장 낮은 영역입니다.
          </p>
        </div>
      </div>
    </div>
  );
} 