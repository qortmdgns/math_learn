import { Trophy, Star, Target, ChevronRight, Lock, CheckCircle } from 'lucide-react';

export default function Achievements() {
  return (
    <div className="p-8">
      {/* Overall Stats */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">전체 성취도</h2>
          <button className="text-blue-600 text-sm flex items-center">
            상세 통계 <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Trophy className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="font-medium">획득한 뱃지</h3>
            </div>
            <p className="text-3xl font-bold text-blue-600">12</p>
            <p className="text-sm text-gray-600 mt-1">전체 20개 중</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Star className="h-5 w-5 text-green-600 mr-2" />
              <h3 className="font-medium">연속 학습일</h3>
            </div>
            <p className="text-3xl font-bold text-green-600">7일</p>
            <p className="text-sm text-gray-600 mt-1">최고 기록: 30일</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Target className="h-5 w-5 text-purple-600 mr-2" />
              <h3 className="font-medium">목표 달성률</h3>
            </div>
            <p className="text-3xl font-bold text-purple-600">85%</p>
            <p className="text-sm text-gray-600 mt-1">이번 달 목표</p>
          </div>
        </div>
      </div>
      
      {/* Badges */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">획득한 뱃지</h2>
          <button className="text-blue-600 text-sm flex items-center">
            전체 보기 <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <Trophy className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="font-medium">수학의 신</h3>
            <p className="text-sm text-gray-600">연속 30일 학습</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-2">
              <Star className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="font-medium">완벽주의자</h3>
            <p className="text-sm text-gray-600">100문제 연속 정답</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-2">
              <Target className="h-10 w-10 text-purple-600" />
            </div>
            <h3 className="font-medium">목표 달성왕</h3>
            <p className="text-sm text-gray-600">월간 목표 3회 달성</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-2">
              <Lock className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="font-medium">숨겨진 뱃지</h3>
            <p className="text-sm text-gray-600">달성 조건 미확인</p>
          </div>
        </div>
      </div>
      
      {/* Recent Achievements */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-6">최근 달성한 성과</h2>
        <div className="space-y-4">
          <div className="flex items-center p-4 border rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <Trophy className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">수학의 신</h3>
              <p className="text-sm text-gray-600">연속 30일 학습 달성</p>
            </div>
            <div className="text-sm text-gray-500">3일 전</div>
          </div>
          
          <div className="flex items-center p-4 border rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <Star className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">완벽주의자</h3>
              <p className="text-sm text-gray-600">100문제 연속 정답 달성</p>
            </div>
            <div className="text-sm text-gray-500">1주일 전</div>
          </div>
          
          <div className="flex items-center p-4 border rounded-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
              <Target className="h-6 w-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">목표 달성왕</h3>
              <p className="text-sm text-gray-600">월간 목표 3회 달성</p>
            </div>
            <div className="text-sm text-gray-500">2주일 전</div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center">
            <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
            <div>
              <p className="font-medium text-blue-800">다음 목표까지 3일 남았습니다!</p>
              <p className="text-sm text-blue-600">연속 학습일 10일 달성을 위해 열심히 학습하세요.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 