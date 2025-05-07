import { BookOpen, Clock, Target, ChevronRight, CheckCircle, XCircle } from 'lucide-react';

export default function ProblemSolving() {
  return (
    <div className="p-8">
      {/* Problem Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-lg font-semibold">단원별 학습</h2>
          </div>
          <p className="text-gray-600 mb-4">각 단원별로 체계적인 문제 풀이를 진행하세요.</p>
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            시작하기
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Clock className="h-6 w-6 text-green-600 mr-3" />
            <h2 className="text-lg font-semibold">실전 모의고사</h2>
          </div>
          <p className="text-gray-600 mb-4">실제 시험과 동일한 환경에서 연습하세요.</p>
          <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            시작하기
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Target className="h-6 w-6 text-purple-600 mr-3" />
            <h2 className="text-lg font-semibold">맞춤형 문제</h2>
          </div>
          <p className="text-gray-600 mb-4">AI가 분석한 약점을 보완하는 문제를 풀어보세요.</p>
          <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            시작하기
          </button>
        </div>
      </div>
      
      {/* Recent Problems */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">최근 풀이한 문제</h2>
          <button className="text-blue-600 text-sm flex items-center">
            전체보기 <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <div>
                <p className="font-medium">미적분 - 도함수 계산</p>
                <p className="text-sm text-gray-500">오늘 14:30 | 정답률 85%</p>
              </div>
            </div>
            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
              다시 풀기
            </button>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center">
              <XCircle className="h-5 w-5 text-red-500 mr-3" />
              <div>
                <p className="font-medium">확률과 통계 - 조건부 확률</p>
                <p className="text-sm text-gray-500">어제 16:45 | 정답률 60%</p>
              </div>
            </div>
            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
              다시 풀기
            </button>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <div>
                <p className="font-medium">기하와 벡터 - 공간도형</p>
                <p className="text-sm text-gray-500">어제 10:15 | 정답률 90%</p>
              </div>
            </div>
            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
              다시 풀기
            </button>
          </div>
        </div>
      </div>
      
      {/* Problem Sets */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">추천 문제 세트</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">기초 미적분 마스터</h3>
                <p className="text-sm text-gray-500">20문제 | 예상 소요시간: 40분</p>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                초급
              </span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>마지막 시도: 3일 전</span>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                시작하기
              </button>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">확률과 통계 심화</h3>
                <p className="text-sm text-gray-500">15문제 | 예상 소요시간: 45분</p>
              </div>
              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                고급
              </span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>마지막 시도: 1주일 전</span>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                시작하기
              </button>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">기하와 벡터 종합</h3>
                <p className="text-sm text-gray-500">25문제 | 예상 소요시간: 50분</p>
              </div>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                중급
              </span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>마지막 시도: 2일 전</span>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                시작하기
              </button>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">실전 모의고사 1회</h3>
                <p className="text-sm text-gray-500">30문제 | 예상 소요시간: 100분</p>
              </div>
              <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                실전
              </span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>아직 시도하지 않음</span>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                시작하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 