const Statistics = ({ statistics }) => {
  return (
    <div className="player_stats">
      {statistics.era}
      {statistics.wins}
      {statistics.loses}
      {statistics.shutouts}
      {statistics.avg}
      {statistics.rbi}
      {statistics.hr}
      {statistics.runs}
    </div>
  )
}

export default Statistics
