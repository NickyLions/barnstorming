import Team from './Team'
import Statistics from './Statistics'

const Player = ({ player }) => {
  return (
    <div className="player-card">
      <h2 className="player-name">{player.playerName}</h2>
      <img src={player.playerNameImage}></img>
      <h5 className="player-position">{player.position}</h5>
      <div className="team">
        {player.playerTeam.map((team) => (
          <Team key={team.id} team={team} />
        ))}
      </div>
      <div className="stats">
        {player.playerStats.map((statistics) => (
          <Statistics key={statistics.id} statistics={statistics} />
        ))}
      </div>
    </div>
  )
}

export default Player
