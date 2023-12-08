import fetchGiphyData from "../apiCall.js";

async function analyzeGiphyData() {
    try {
        // Call on the imported function to get the data from GIPHY API
        const giphyData = await fetchGiphyData();

        // Extract gif widths
        const gifWidths = giphyData.map(gif => parseInt(gif.images.original.width));

        // Calculate the most common width on the extracted widths
        const mostCommonWidth = calculateMostCommonWidth(gifWidths);

        console.log("All widths:", gifWidths)
        console.log('Most common width:', mostCommonWidth);
    } catch (error) {
        console.error('Error analyzing Giphy data:', error);
    }
}

function calculateMostCommonWidth(widths) {
    //Initialize empty object to store count of each unique width
    const widthCounts = {};

    // Iterate over each element in the widths array.  For each width, adds 1 when encountered.  If seen
    // for the first time, it initializes at 1
    for (const width of widths) {
        widthCounts[width] = (widthCounts[width] || 0) + 1;
    }
    

    let mostCommonWidth;
    let maxCount = 0;

    // Find the width with the highest count
    for (const width in widthCounts) {
        if (widthCounts[width] > maxCount) {
            mostCommonWidth = width;
            maxCount = widthCounts[width];
        }
    }

    return mostCommonWidth;
}

// Call the function at the end
analyzeGiphyData();

