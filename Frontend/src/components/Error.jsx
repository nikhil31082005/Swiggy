import React from 'react';
import { useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-red-100 text-red-800 p-6">
      <div className="bg-white rounded-lg shadow-xl p-10 max-w-lg w-full text-center border-t-4 border-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-24 h-24 text-red-500 mx-auto mb-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.174 3.35 1.94 3.35h14.728c1.766 0 2.806-1.85 1.94-3.35L13.94 2.175a1.125 1.125 0 0 0-1.98 0L3.697 16.03c-.866 1.5.174 3.35 1.94 3.35Z"
          />
        </svg>

        <h1 className="text-5xl font-extrabold mb-4 text-red-700">Oops!</h1>
        
        {error.status && (
          <p className="text-2xl font-semibold mb-3">
            Status: <span className="text-red-600">{error.status}</span>
          </p>
        )}
        
        {error.data && (
          <p className="text-xl italic mb-6">
            Error: <span className="font-medium text-red-500">{error.data}</span>
          </p>
        )}

        {!error.status && !error.data && (
          <p className="text-xl italic mb-6">
            An unexpected error occurred.
          </p>
        )}
        
        <p className="text-lg text-gray-600">
          We apologize for the inconvenience. Please try refreshing the page or navigating back.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-8 px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}

export default Error;