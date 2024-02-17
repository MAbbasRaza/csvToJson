# CSV to JSON Converter

This Node.js script fetches a CSV file from a specified URL, converts it to JSON format, and saves the resulting JSON data to a file.

## Prerequisites
Node.js and npm (or yarn) installed on your system
Installation

## Clone this repository:

```Bash
git clone https://github.com/MAbbasRaza/csvToJson.git
```

## Install dependencies:

Select the project directory and install dependencies using the following command:

```Bash
npm install
```
## Usage

Run the script using the following command:

```Bash
node index.js
```

The script will fetch the CSV data, convert it to JSON, and save it as output.json in the same directory.

## Customization

To use a different CSV file, modify the csvUrl variable in the index.js file.
To change the output file name, adjust the fs.writeFile call.
