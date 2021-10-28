import './App.css';
import './style.css'
import { columns, rows, columns2, rows2 } from './config';
import Table from './components/table';

function App() {
  return (
    <div className="App">
      <Table columns={columns} rows={rows} />
      <Table columns={columns2} rows={rows2} />
    </div>
  );
}

export default App;
