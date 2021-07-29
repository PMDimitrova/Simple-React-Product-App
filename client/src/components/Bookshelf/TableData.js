import DeleteBtn from "../Buttons/DeleteBtn";

const TableData = (props) => {

    const deleteBtn = (id) => {
        if (props.delete)
            return (
                <DeleteBtn idToDelete={id} books={props.books}/>
            )
    }

    const updateBtn = (id, title, author, year, language) => {
        if (props.update) {
            return (
                <button>UPDATE</button>
                // <button onClick={showEditPage(book)}>UPDATE</button>
            )
        }
    }

    const noActionsPossible = () => {
        if (!props.update && !props.delete) {
            return (
                <tr>Update/Delete options unavailable</tr>
            )
        }
    }
    return props.books.map(book => {
        const {id, title, author, year, language} = book;
        return (
            <tr key={id}>
                <td>{title}</td>
                <td>{author}</td>
                <td>{year}</td>
                <td>{language}</td>
                <td>
                    {updateBtn(id, title, author, year, language)}
                    {deleteBtn(id)}
                    {noActionsPossible()}
                </td>
            </tr>
        )
    })
}
export default TableData;