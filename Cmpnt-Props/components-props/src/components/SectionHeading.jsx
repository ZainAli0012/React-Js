import React from 'react'

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="mb-5">
      <h2 className="text-2xl font-bold text-[#142F40]">
        {title}
      </h2>
      <p className="mt-2 text-sm text-slate-500">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeading;
