import React from 'react';

const tahoe_peaks = [
  { name: 'freel peak', elevation: 10891 },
  { name: 'monument peak', elevation: 10067 },
  { name: 'pyramid peak', elevation: 9983 },
  { name: 'mt. tallac', elevation: 9735 },
];

const TahoePeaks = () => {
  return (
    <div>
      <ul>
        {tahoe_peaks.map((peak, idx) => (
          <li key={idx}>
            {peak.name} - {peak.elevation.toLocaleString()}ft
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TahoePeaks;
