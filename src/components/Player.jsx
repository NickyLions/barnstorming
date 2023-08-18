import Team from './Team'
import Statistics from './Statistics'
import Position from './Position'

const Player = ({ player }) => {
  return (
    //Player Card//
    <div className="player-card">
      <div className="player-header">
        <h2>{player.playerName}</h2>
        <h3>
          {player.playerTeam.map((team) => (
            <Team key={team.id} team={team} />
          ))}
        </h3>
      </div>

      <img src={player.playerNameImage}></img>

      <h4>
        {player.position.map((position) => (
          <Position key={position.id} position={position} />
        ))}
      </h4>

      <div className="stats">
        {player.playerStats.map((statistics) => (
          <Statistics key={statistics.id} statistics={statistics} />
        ))}
      </div>
    </div>
  )
}

export default Player
