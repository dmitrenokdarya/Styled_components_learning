import { createGlobalStyle } from 'styled-components';
import { myTheme } from './Theme.styled';

export const GlobalStyles = createGlobalStyle`
    *, 
    *::before,
    *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        background-color: ${myTheme.color.grey.light};
    }
`