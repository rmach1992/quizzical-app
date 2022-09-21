import './App.css'
import Start from './Start'
import Questions from './Questions'

export default function App() {

  return (
    <div className="App">
      <Start /> 
      {/* Once start is clicked, conditionally render the questions screen */}
      <Questions />
    </div>
  )
}

