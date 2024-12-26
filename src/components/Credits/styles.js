import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
        div {
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 5px;
        }

        img {
           height: 200px;
           border-radius: 10px;
        }
`

export const Title = styled.h3`
    font-size: 25px;
`