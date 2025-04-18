import LoginForm from '../../components/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Left Section - Login Form */}
      <div className="flex flex-col items-center justify-center w-full max-w-md px-4 py-8 mx-auto md:w-1/2 md:px-6 lg:px-8">
        <div className="w-full px-6 py-8 space-y-6 bg-white rounded-lg shadow-2xl dark:bg-gray-800 md:px-8">
          {/* Logo and Welcome Message */}
          <div className="text-center">
            <div className="flex justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">歡迎回來</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">請登入您的帳號以繼續</p>
          </div>
          {/* Login Form */}
          <div className="space-y-4">
            <LoginForm />
          </div>
          {/* Forgot Password Link */}
          <div className="text-center text-gray-500 dark:text-gray-400">
            <a href="#" className="hover:underline">忘記密碼?</a>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="relative hidden w-1/2 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 md:block">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-white">
          <h1 className="mb-6 text-5xl font-bold text-center">DTX Training</h1>
          <div className="w-16 h-1 mx-auto mb-12 bg-white rounded-full"></div>
          <p className="max-w-md mb-10 text-xl font-light text-center">提升您的專業技能，掌握未來發展</p>
          <div className="w-full max-w-md p-10 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl">
            <svg
              className="w-8 h-8 mb-6 text-white/80"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="mb-8 text-lg italic font-light">
              「持續學習是成功的關鍵。我們的培訓平台幫助專業人士保持領先地位。」
            </blockquote>
            <div className="flex items-center mt-4">
              <div className="flex items-center justify-center w-12 h-12 mr-4 bg-white/30 rounded-full backdrop-blur-sm">
                <span className="text-xl font-bold">張</span>
              </div>
              <div>
                <p className="text-lg font-semibold">張志明</p>
                <p className="mt-1 text-sm text-white/80">首席執行長</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

