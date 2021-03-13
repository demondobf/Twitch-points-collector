import * as React from 'react';

interface SummaryProps {
  points: number;
}

const Summary = ({ points }: SummaryProps) => {
  return (
    <p>
      Points collected: <b style={{ color: `${points ? '#007900' : 'inherit'}` }}>{points}</b>
    </p>
  );
};

export default Summary;
