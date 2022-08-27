const urls = [
    'https://swapi.dev/api/people/'
]

export const fetchData = async () => {
    try{
        const response = await Promise.all(
            urls.map(urls => fetch(urls)
                .then(res => res.json()))
        );
        console.log(response);
    }catch(error) {
        console.log('Error: ', error);
    }
}