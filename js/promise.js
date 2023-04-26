fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(data => {
        const url = data.homeworld

        fetch(url)
            .then(res => res.json())
            .then(homeData => {
                console.log(skywalkerData)
                console.log(homeData)
            })
    })