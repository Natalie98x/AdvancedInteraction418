// **** IMAGE sequence options ******/

let optionsImageSequence_1 = {
    /**
     * Set the url to your images. The filenames should have this structure:
     * filePrefix + index + fileFormat. E.g., marathon00.jpg
     * */
    url: "./img/Mexico",

    // set the file prefix
    filePrefix: "Mexico_",

    // set the file format
    fileFormat: "jpg",

    // set the <img> tag id
    tagID: "animation1",

    // This is the image sequence start
    startIndex: 0,

    // The total number of images in the sequence
    amount: 20,

    // Set the coordinates where you want to reproduce the image sequence
    startRollingAt: 0,
    finishRollingAt: 500,

    // relative to 'window' or 'wheel' By default it is relative to wheel
    relativeTo: "wheel",

    // CSS position. Use 'fixed' to keep image sequence in place, else 'relative' 
    cssPosition: "relative"
}

// Create an instance of the your image sequence
let marathon = new ImageSequence(optionsImageSequence_1);

// Add your animation to the main sequences
mainSequences.push(marathon)