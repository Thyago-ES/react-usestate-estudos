import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;

    background: transparent;
    backdrop-filter: blur(10px);
    border-radius: 10px;
`;

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const Input = styled.input`
    width: 300px;
    height: 40px;
    border-radius: 10px;
    outline: none;
    text-indent: 10px;
    font-size: 1.5rem;
`;

export const Botao = styled(Link)`
    width: 100px;
    height: 30px;
    border-radius: 10px;
    background-color: green;
    border: none;
    transition: background 0.3s;
    display: grid;
    place-items: center;
    text-decoration: none;
    color: #ffffff;

    &:hover {
        cursor: pointer;
        background: darkgreen;
    }
`;
