import React from 'react';

interface FormResultCardProps {
  title: string;
  microcopy: string;
  iconUrl?: string;
}

const FormResultCard: React.FC<FormResultCardProps> = ({ title, microcopy }) => {
  return (
    <div className="flex flex-col items-start bg-white rounded-lg shadow p-4 mb-2 w-auto min-w-[180px] max-w-xs transition-shadow duration-150 hover:shadow-lg" style={{ minWidth: 0 }}>
      {/* File Icon section, stacked above content */}
      <div className="flex items-start justify-start mb-1">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-blue-400">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <line x1="8" x2="16" y1="8" y2="8" />
          <line x1="8" x2="16" y1="12" y2="12" />
          <line x1="8" x2="12" y1="16" y2="16" />
        </svg>
      </div>
      {/* Content section */}
      <div className="flex flex-col items-start justify-center min-w-0 w-full">
        <h3 className="text-base font-semibold text-blue-700 mb-0.5 leading-tight w-full truncate transition-all duration-150 hover:underline cursor-pointer">{title}</h3>
        <p className="text-xs text-gray-600 leading-tight w-full truncate">{microcopy}</p>
      </div>
    </div>
  );
};

export default FormResultCard; 