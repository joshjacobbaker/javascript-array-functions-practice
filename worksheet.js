const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
]

//***MAP***
//1. Get array of all names
// const names = characters.map((character) => {
//   return character.name
// })
// console.log(`characters.map((character) => {
//     return character.name
//   })=== [${names}]`)

//2. Get array of all heights
// const heights = characters.map((character) => {
//   return character.height
// })

// console.log(`characters.map((character) => {
//     return character.height
//   }) === [${heights}]`)

//3. Get array of objects with just name and height properties
// const minifiedRecords = characters.map((character) => ({
//   name: character.name,
//   height: character.height,
// }))

// var a = "lol"
// console.log([...minifiedRecords])

//4. Get array of all first names

// const firstNames = characters.map((character) => {
//   return character.name.split(" ")[0]
// })

// console.log(firstNames)

//***REDUCE***
//1. Get total mass of all characters

// const totalMassOfCharacters = characters.reduce((acc, cur) => {
//   return acc + cur.mass
// }, 0)

// console.log(totalMassOfCharacters)

//2. Get total height of all characters

// const totalHeightOfCharacters = characters.reduce((acc, cur) => {
//   return acc + cur.height
// }, 0)

// console.log(totalHeightOfCharacters)

//3. Get total number of characters by eye color

// const totalNumberOfCharactersByEyeColor = characters.reduce((acc, cur) => {
//   if (acc[cur.eye_color]) {
//     acc[cur.eye_color] = acc[cur.eye_color] + 1
//   } else {
//     acc[cur.eye_color] = 1
//   }
//   return acc
// }, {})

// console.log(totalNumberOfCharactersByEyeColor)

//4. Get total number of characters in all the character names

// const totalNameCharacters = characters.reduce((acc, cur) => {
//   return acc + cur.name.length
// }, 0)

// console.log(totalNameCharacters)

//***FILTER***
//1. Get characters with mass greater than 100

// const charactersMassGreater100 = characters.filter((character) => {
//   return character.mass > 100
// })

// console.log(charactersMassGreater100)

//2. Get characters with height less than 200

// var ic = []
// const shorterCharacters = characters.filter((character) => {
//   return character.height < 200
// })

// console.log(shorterCharacters)

//3. Get all male characters

// const maleCharacters = characters.filter((character) => {
//   return character.gender === "male"
// })

// console.log(maleCharacters)

//4. Get all female characters

// const femaleCharacters = characters.filter((character) => {
//   return character.gender === "female"
// })

// console.log(femaleCharacters)

//***SORT***
//1. Sort by mass

// const sortedCharacterMass = characters.sort((a, b) => {
//   return a.mass - b.mass
// })

// console.log(sortedCharacterMass)

//2. Sort by height

// const sortedCharacterHeight = characters.sort((a, b) => {
//   return a.height - b.height
// })

// console.log(sortedCharacterHeight)

//3. Sort by name

// const sortedCharacterByName = characters.sort((a, b) => {
//   if (a.name < b.name) return -1
//   return 1
// })

// console.log(sortedCharacterByName)

//4. Sort by gender

// const sortedCharactersByGender = characters.sort((a, b) => {
//   if (a.gender === "female") return -1
//   return 1
// })

// console.log(sortedCharactersByGender)

//***EVERY***
//1. Does every character have blue eyes?

// const everyCharacterHaveBlueEyes = characters.every((character) => {
//   return character.eye_color === "blue"
// })

// console.log(everyCharacterHaveBlueEyes)

//2. Does every character have mass more than 40?

// const everyCharacterMassMoreThan40 = characters.every((character) => {
//   return characters.mass > 40
// })hank you for reaching out. I would like to learn more about this opportunity.

// console.log(everyCharacterMassMoreThan40)

//3. Is every character shorter than 200?

// const everyCharacterShorterThan200 = characters.every((character) => {
//   return character.height < 200
// })

// console.log(everyCharacterShorterThan200)

//4. Is every character male?

// const everyCharacterMale = characters.every((character) => {
//   return character.gender === "male"
// })

// console.log(everyCharacterMale)

//***SOME***
//1. Is there at least one male character?

// const oneMaleCharacter = characters.some((character) => {
//   return character.gender === "male"
// })

// console.log(oneMaleCharacter)

//2. Is there at least one character with blue eyes?

// const oneCharacterWithBlueEyes = characters.some((character) => {
//   return character.eye_color === "blue"
// })

// console.log(oneCharacterWithBlueEyes)

//3. Is there at least one character taller than 210?

// const oneCharacterTallerThan210 = characters.some((character) => {
//   return character.height > 210
// })

// console.log(oneCharacterTallerThan210)

//4. Is there at least one character that has mass less than 50?

// const oneCharacterWithMassLessThan50 = characters.some((character) => {
//   return character.mass < 50
// })

// console.log(oneCharacterWithMassLessThan50)
