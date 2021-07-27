import api from "./api";
import request from "./requestServ";
import createOptions from "./createOptions";

export const getAll = () => {
    return fetch(api.posts)
        .then( res => res.json())
        .catch(err => console.log('Handled error: ' + err));
}

// export async function post(url, data) {
//     return await request(url, createOptions('post', data));
// }

//add service for the input form

//delete service -> the show products -> delete btn

//update service -> show products -> update btn