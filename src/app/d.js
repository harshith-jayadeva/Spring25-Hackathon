

export const profiles = [
    {name: 'Alice',  bio: "Loves art and tech.", image: './3.jpg'},
    {name: 'Bob',  bio: "Movie enthusiast.", image: './1.jpg'},
    {name: 'Charlie',  bio: "Nature lover.", image: './2.jpg'},
    {name: 'Diana', bio: "Designer and creative thinker.",  image: './4.jpg'},
    {name: 'Ethan', bio:"Health and wellness advocate.", image: './5.jpg'},
    {name: 'Fiona', bio:"Aspiring novelist.", image: './7.jpg'},
    
];

function getProfileDetails(name) {
    return profiles[name] || { bio: "No bio available." };
}