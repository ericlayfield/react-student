import StudentList from './components/StudentList'
import logo from './logo192.png';

function App() {
  return (
    <div className="App">
        <header>
            <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <StudentList/>
    </div>
  );
}

export default App;
