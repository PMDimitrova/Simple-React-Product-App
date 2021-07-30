
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
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
};

export const deleteBook = (id) =>{
    return fetch(`${baseUrl}/books/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const getBook = (id) => {
    return fetch(`${baseUrl}/books/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const updateBook = (book) => {
    console.log(book);

    return fetch(`${baseUrl}/books/${book.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
}