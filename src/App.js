import './App.css';
import Body from './Components/Body'
import jss from 'jss';


function App() {
  jss.setup({
    insertionPoint: document.getElementById('root')
  })
  return (
    <div className="App">
      <Body>
        
      </Body>
    </div>
  );
}

export default App;
