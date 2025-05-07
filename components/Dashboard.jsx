import { CheckCircle, AlertCircle, ChevronRight, Award } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-8">
      {/* Welcome Card */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-2">안녕하세요, 김수학 님!</h2>
        <p className="text-gray-600 mb-4">오늘의 학습 현황을 확인하세요.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">오늘의 추천 문제</h3>
            <p className="text-2xl font-bold text-blue-600">3/3</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">학습 진행률</h3>
            <p className="text-2xl font-bold text-green-600">68%</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">연속 학습일</h3>
            <p className="text-2xl font-bold text-purple-600">7일</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Problems */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">최근 풀이한 문제</h2>
            <button className="text-blue-600 text-sm flex items-center">
              전체보기 <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center p-3 border rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <div>
                <p className="font-medium">중3 기하와 벡터 - 삼각함수</p>
                <p className="text-sm text-gray-500">3분 전</p>
              </div>
            </div>
            <div className="flex items-center p-3 border rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
              <div>
                <p className="font-medium">중3 미적분 - 도함수 계산</p>
                <p className="text-sm text-gray-500">오늘 10:23</p>
              </div>
            </div>
            <div className="flex items-center p-3 border rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <div>
                <p className="font-medium">중3 대수 - 연립방정식</p>
                <p className="text-sm text-gray-500">오늘 09:45</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Weak Points */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">약점 영역</h2>
            <button className="text-blue-600 text-sm flex items-center">
              상세 진단 <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">미적분 - 도함수</span>
                <span className="text-sm text-red-600">42%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">확률과 통계 - 조건부 확률</span>
                <span className="text-sm text-orange-600">61%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '61%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">기하와 벡터 - 공간도형</span>
                <span className="text-sm text-yellow-600">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Today's Recommended Problems */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">오늘의 추천 문제</h2>
          <div className="flex items-center text-sm text-gray-500">
            <span className="font-medium text-blue-600">3</span>/3 완료
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg bg-blue-50">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <div>
                <p className="font-medium">미적분 - 도함수 계산 문제</p>
                <p className="text-sm text-gray-500">약점 영역 보완 문제 | 중간 난이도</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              다시 풀기
            </button>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg bg-blue-50">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <div>
                <p className="font-medium">확률과 통계 - 조건부 확률 문제</p>
                <p className="text-sm text-gray-500">약점 영역 보완 문제 | 쉬움 난이도</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              다시 풀기
            </button>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg bg-blue-50">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <div>
                <p className="font-medium">기하와 벡터 - 공간도형 문제</p>
                <p className="text-sm text-gray-500">복습 문제 | 어려움 난이도</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              다시 풀기
            </button>
          </div>
        </div>
      </div>
      
      {/* Weekly Progress */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">주간 학습 현황</h2>
          <select className="text-sm border rounded-md p-1">
            <option>이번 주</option>
            <option>지난 주</option>
            <option>2주 전</option>
          </select>
        </div>
        <div className="grid grid-cols-7 gap-2 mb-4">
          {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => (
            <div key={day} className="text-center">
              <div className={`h-16 rounded-lg flex items-center justify-center ${index < 5 ? 'bg-blue-100' : 'bg-gray-100'}`}>
                <span className={`text-lg font-bold ${index < 5 ? 'text-blue-600' : 'text-gray-400'}`}>
                  {index < 4 ? '완료' : index === 4 ? '오늘' : '-'}
                </span>
              </div>
              <p className="mt-2 text-sm">{day}</p>
            </div>
          ))}
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <div className="flex items-center">
            <Award className="h-6 w-6 text-green-600 mr-2" />
            <div>
              <p className="font-medium">이번 주 목표의 80%를 달성했습니다!</p>
              <p className="text-sm text-gray-600">이대로 계속하면 목요일에 목표를 달성할 수 있어요.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 