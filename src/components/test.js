const data = [
    {
        name: 'Jeanette',
        location: 'Los Angeles'
    },
    {
        name: 'John',
        location: 'Colorado'
    },
    {
    name: 'Bella',
    location: 'Seattle'
    },
];

const dataAndHTML = data.map(user => {
    return '<p>Name: ${user.name}</p> 
    <p>Location: ${user.location}</p>';
});


console.log(dataAndHTML);

