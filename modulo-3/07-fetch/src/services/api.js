// src/services/api.js
const callToApi = (searchTerm) => {
    return fetch(`https://swapi.dev/api/people/?search=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
            return data.results;
        });
};

export default callToApi;
