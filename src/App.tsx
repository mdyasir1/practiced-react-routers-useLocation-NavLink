import { useLocation } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <div id="container">
      <Navigation />
      <HTMLContent />
    </div>
  );
}

function HTMLContent() {
  const location = useLocation();
  const pathName = location.pathname;

  return <>{pathName === '/html' ? 'HEllo HTML' : ''}</>;
}

export default App;
