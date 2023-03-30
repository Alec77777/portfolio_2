'use strict';

const countImages = 49;
const imgRandArrNrs = new Array(countImages);

//check if number has been used in array
const notUsedIn = function (checkNum, inArray) {
    if (inArray.includes(checkNum)) {
        return false;
    } else {
        return true;
    }
}

//populate array with random unique numbers from 1 to parameter value
const populateImgRandArrNrs = function (imagesNr) {
    const arrNumsUsed = new Array(imagesNr);

    console.log(arrNumsUsed);

    for (let k = 0; k <= imagesNr - 1; k++) {
        let randNum = Math.ceil(Math.random() * imagesNr); //random number from 1 to countImages both included

        if (notUsedIn(randNum, arrNumsUsed)) {
            arrNumsUsed[k] = randNum; //now it was used
            imgRandArrNrs[k] = randNum; // add to array of random numbers
        } else {
            k--;//it needs to be done again since no NEW value was found
        };
    }
}

populateImgRandArrNrs(countImages);

//TEST IF EVERY VALUE EXISTS BUT IS RANDOM
// console.log(imgRandArrNrs);

// for (let k = 1; k <= 52; k++) {
//     console.log(imgRandArrNrs.includes(k));
// }

for (let k = (1 - 1); k <= (42 - 1); k++) {
    const image = document.getElementsByClassName('image')[k];

    //Link om te gerbuik vir free random images
    //https://picsum.photos/500?random=${k + 1}

    // image.setAttribute('src', `https://picsum.photos/500?random=${k + 1}`);

    image.setAttribute('src', `resources/images/${imgRandArrNrs[k + 1]}.jpg`);


    image.setAttribute('alt', `Image${k + 1}`);
}