import styled, { css } from 'styled-components';

type StyledBtnPropsType = {
    color?: string,
    fontSize?: string,
    btnType?: "primary" | "outline"
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    //background-color: ${props => props.color || "#00e40b"};
    padding: 10px 20px;
    //color: #fffdfd;
    font-size: ${props => props.fontSize || "2rem"};
    font-weight: bold;
    border-radius: 10px;
    &:hover{background-color: #ee045e};

    ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
        background-color: ${props => props.color || "#00e40b"};
        color: #fffdfd;
        &:hover{background-color: #ee045e};
    `}

    ${props => props.btnType === "outline" && css<StyledBtnPropsType>`
        border: 2px solid ${props => props.color || "#00e40b"};
        color: ${props => props.color || "#00e40b"};
        background-color: transparent; 
        &:hover{
            border: 2px solid #ee045e;
            color: #ee045e;
            background-color: transparent;
        };
    `}
`