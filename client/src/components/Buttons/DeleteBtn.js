import {deleteBook} from "../../services/bookService";

const DeleteBtn = (props) => {

    const onDeleteButtonClick = () => {
        deleteBook(props.idToDelete);
    }
    return(
        <button onClick={onDeleteButtonClick}>DELETE</button>
    )
}
export default DeleteBtn;