console.log('%c HI', 'color: firebrick')

// FIRST CHALLENGE 
let allBreeds = [];

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// STABLE ELEMENT
let dogContainer = document.querySelector("div#dog-image-container")
// console.log(dogContainer)

// Fetching the imgUrl Response as an Array.
fetch (imgUrl)
.then(res => res.json())
.then((dogImg) => {
    makeDogImgIntoHTLM(dogImg)       
    });


let makeDogImgIntoHTLM = (dogPOJO) => {
    dogPOJO.message.forEach((imgLink) => {
        let dogElement = document.createElement("img")
        dogElement.className = 'new-dog'
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
    // console.log(breedArry)
        turnBreedArrayIntoHtml(breedArry)
    })


let turnBreedArrayIntoHtml = (breedPOJO) => {
    // RETURNS A HASH THEREFORE Object.keys notation
    allBreeds = Object.keys(breedPOJO.message)
    allBreeds.forEach((breed) => {

        let breedLi = document.createElement('li')
        breedLi.innerText = breed
        dogBreeds.append(breedLi)
        breedLi.addEventListener('click', changeColor )
        breedLi.addEventListener('mouseover', pointercursor)
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
    evt.preventDefault()
    let selectedLetter = evt.target.value
    let filteredBreeds = allBreeds.filter((breed) => breed.startsWith(selectedLetter)) 
    dogBreeds.innerHTML = NewListDog(filteredBreeds)

});

let NewListDog = (dogarray) => {
    let dogBreedArrayList = dogarray.map((breed) => {
        return `<li>${breed}</li>`
    })
return dogBreedArrayList.join('')
}




