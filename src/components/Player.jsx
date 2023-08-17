import Team from './Team'

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
    </div>
  )
}

export default Player
