import fetchGiphyData from "../apiCall.js";

async function analyzeGiphyData() {
    try {
        // Call on the imported function to get the data from GIPHY API
        const giphyData = await fetchGiphyData();

        // Extract gif widths
        const gifWidths = giphyData.map(gif => parseInt(gif.images.original.width));

        // Get the average
        const averageWidth = calculateAverageWidth(gifWidths);

        // Set a margin of 10px in between gifs
        const margin = 10

        // Set the average screen size
        const screenWidth = 1024

        // Perform analysis, how many gifs can fit side by side width-wise
        const gifsScreenWidth = Math.floor(screenWidth / (averageWidth + margin));

        console.log('Number of gifs side by side:', gifsScreenWidth);
    } catch (error) {
        console.error('Error:', error);
    }
}

function calculateAverageWidth(widths) {
    // Initialize empty sum to start
    let widthSum = 0;

    // Loop to sum up all widths
    for (const width of widths) {
        widthSum += width;
    }

    // Calculate the average width
    const averageWidth = widthSum / widths.length;

    return averageWidth;
}

analyzeGiphyData()