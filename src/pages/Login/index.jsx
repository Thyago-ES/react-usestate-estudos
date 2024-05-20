import PropTypes from "prop-types";

import { useState } from "react";

import { Formulario, Input, Botao, Container } from "./styles";

const Login = ({ username, setIsLogged }) => {
    const [name, setName] = useState("");

    const onChange = (event) => {
        setName(event.target.value);
    };

    const onClick = () => {
        if (name) {
            username(name);
            setIsLogged(true);
        } else {
            alert("Digite um nome");
        }
    };

    return (
        <Container>
            <Formulario>
                <Input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={onChange}
                />
                {name ? (
                    <Botao to={"/logged"} onClick={onClick}>
                        Cadastrar
                    </Botao>
                ) : (
                    <Botao onClick={onClick}>Cadastrar</Botao>
                )}
            </Formulario>
        </Container>
    );
};

Login.propTypes = {
    username: PropTypes.func,
    setIsLogged: PropTypes.func,
};

export default Login;
