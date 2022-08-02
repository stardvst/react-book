import React from 'react';
import List from './List';

const tahoe_peaks = [
  { name: 'freel peak', elevation: 10891 },
  { name: 'monument peak', elevation: 10067 },
  { name: 'pyramid peak', elevation: 9983 },
  { name: 'mt. tallac', elevation: 9735 },
];

const TahoePeaks = () => {
  return (
    <List
      data={tahoe_peaks}
      renderItem={peak => (
        <>
          {peak.name} - {peak.elevation.toLocaleString()}ft
        </>
      )}
      renderEmpty={<p>This list is empty</p>}
    />
  );
};

export default TahoePeaks;
