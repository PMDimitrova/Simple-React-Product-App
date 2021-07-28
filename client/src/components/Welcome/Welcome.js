import {Link} from "react-router-dom";

const Welcome = () => {
    return (
        <main className="main-container">
            <h1 className="welcome-greeting">Welcome!</h1>
            <p>Please click {' '}
                <Link to="/bookshelf">here</Link>
                {' '}to proceed</p>

        </main>
    );
}

export default Welcome;