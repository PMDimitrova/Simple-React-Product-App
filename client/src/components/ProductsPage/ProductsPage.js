import {Fragment} from "react";
import InputForm from "../InputForm/InputForm";
import ShowProducts from "../ShowProducts/ShowProducts";

const ProductsPage = () =>{
    return(
        <Fragment>
            <InputForm/>
            <ShowProducts/>
        </Fragment>
    )
}
export default ProductsPage;