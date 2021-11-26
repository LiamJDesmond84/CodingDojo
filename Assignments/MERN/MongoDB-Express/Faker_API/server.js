const express = require('express');
const faker = require('faker');
const app = express();
const port = 8000;



// user = {
//         _id: '',
//         firstName: '',
//         lastName: '',
//         phoneNumber: '',
//         email: '',
//         password: ''
//     }


// company = {
//     _id: '',
//     name: '',
//     address: [{
//         street: '',
//         city: '',
//         state: '',
//         zipCode: '',
//         country: ''
//     }]
// }

const createUser = () => {
    const newFake = {
        _id: faker.random.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newFake;
};
    
const newFakeUser = createUser();
console.log(newFakeUser);


const createCompany = () => {
    const newFake = {
        _id: faker.random.uuid(),
        name: faker.company.companyName(),
        address: [{
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }]
    };
    return newFake;
};
    
const newFakeCompany = createCompany();
console.log(newFakeCompany);

const newFakeUserandCompany = [createCompany(), createUser()]
console.log(newFakeUserandCompany);

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


//? http://localhost:8000/api/users/new
app.get("/api/users/new", (req, res) => {
    res.json( newFakeUser );
});
//? http://localhost:8000/api/companies/new
app.get("/api/companies/new", (req, res) => {
    res.json( newFakeCompany );
});
//? http://localhost:8000/api/user/company
app.get("/api/user/company", (req, res) => {
    res.json( newFakeUserandCompany  );
});


app.listen( port, () => console.log(`Listening on fake port: ${port}`) );