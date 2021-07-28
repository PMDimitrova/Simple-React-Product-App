import {Fragment} from "react";
import InputForm from "../InputForm/InputForm";
import Bookshelf from "../ShowBooks/Bookshelf";

const Library = () =>{
    return(
        <Fragment>
            <InputForm/>
            <Bookshelf/>
        </Fragment>
    )
}
export default Library;