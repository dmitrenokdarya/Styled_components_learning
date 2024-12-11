import styled from 'styled-components';
import { MyAnimation } from '../styles/animation/Animation';

export const StyledBtn = styled.button`
    border: none;
    background-color: #08964f;
    padding: 10px 20px;
    color: #fffdfd;
    font-size: 3rem;
    font-weight: bold;
    &:hover{background-color: #0926ce};
    &:last-child{background-color: #6b739c};
`

export const SuperBtn = styled(StyledBtn)`
    background-color: #70198b;
    border-radius: 10px;
    animation: ${MyAnimation} 2s ease-in-out;
`