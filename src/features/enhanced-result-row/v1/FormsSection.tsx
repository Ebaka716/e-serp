import React from 'react';
import FormResultCard from './FormResultCard';

const formResults = [
  {
    title: 'Employee Onboarding Form',
    microcopy: 'Register new employees and assign departments.'
  },
  {
    title: 'Project Budget Request',
    microcopy: 'Submit budget requests for new projects.'
  },
  {
    title: 'Time Off Request',
    microcopy: 'Request vacation or leave with approval workflow.'
  }
];

export default function FormsSection() {
  return (
    <>
      <div className="mb-2">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Forms</h2>
      </div>
      <div className="flex flex-row gap-4 mb-8 overflow-x-auto pb-2">
        {formResults.map((form, idx) => (
          <FormResultCard key={idx} title={form.title} microcopy={form.microcopy} />
        ))}
      </div>
    </>
  );
} 