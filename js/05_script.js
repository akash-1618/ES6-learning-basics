// 1)
// function addressMaker(city, state) {
//     const newAdress1 = { newCity: city, newState: state };
//     // const newAdress2 = { city: city, state: state };
//     const newAdress2 = { city, state };
//     console.log(newAdress1);
//     console.log(newAdress2);
// }
// addressMaker('Austin', 'Texas');

// 2)
// function addressMaker(address) {
//     const newAddress = {
//         city: address.city,
//         state: address.state,
//         country: 'United States'
//     };
// }
// addressMaker({city: 'Austin', state: 'Texas'});
// 
// 
function addressMaker(address) {
    const { city, state } = address;
    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`)
}
addressMaker({ city: 'Austin', state: 'Texas' });