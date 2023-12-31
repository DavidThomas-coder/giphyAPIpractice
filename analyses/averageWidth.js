import fetchGiphyData from "../apiCall.js";

async function analyzeGiphyData() {
    try {
        // Call on the imported function to get the data from GIPHY API
        const giphyData = await fetchGiphyData();

        // Extract gif widths
        const gifWidths = giphyData.map(gif => parseInt(gif.images.original.width));

        // Run function for relevant analysis
        const averageWidth = calculateAverageWidth(gifWidths);

        // console.log('All widths:', gifWidths)
        console.log('Average width:', averageWidth);
    } catch (error) {
        console.error('Error analyzing Giphy data:', error);
    }
}

function calculateAverageWidth(widths) {
    // Initialize empty sum 
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
