import './App.css';
import User from './components/User';

const App = () => {
  // This unused array was causing a lint error and was not part of the UI.
  return (
    <div className='parent'>
      <User />
    </div>
  )
};

export default App;
