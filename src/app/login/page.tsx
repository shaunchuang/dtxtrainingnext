import LoginForm from '../../components/LoginForm';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 py-12 lg:px-8 backdrop-blur-sm">
        <div className="card form-container">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              歡迎回來
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              請登入您的帳號以繼續
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
      
      {/* Right side - Image */}
      <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-70"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-white">
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-6 text-center">DTX Training</h1>
            <div className="h-1 w-16 bg-white mx-auto rounded-full"></div>
          </div>
          
          <p className="text-xl mb-10 text-center max-w-md font-light">提升您的專業技能，掌握未來發展</p>
          
          <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
            <svg className="h-8 w-8 text-white/80 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-lg italic font-light mb-6">
              「持續學習是成功的關鍵。我們的培訓平台幫助專業人士保持領先地位。」
            </blockquote>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm">
                <span className="text-xl font-bold">張</span>
              </div>
              <div className="ml-4">
                <p className="font-semibold">張志明</p>
                <p className="text-sm text-white/80">首席執行長</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
