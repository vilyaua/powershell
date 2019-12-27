var restApiClientUser = require('./restApiClientUser');

// Leave any sample below uncommented to find data by this particular Email
//const userEmail = "don.goodliffe@example.com"; //9ee1b13dc6112271007f9d0efdb69cd0
//const userEmail = "guest@example.com"; //5136503cc611227c0183e96598c4f706
const userEmail = "itil@example.com"; //681b365ec0a80164000fb0b05854a0cd
//const userEmail = "admin@example.com"; //6816f79cc0a8016401c5a33be04be4

/* var userInitData = {
    'email': 'testerrr@email.com',
    'mobile_phone': '+380676360948',
    'country': 'Ukraine'
} */

var userInitData = {
    email: "testerrr@email.com",
    mobile_phone: "+380676360948",
    country: "Ukraine"
}

var client = new restApiClientUser();
client.createUser(userInitData);