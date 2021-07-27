import api from "./api";

export const getAll = () => {
    return fetch(api.posts)
        .then( res => res.json())
        .catch(err => console.log('Handled error: ' + err));
}

//add service for the input form

//delete service -> the show products -> delete btn

//update service -> show products -> update btn