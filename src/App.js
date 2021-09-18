import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './components/Sidebar/Sidebar';
import MainWindow from './components/MainWindow/MainWindow';

function App() {
  return (
    <div className='wrapper'>
      <Sidebar className='sidebar__wrapper' />
      <MainWindow className='main' />

    </div>
  );
}

export default App;
