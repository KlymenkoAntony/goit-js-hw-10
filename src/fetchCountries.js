export function fetchCountries(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,languages,flags`)
        .then(response => {
        if (response.status === 200) {
        return response.json();
      }
            if(response.status === 404){
                 return Promise.reject('not found');
            }
    });
}