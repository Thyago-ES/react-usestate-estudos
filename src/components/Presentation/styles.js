import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    gap: 40px;
`;

export const Presents = styled.h1`
    font-size: 2rem;
    font-weight: bold;
`;

export const Button = styled(Link)`
    width: 100px;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: lightpink;
    display: grid;
    place-items: center;
    text-decoration: none;
    color: #000000;

    &:hover {
        cursor: pointer;
        background-color: pink;
    }
`;
