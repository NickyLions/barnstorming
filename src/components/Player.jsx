import Team from './Team'

const Player = ({ player }) => {
  return (
    <div className="player-card">
      <h2 className="player-name">{stats.player}</h2>
      <img src={state.playerImage}></img>
      <h5 className="player-position">{stats.position}</h5>

      <div className="team">
        {stats.team.map((team) => (
          <Team key={team.id} team={team} />
        ))}
      </div>
      <div className="pitching_stats">
        {movie.genres.map((genre) => (
          <Genre key={genre.id} genre={genre} />
        ))}
      </div>
      <div className="batting_stats"></div>
    </div>
  )
}

export default Player
