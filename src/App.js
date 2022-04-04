import './App.css';
import { Data } from './Data';
import Profile from './Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
<Profile Data={Data} />
    </div>
  );
}

export default App;
