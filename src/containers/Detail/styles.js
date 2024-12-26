import styled, { keyframes} from "styled-components";

const scale = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    height: 100vh;
    max-width: 1500px;
    margin-top: -100px;
    
`
export const Background = styled.div`
    background-image: url(${props => props.image});
    height: 50vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
    position: relative;
        &::before {
            content: "";
            background-color: rgba(0, 0, 0, 0.4);
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
        }

        &::after {
            content: "";
            background-image: linear-gradient(to top,rgba(18, 18, 18, 0.87), rgba(0, 0, 0, 0));
            position: absolute;
            bottom: 0px;
            left: 0px;
            width: 100%;
            height: 150px;
        }
`

export const Cover = styled.div`
    padding: 20px;
    display: flex;
    align-items: flex-start;
    height: 100%;
    z-index: 200;

        img {
            width: 400px;
            border-radius: 10px;
            animation: ${scale} 0.6s linear;
        }

`

export const Info = styled.div`
    padding: 20px;
    width: 50%;
    z-index: 99;
    display: flex;
    flex-direction: column;
    gap: 20px;
        h2 {
            font-size: 50px;
            font-weight: 700;
        }

        p {
            font-weight: 700;
        }

`

export const ContainerMovies = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
`
 
