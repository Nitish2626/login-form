import './App.css';
import Login from './components/login/Login';
import styled from 'styled-components';

function App() {

  const Div=styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center
  `

  return (
    <Div>
      <Login />
    </Div>
  );
}

export default App;
