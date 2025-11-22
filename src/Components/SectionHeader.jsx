import React from "react";

function SectionHeader({ title }) {
  return (
    <div className="mb-4 flex justify-between py-3">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <h1 className="text-white/50">Explore more</h1>
    </div>
  );
}

export default React.memo(SectionHeader);
