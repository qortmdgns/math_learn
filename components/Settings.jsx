import { User, Bell, Lock, Moon, Globe, HelpCircle, LogOut } from 'lucide-react';

export default function Settings() {
  return (
    <div className="p-8">
      {/* Profile Settings */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mr-4">
            <User className="h-10 w-10 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">김수학</h2>
            <p className="text-gray-600">student@example.com</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center">
              <User className="h-5 w-5 text-gray-600 mr-3" />
              <div>
                <p className="font-medium">프로필 수정</p>
                <p className="text-sm text-gray-500">개인 정보 및 프로필 사진 변경</p>
              </div>
            </div>
            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
              수정
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center">
              <Lock className="h-5 w-5 text-gray-600 mr-3" />
              <div>
                <p className="font-medium">비밀번호 변경</p>
                <p className="text-sm text-gray-500">계정 보안을 위한 비밀번호 변경</p>
              </div>
            </div>
            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
              변경
            </button>
          </div>
        </div>
      </div>
      
      {/* Preferences */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-6">환경 설정</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center">
              <Bell className="h-5 w-5 text-gray-600 mr-3" />
              <div>
                <p className="font-medium">알림 설정</p>
                <p className="text-sm text-gray-500">학습 알림 및 이메일 수신 설정</p>
              </div>
            </div>
            <div className="flex items-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center">
              <Moon className="h-5 w-5 text-gray-600 mr-3" />
              <div>
                <p className="font-medium">다크 모드</p>
                <p className="text-sm text-gray-500">화면 테마 설정</p>
              </div>
            </div>
            <div className="flex items-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center">
              <Globe className="h-5 w-5 text-gray-600 mr-3" />
              <div>
                <p className="font-medium">언어 설정</p>
                <p className="text-sm text-gray-500">인터페이스 언어 변경</p>
              </div>
            </div>
            <select className="px-4 py-2 border rounded-lg">
              <option>한국어</option>
              <option>English</option>
              <option>日本語</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Support & Help */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-6">고객 지원</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center">
              <HelpCircle className="h-5 w-5 text-gray-600 mr-3" />
              <div>
                <p className="font-medium">도움말</p>
                <p className="text-sm text-gray-500">자주 묻는 질문 및 사용 가이드</p>
              </div>
            </div>
            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
              보기
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center">
              <HelpCircle className="h-5 w-5 text-gray-600 mr-3" />
              <div>
                <p className="font-medium">문의하기</p>
                <p className="text-sm text-gray-500">기술 지원 및 문의사항</p>
              </div>
            </div>
            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
              문의
            </button>
          </div>
        </div>
      </div>
      
      {/* Account Actions */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-6">계정 관리</h2>
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center p-4 border border-red-200 rounded-lg text-red-600 hover:bg-red-50">
            <LogOut className="h-5 w-5 mr-2" />
            로그아웃
          </button>
          
          <button className="w-full flex items-center justify-center p-4 border border-red-200 rounded-lg text-red-600 hover:bg-red-50">
            계정 삭제
          </button>
        </div>
      </div>
    </div>
  );
} 