import {Link} from "react-router-dom";

const UpdateBtn = (props) => {

    const bookToUpdate = props.bookToUpdate;

    const newTo = {
        pathname: "/edit-book",
        param1: bookToUpdate,
    }
    return (
        <Link to={newTo}>
            <button>UPDATE</button>
        </Link>
    )
}
export default UpdateBtn;