import React from 'react';

const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-soft to-warm"></div>
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #E74C3C 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }}></div>
    </div>
  );
};

export default BackgroundPattern; 