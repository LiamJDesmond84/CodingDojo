
import './App.css';
import Advertisement from './components/Advertisement';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import SubContents from './components/SubContents';


function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main adv={<Advertisement />}>
        <SubContents />
        <SubContents />
        <SubContents />
      </Main>
    </div>
  );
}

export default App;
