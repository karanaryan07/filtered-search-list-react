import './App.css';
import SearchBar from './SearchBar/SearchBar'
import {Col , Row } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-container">
        <Row>
          <Row>
              <SearchBar />
          </Row>
        </Row>
      </header>
    </div>
  );
}

export default App;
