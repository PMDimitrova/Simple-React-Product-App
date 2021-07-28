import {Fragment} from "react";
import InputForm from "../InputForm/InputForm";
import ShowBooks from "../ShowBooks/ShowBooks";

const Bookshelf = () =>{
    return(
        <Fragment>
            <InputForm/>
            <ShowBooks/>
        </Fragment>
    )
}
export default Bookshelf;