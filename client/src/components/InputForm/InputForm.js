import {Fragment} from "react";

const InputForm = () => {
    return(
        <Fragment>
            <h2>Please add the product details here:</h2>
            <form>
                <input type="text" id="name"/>
                {/*todo should not be smaller than 0*/}
                <input type="number" id="price"/>
                <select id="price">
                    <option value="USD" selected>USD</option>
                    <option value="EUR">EUR</option>
                    <option value="BGN">BGN</option>
                </select>
                {/*todo add create option*/}
                <input type="submit" value="Add product"/>
            </form>
        </Fragment>

    )
}
export default InputForm;