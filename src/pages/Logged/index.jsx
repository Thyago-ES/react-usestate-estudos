import Presentation from "../../components/Presentation";

import PropTypes from "prop-types";

const Logged = ({ username, logout }) => {
    console.log(logout);

    return (
        <>
            <Presentation
                username={username}
                buttonText="Sair"
                isLogged={logout}
            />
        </>
    );
};

Logged.propTypes = {
    username: PropTypes.string,
    logout: PropTypes.bool,
};

export default Logged;
