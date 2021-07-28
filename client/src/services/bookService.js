
const baseUrl = 'http://localhost:3004';

export const getAll = () => {
    return fetch(`${baseUrl}/books`)
        .then(res => res.json())
        .catch(err => console.log('Error: ' + err));
}

export const create = (title, author, year, language) => {
    let book = {
        title,
        author,
        year,
        language
    };

    return fetch(`${baseUrl}/books`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book)
    });
};

//delete service -> the show products -> delete btn



//update service -> show products -> update btn