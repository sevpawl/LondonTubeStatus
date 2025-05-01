import React, { useState, useEffect } from 'react';

const Clock = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-24 h-24 rounded-full bg-gray-200 shadow-[15px_15px_30px_#a3a3a3,-15px_-15px_30px_#ffffff]">
        <div className="absolute inset-2.5 rounded-full bg-gray-200 shadow-[inset_8px_8px_16px_#a3a3a3,inset_-8px_-8px_16px_#ffffff] flex items-center justify-center">
          <div className="absolute w-4 h-3 bg-gray-500 rounded-full z-10" />

          <div className="absolute w-1 h-6 bg-gray-600 rounded-full origin-bottom" />

          <div className="absolute w-1 h-10 bg-gray-600 rounded-full origin-bottom" />

          <div className="absolute w-0.5 h-12 bg-red-500 rounded-full origin-bottom" />
        </div>
      </div>
    </div>
  );
};

export default Clock;
