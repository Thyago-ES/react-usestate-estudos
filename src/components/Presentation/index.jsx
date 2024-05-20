import PropTypes from "prop-types";

import { useEffect } from "react";

import { Container, Presents, Button } from "./styles";

const Presentation = ({ username, buttonText, isLogged }) => {
    useEffect(() => {
        if (username) {
            localStorage.setItem("username", username);
        }
    }, [username]);

    return (
        <Container>
            <Presents>Hello, {username}!</Presents>

            {isLogged ? (
                <Button to={"/"}>{buttonText}</Button>
            ) : (
                <Button to={"/login"}>{buttonText}</Button>
            )}
        </Container>
    );
};

Presentation.propTypes = {
    username: PropTypes.string,
    buttonText: PropTypes.string,
    isLogged: PropTypes.bool,
};

export default Presentation;
