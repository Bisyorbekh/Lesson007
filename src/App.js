import './App.css';
import Banner from './components/banner/Banner';
import Parent from './components/file/Parent';
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
      <Parent/>
      <h1>MUI - Material UI "User Interface"</h1>
      <Banner/>
      <Main/>
    </div>
  );
}

export default App;
