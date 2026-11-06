 import React from 'react'
 
const Panel = ({ title, children }) => {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 border-b border-slate-200 pb-3 text-lg font-bold text-[#142F40]">
        {title}
      </h3>
      {children}
    </section>
  );
};

export default Panel;
