
export function filterData(search, restaurants) {
    const filterData = restaurants.filter((restaurant) => {
        return restaurant.title.toLowerCase().includes(search.toLowerCase());
    }

    )
    return filterData;

}
