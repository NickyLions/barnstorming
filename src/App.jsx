import './App.css'
import statsArray from './stats.json'
import Player from './components/Player'

const App = () => {
  return (
    <div className="wrapper">
      <h1>Barn Storming Baseball</h1>
      <div className="player-list">
        {statsArray.map((player, index) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
    </div>
  )
}

export default App
