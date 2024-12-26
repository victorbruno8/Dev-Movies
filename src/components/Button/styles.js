import styled, { css } from "styled-components";

export const buttonStyles = css`
        border: 3px solid #fff;
    background-color: transparent;
    border-radius: 30px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    transition: 0.5s;
        &:hover {
            background-color: #fff;
            color: #ff0000;
        }

`

export const ButtonWhite = styled.button`

    ${buttonStyles}


`

export const ButtonRed = styled.button`

    ${buttonStyles}
    background: #ff0000;
    border: 3px solid transparent;
    transition: .6s;

        &:hover {
            box-shadow: 0px 0px 10px #ff0000;
        }
`

