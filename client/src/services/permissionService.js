const baseUrl = 'http://localhost:8080/permissions';

export const getAll = () => {
    return fetch(baseUrl)
        .then(res => res.json())
        .catch(err => console.log('Error: ' + err));
}

export const isCreateEnabled = () => {
    return fetch(`${baseUrl}/create`)
        .then(res => res.json())
        .then(res => res.create)
        .catch(err => console.log('Error: ' + err));
}

