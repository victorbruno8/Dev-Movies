import styled from "styled-components";

export const Container = styled.div`
    z-index: 99;
    position: fixed;
    top:0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    background-color: ${props => props.changeBackground ? '#121212' : 'transparent'};
    transition: background-color 0.5s ease-in-out;


    img {
        width: 20%;
    }
`

export const Menu = styled.ul`
    display: flex;
    gap: 50px;
    margin-right: 30px;

`

export const Li = styled.li`
    cursor: pointer;
    font-size: 1.3rem;
    position: relative;

    &::after {
        content: "";
        height: 3px;
        width: ${props => props.isActive ? '100%' : '0'};
        background-color: #189b20;
        position: absolute;
        bottom: -10px;
        left: 0;
        border-radius: 5px;
        transition: width 0.4s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }
`