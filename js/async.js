// Can only use await with async function
// Getting fetch request and instructing js to wait
// Still don't have access to the data outside of the fetch request

async function getSkywalkerData() {
    const response = await fetch('https://swapi.dev/api/people/1')
        return await response.json()
}

// The below means we can view the data but only within this then block
getSkywalkerData().then(data => {
    console.log(data)
})

// Access data with another async function
// In the below the second fetch request requires data from the first fetch
async function getSkywalkerData() {
    const response = await fetch('https://swapi.dev/api/people/1/')
        .catch(() => {
            console.log('oh no!') // to catch errors
        })
    return await response.json() // here return does NOT return the data
}

async function getHomeData(url) {
    const response = await fetch(url)
    return await response.json()
}

async function getData() {
    const character = await getSkywalkerData();
    const home = await getHomeData(character.homeworld)

    console.log(character)
    console.log(home)
}

getData()


// With 2 fetch requests independent of each other
// The second one won't happen till the first one is finished
// To get them to run in parallel/concurrently we remove await in the third getData function
async function getSkywalkerData() {
    const response = await fetch('https://swapi.dev/api/people/1/')
        .catch(() => {
            console.log('oh no!') // to catch errors
        })
    return await response.json() // here return does NOT return the data
}

async function getLeiaData() {
    const response = await fetch('https://swapi.dev/api/people/5/')
        .catch(() => {
            console.log('oh no!') // to catch errors
        })
    return await response.json() // here return does NOT return the data
}

// If we inc await after the = then getLeiaData wouldn't happen until after the first comes back.
// Having them run at the same time will be quicker
async function getData(next) {
    const luke = getSkywalkerData()
    const leia = getLeiaData()

    await(luke)
    await(leia)
}

getData()
