import {Link} from "react-router-dom";

const Welcome = () => {
    return (
        <main className="main-container">
            <h1 className="welcome-greeting">Welcome to your personal library</h1>
            <p>If you want to see the books you own </p>
            <p> click{' '}
                <Link to="/library">here</Link>
                {' '}to proceed</p>

        </main>
    );
}

export default Welcome;