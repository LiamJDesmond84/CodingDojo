
import './App.css';
import BigInversion from './components/BigInversion';
import PuttingItTogether from './components/PuttingItTogether';

function App() {
  return (
    <div className="App">
      <BigInversion firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"} />
      <BigInversion firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"} />
      <BigInversion firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"} />
      <BigInversion firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"} />
      <hr />
      <PuttingItTogether firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"} />
      <PuttingItTogether firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"} />
    </div>
  );
}

export default App;
