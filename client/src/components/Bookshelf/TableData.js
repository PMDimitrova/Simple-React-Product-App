import DeleteBtn from "../Buttons/DeleteBtn";
import UpdateBtn from "../Buttons/UpdateBtn";


const TableData = (props) => {
    const deleteBtn = () => {
        if (props.delete)
            return (
                <DeleteBtn/>
            )
    }

    const updateBtn = () => {
        if (props.update)
            return (
                <UpdateBtn/>
            )
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
                    {updateBtn()}
                    {deleteBtn()}
                    {noActionsPossible()}
                </td>
            </tr>
        )
    })
}
export default TableData;