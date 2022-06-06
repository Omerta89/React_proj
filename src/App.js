import './App.css';
import data from './myData.json'

const App = () => {
  return (
    <div className="App">
      test
      <hr></hr>

      {JSON.stringify(data)}
    </div>
  );
}

export default App;
