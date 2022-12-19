import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import RightSide from './components/RightSide/RightSide';

function App() {
  return (
    <div className="App">
        <div className="AppGlass"> 
          <Sidebar/>
          <Content/>
          <RightSide/>
        </div>
    </div>
  );
}

export default App;