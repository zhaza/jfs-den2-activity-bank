const randomNum = Math.floor(Math.random() * 8);

const randomRestaurant = numOfRestaurants => {
    const restaurants = [
        'Applebees',
        'Panera Bread',
        'Popeyes',
        'Chopt',
        'Chick-fil-A',
        'Cheesecake Factory',
        'Five Guys'
    ];
    const randomRestaurantList = [];

    for (let i = 0; i < numOfRestaurants; i++) {
        const randomNum = Math.floor(Math.random() * 7);
        randomRestaurantList.push(restaurants[randomNum]);
    }
    return randomRestaurantList;
}

console.log(randomRestaurant(randomNum));