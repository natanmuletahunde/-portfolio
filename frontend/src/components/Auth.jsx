import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

function Auth() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-100">
      <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
        {showLogin ? (
          <>
            <LoginPage />
            <p className="mt-4 text-center">
              Don't have an account?{' '}
              <button
                className="text-blue-600 hover:underline"
                onClick={() => setShowLogin(false)}
              >
                Sign up
              </button>
            </p>
          </>
        ) : (
          <>
            <SignupPage />
            <p className="mt-4 text-center">
              Already have an account?{' '}
              <button
                className="text-blue-600 hover:underline"
                onClick={() => setShowLogin(true)}
              >
                Log in
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Auth;
