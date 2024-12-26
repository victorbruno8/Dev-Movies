import styled, { keyframes } from "styled-components";

const scale = keyframes`
  
    from {
        transform: rotate(-190deg);
    }

`

export const Background = styled.div`
    background-image: url( ${props => props.img} );
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;

        &::before {
            content: "";
            background-color: rgba(0, 0, 0, 0.6);
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
        }

`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    max-width: 1800px;

`

export const Info = styled.div`
    z-index: 2;
    padding: 20px;
    width: 40%;
    h1 {
        font-size: 50px;
        font-weight: 700;
        color: #fff;
    }

    p {
        font-size: 20px;
        font-weight: 400;
        color: #fff;
        margin: 20px 0;
    }

    div {
        display: flex;
        gap: 11px;
    }

`

export const Poster = styled.div`
    z-index: 2;
    img {
        width: 400px;
        border-radius: 10px;
        animation: ${scale} 0.7s ease-in-out;
    }

`

