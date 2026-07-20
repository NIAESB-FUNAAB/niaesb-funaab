import React from 'react';

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(#dcfce7_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-32 h-32 mb-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-green-50 rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-0 border-4 border-dashed border-green-200 rounded-full animate-[spin_4s_linear_infinite]"></div>
          <div className="absolute inset-2 border-4 border-transparent border-t-green-600 border-r-green-500 rounded-full animate-spin shadow-sm"></div>
          
          <div className="absolute inset-6 bg-gradient-to-tr from-green-600 to-green-500 rounded-full animate-pulse shadow-xl shadow-green-600/30"></div>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">
          Coming Soon
        </h1>
        <div className="mt-8 relative w-48 h-1 bg-green-50 rounded-full overflow-hidden">
          <div className="absolute inset-y-0 left-1/4 right-1/4 bg-green-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;