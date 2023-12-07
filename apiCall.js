import got from 'got';

const apiKey = 'YgXvristQ3xbvJPknOjl9Sl53cZdX68A';
const apiUrl = 'https://api.giphy.com/v1/gifs/trending?api_key=YJX6Vs4kayAeOM4etN7P5ueL4ie4wU5D';

async function getGiphy() {
    try {
        const response = await got(apiUrl);
        const data = JSON.parse(response.body);

        console.log(data);
    } catch (error) {
        console.error('Error in fetch', error.response.body);
    }
}

getGiphy();
