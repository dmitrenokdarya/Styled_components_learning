import './App.css';
import styled from 'styled-components';
import { StyledBtn } from './components/Button.styled';
import { Link } from './components/Link.styled';
import { Menu } from './components/Menu.styled';
import { myTheme } from './styles/Theme.styled';


function App() {
  return (
    <div className="App">
      <BoxDiv>
        {/* <StyledBtn color={"blue"} fontSize={"20px"}>Hello</StyledBtn> 
        <StyledBtn color={"black"}>Hello</StyledBtn> 
        <StyledBtn fontSize={"30px"}>Hello</StyledBtn>  */}

        <StyledBtn color={myTheme.color.primary} btnType={"primary"}>Hello</StyledBtn> 
        <StyledBtn color={myTheme.color.secondary} btnType={"outline"}>Hello</StyledBtn> 
      </BoxDiv>
    </div>
  );
}

export default App;

const BoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20px;
  button{
    cursor:pointer;
  };
  ${Link}{
    cursor:zoom-in;
  };

  @media ${myTheme.media.mobile} {
    flex-direction: column;
  }
`
