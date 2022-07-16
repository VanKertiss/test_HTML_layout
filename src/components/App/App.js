import { Routes, Route } from 'react-router-dom';
import Form from '../Form/Form';
import Title from '../Title/Title';
import HS from './App.module.css';
import Success from '../Success/Success'

function App() {
  return (
    <div className={HS.container}>
      <Title />
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
