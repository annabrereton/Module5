const CoinToss = () => {
// cannot use if statements in JSX as they do not return anything whereas ternaries do
    const flipCoin = () => {
        // return Math.random() < 0.5 ? 'heads' : 'tails'
        if(Math.random() < 0.5) {  //can use the normal if statement here but not below
            return 'heads'
        }
        return 'tails'
    }

    const pics = {
        kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
        doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
    }

    return (
        <img src={pics[flipCoin() === 'heads' ? 'kitty' : 'doggy']}/>
    )
}

export default CoinToss