// Cannot use a forEach loop as it does not return anything so here we use .map
// In react children in a list should have a unique 'key' prop. Without this you will get an error.
// Fixed by entering a key=" " in the opening tag with a unique id, ie. the value/index of what you are displaying
// Index best as if you have two values the same it will cause an error
// class is a reserved word in JS and so best to use className when adding classes to HTML tags.
// This will be automatically changed to class in the DOM

const List = () => {

    const items = ['Bananas', 'Peanut butter', 'Jaffa cakes', 'Bleach']

    return (
        <ul>
            {items.map((item, index) => <li key={index} className='list-item'>{item}</li>)}
        </ul>
    )
}

export default List