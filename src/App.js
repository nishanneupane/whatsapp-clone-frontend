import { Routes,Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import "bootstrap/dist/css/bootstrap.min.css"
import Status from './components/Status/Status';
import StatusViewer from './components/StatusViewer/StatusViewer';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/status' element={<Status/>}/>
        <Route path='/status/:userId' element={<StatusViewer/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
