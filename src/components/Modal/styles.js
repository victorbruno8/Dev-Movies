import styled from "styled-components";

export const Container = styled.div`
    background-color: #000;
    height: 400px;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    max-width: 1200px;

    iframe {
        width: 100%;
        height: 100%;
        border: none;
        z-index: 150;
    }

`

export const Background = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 110;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CLose = styled.button`
    position: absolute;
    top: 295px;
    right: 590px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: #fff;
    font-size: 15px;
`