import('node-fetch').then(({ default: fetch }) => {
    const csvToJson = require('csvtojson');
    // Import the fs module with promises API
    const fs = require('fs').promises;

    const csvUrl = 'https://raw.githubusercontent.com/AuthorProxy/IATA_Cities/master/IATA_cities_only%20(rexported%20from%20db).csv';

    fetch(csvUrl)
        .then(response => response.text())
        .then(csvText => csvToJson().fromString(csvText))
        .then(jsonObj => {
            // Convert JSON object to string for writing to file
            const jsonString = JSON.stringify(jsonObj, null, 2); // null and 2 are used for formatting
            // Write to a file
            return fs.writeFile('output.json', jsonString);
        })
        .then(() => {
            console.log('JSON saved to output.json');
        })
        .catch(err => console.error(err));
});
