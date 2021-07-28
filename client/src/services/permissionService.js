const baseUrl = 'http://localhost:8080/permissions';

export const deleteAvailability = () => {
    return fetch(`${baseUrl}/delete`)
        .then(res => console.log(res))
        .catch(err => console.log('Error: ' + err));
}
