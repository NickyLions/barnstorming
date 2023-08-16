import './App.css'
import playerStats from './stats.json'
import Player from './components/Player'

const App = () => {
  return (
    <div className="wrapper">
      <h1>Baseball Players</h1>
      <div className="player-list">
        {playerStats.map((movie, index) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
    </div>
  )
}

export default App
