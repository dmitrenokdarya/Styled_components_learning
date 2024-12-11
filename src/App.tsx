import './App.css';
import styled from 'styled-components';
import { StyledBtn, SuperBtn } from './components/Button.styled';
import { Link } from './components/Link';
import { Menu } from './components/Menu';
import { GlobalStyles } from './styles/GlobalStyles';


function App() {
  return (
    <div className="App">
      <BoxDiv>
        <Menu>
          <ul>
            <li><a href="">menu item 1</a></li>
            <li><a href="">menu item 2</a></li>
            <li><a href="">menu item 3</a></li>
          </ul>
        </Menu>
        <StyledBtn>Hello</StyledBtn> 
        <StyledBtn as={Link} href={"#"}>LinkComponent</StyledBtn>
        <StyledBtn as="a" href={"#"}>Hello</StyledBtn> 
        <SuperBtn>SuperButton♥</SuperBtn>
      </BoxDiv>
    </div>
  );
}

export default App;

const BoxDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  button{
    cursor:pointer;
  };
  ${Link}{
    cursor:zoom-in;
  };
`
