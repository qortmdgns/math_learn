import { Calendar, Clock, Target, ChevronRight, CheckCircle, Plus } from 'lucide-react';

export default function LearningPlan() {
  return (
    <div className="p-8">
      {/* Weekly Schedule */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">주간 학습 계획</h2>
          <button className="text-blue-600 text-sm flex items-center">
            전체 일정 <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => (
            <div key={day} className="text-center">
              <div className={`h-32 rounded-lg border p-2 ${index < 5 ? 'border-blue-200 bg-blue-50' : 'border-gray-200'}`}>
                <p className="font-medium mb-2">{day}</p>
                {index < 5 && (
                  <div className="space-y-2">
                    <div className="text-xs bg-blue-100 text-blue-800 p-1 rounded">
                      미적분 - 도함수
                    </div>
                    <div className="text-xs bg-green-100 text-green-800 p-1 rounded">
                      확률과 통계
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Today's Plan */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">오늘의 학습 계획</h2>
          <button className="text-blue-600 text-sm flex items-center">
            수정하기 <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-blue-600 mr-3" />
              <div>
                <p className="font-medium">미적분 - 도함수 복습</p>
                <p className="text-sm text-gray-500">예상 소요시간: 45분</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-4">오전 10:00</span>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-blue-600 mr-3" />
              <div>
                <p className="font-medium">확률과 통계 - 조건부 확률</p>
                <p className="text-sm text-gray-500">예상 소요시간: 30분</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-4">오후 2:00</span>
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-blue-600 mr-3" />
              <div>
                <p className="font-medium">기하와 벡터 - 공간도형</p>
                <p className="text-sm text-gray-500">예상 소요시간: 40분</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-4">오후 4:00</span>
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Learning Goals */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">학습 목표</h2>
          <button className="text-blue-600 text-sm flex items-center">
            목표 수정 <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <Target className="h-5 w-5 text-purple-600 mr-2" />
                <h3 className="font-medium">주간 목표</h3>
              </div>
              <span className="text-purple-600 font-medium">80% 달성</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">목표: 주 5일, 일 3시간 학습</p>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <Target className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-medium">월간 목표</h3>
              </div>
              <span className="text-green-600 font-medium">65% 달성</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">목표: 전체 단원의 80% 완료</p>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <Target className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="font-medium">연간 목표</h3>
              </div>
              <span className="text-blue-600 font-medium">45% 달성</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">목표: 수능 수학 1등급 달성</p>
          </div>
        </div>
        
        <button className="mt-6 w-full flex items-center justify-center px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-500">
          <Plus className="h-5 w-5 mr-2" />
          새로운 목표 추가하기
        </button>
      </div>
    </div>
  );
} 