// import {updateBook} from "../../services/bookService";
//
// const UpdateBtn = (props) => {
//     const onUpdateHandler = (e) => {
//         e.preventDefault();
//         updateBook(props.idToDelete);
//     }
//
//     return(
//         <form onSubmit={onUpdateHandler}>
//             <fieldset>
//                 <legend>Update details:</legend>
//                 <label htmlFor="bookTitle">Title:</label>
//                 <input type="text" name="title" id="bookTitle">
//                     {props.title}
//                 </input>
//
//                 <label htmlFor="bookAuthor">Author:</label>
//                 <input type="text" name="author" id="bookAuthor">
//                     {props.author}
//                 </input>
//
//                 <label htmlFor="bookYear">Year bought:</label>
//                 <input type="number" name="year" id="bookYear">
//                     {props.year}
//                 </input>
//
//                 <label htmlFor="prodPrice">Book language:</label>
//                 <select name="language" id="language">
//                     <option value="Bulgarian">Bulgarian</option>
//                     <option value="English">English</option>
//                     <option value="German">German</option>
//                 </select>
//                 <input className="button" type="submit" value="Update Book"/>
//             </fieldset>
//         </form>
//     )
//
//
// }
// export default UpdateBtn;