console.log('%c HI', 'color: firebrick')

// FIRST CHALLENGE 

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// STABLE ELEMENT
let dogContainer = document.querySelector("div#dog-image-container")
// console.log(dogContainer)

// Fetching the imgUrl Response as an Array.
fetch (imgUrl)
.then(res => res.json())
.then((dogImg) => {
    // console.log(dogImg)
    makeDogImgIntoHTLM(dogImg)       
    });

let makeDogImgIntoHTLM = (dogPOJO) => {
    // console.log(dogPOJO)
    dogPOJO.message.forEach((imgLink) => {
        // console.log(imgLink)
        let dogElement = document.createElement("img")
        dogElement.className = 'new-dog'
        // console.log(dogElement)
        dogElement.src = imgLink
        dogContainer.append(dogElement)
    });

}

// SECOND CHALLENGE 

// STABLE ELEMENT
let dogBreeds = document.querySelector("ul#dog-breeds")
// console.log(dogBreeds)

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)
.then(res => res.json())
.then(breedArry => {
        turnBreedArrayIntoHtml(breedArry)

    })

let turnBreedArrayIntoHtml = (breedPOJO) => {
    // RETURNS A HASH THEREFORE Object.keys notation
    Object.keys(breedPOJO.message).forEach((breed) => {
        // console.log(breed)
        let breedLi = document.createElement('li')
        breedLi.innerText = breed
        dogBreeds.append(breedLi)
        breedLi.addEventListener('click', changeColor )
        breedLi.addEventListener('mouseover', pointercursor )


    })
    }
    

// THIRD CHALLENGE 
let changeColor = (evt) => {
    evt.target.style.cursor = 'grab'
    evt.target.style.color = "firebrick"
}

// EXTRA
let pointercursor = (evt) => {
    evt.target.style.cursor = 'pointer'
}


// FOURTH CHALLENGE
// SELECTOR ELEMENT 
let breedDropdw = document.querySelector('select#breed-dropdown')
breedDropdw.addEventListener('change', (evt) => {
    evt.preventDefault
    displayOnlyBreedwWithSelectedLetter(breedDropdw.value)
    // turnBreedArrayIntoHtml(breeds)
})



let displayOnlyBreedwWithSelectedLetter = (selectedLetter) => {
    updatebreeds(selectedLetter)
}

let updatebreeds = (breeds) => {
    // let dogBreeds = document.querySelector("ul#dog-breeds");
    remove(dogBreeds, breeds)
    console.log(breeds)
    
}

let remove = (element, breeds) => {
    dogLI = element.lastElementChild;
    while (dogLI.innerText[0] !== breeds) {
        console.log(dogLI.innerText)
        element.removeChild(dogLI)
        dogLI = element.lastElementChild
    }

 }

