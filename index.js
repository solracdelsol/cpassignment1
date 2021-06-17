//profile image, username, age, description in that order
// const fetch = require("fetch")
const alphabet = "abcdefghijklmnopqrstuvwxyz"

function generateString(){
  let string = ""
  const randomCharCount = Math.floor(Math.random() * 7)

  for(let i = 0; i < randomCharCount; i++){
    string += alphabet[Math.floor(Math.random() * 25)]
  }

  return string.length >= 6 ? string : generateString()
}

function generateAge(){
  return Math.floor(Math.random() * 100)
}

function generateTiles(){
  for(let i = 1; i <= 100; i++){
    let br = document.createElement("br")

    //tile append
    let tile = document.createElement("div");
    tile.setAttribute("class", "tile")
    tile.setAttribute("id", `${i}`)
    document.getElementById("main").appendChild(tile);

    //tile container append
    let container = document.createElement("div")
    container.setAttribute("class", "container")
    tile.appendChild(container)

    //image append
    let image = document.createElement("img")
    image.setAttribute('src', `https://picsum.photos/160/90?random=${i}`)
    image.setAttribute("id", "image")
    image.setAttribute("class", "content")
    container.appendChild(image)


    //name append
    let tileName = document.createElement("div")
    tileName.setAttribute("id", "username")
    tileName.setAttribute("class", "content")
    let userName = document.createTextNode(`username: ${generateString()}`)
    tileName.innr
    tileName.appendChild(userName)
    container.appendChild(tileName)


    //age append
    let tileAge = document.createElement("div")
    tileAge.setAttribute("id", "age")
    tileAge.setAttribute("class", "content")
    let age = document.createTextNode(`age: ${generateAge()}`)
    tileAge.appendChild(age)
    container.appendChild(tileAge)


    //description append
    let tileDescription = document.createElement("div")
    tileDescription.setAttribute("id", "description")
    tileDescription.setAttribute("class", "content")
    let description = document.createTextNode(`description: ${generateString()}`)
    tileDescription.appendChild(description)
    container.appendChild(tileDescription)




    // console.log(generateAge(), generateString())
  }
}

generateTiles()