import React, { useState } from 'react';

function Score({ number, isActive }) {
  const [active, setActive] = useState(false);
  const bgColour = active ? 'bg-secondary' : 'bg-silver';
  return (
    <button
      className={`${bgColour} w-10 h-10 rounded-full flex justify-center items-center`}
    >
      {number}
    </button>
  );
}

export default Score;
