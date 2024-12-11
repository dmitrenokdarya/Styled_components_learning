import styled from 'styled-components';

export const Menu = styled.nav`
    ul{
        list-style:none;
        display: flex;
    }
        li > a{
        color: red;
        }
        li + li{
        margin: 20px;
        }
`