import {Fragment} from "react";

const InputForm = () => {
    return(
        <Fragment>
            <h2>**New product form**</h2>
            <form>
                <fieldset>
                    <legend>Please fill the new book details here:</legend>
                    <label for="bookTitle">Title:</label>
                    <input type="text" name="name" id="bookTitle" placeholder="Title"/>

                    <label for="bookYear">Publishing year:</label>
                    <input type="number" id="bookYear" value="2000"/>

                    <label for="prodPrice">Book language:</label>
                    <select id="language">
                    <option value="BG" selected>Bulgarian</option>
                    <option value="ENG">English</option>
                    <option value="DE">German</option>
                </select>
                    <button>Add</button>
                    {/*todo add onSubmitHandler*/}

                </fieldset>
            </form>

        </Fragment>
    )
}
export default InputForm;
