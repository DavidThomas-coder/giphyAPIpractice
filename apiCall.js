import fetch from 'node-fetch';

async function fetchGiphyData() {
    
    // Define apiKey and apiUrl up top
    const apiKey = 'YJX6Vs4kayAeOM4etN7P5ueL4ie4wU5D';
    const apiUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;

    try {
        // Fetch the data
        const response = await fetch(apiUrl);

        // Display error if fetch fails
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Convert response to JSON
        const data = await response.json();

        // Destructure the response
        return data.data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

export default fetchGiphyData;










// const apiKey = 'YgXvristQ3xbvJPknOjl9Sl53cZdX68A';
// const apiUrl = 'https://api.giphy.com/v1/gifs/trending?api_key=YJX6Vs4kayAeOM4etN7P5ueL4ie4wU5D';

// fetch(apiUrl)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Show the data in console.log
//         console.log(data.data);

//         // Extract titles
//         const gifTitles = data.data.map(gif => gif.title);

//         // Analyze gif sizes
//         const gifWidths = data.data.map(gif => gif.images.original.width);

//         // Filter gifs based on internet speed
//         const lowSpeedGifs = data.data.filter(gif => gif.frames <= 50);
//         const mediumSpeedGifs = data.data.filter(gif => gif.frames <= 125);
//         const highSpeedGifs = data.data.filter(gif => gif.frames <= 200);

        

//         // Choose what to display
//         // console.log(gifTitles)

//     })
//     .catch(error => {
//         console.error('Fetch error:', error);
//     });
