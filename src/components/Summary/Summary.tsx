interface SummaryProps {
  points: number;
}

const Summary = ({ points }: SummaryProps) => {
  return (
    <h1>
      Points collected: <b style={{ color: `${points ? '#7070b8' : 'inherit'}` }}>{points}</b>
    </h1>
  );
};

export default Summary;
