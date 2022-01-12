const users = [
{userId:1, firstName:"Pawan", gender:"Male"},
{userId:2, firstName:"Ishita", gender:"Female"},
{userId:3, firstName:"Mahor", gender:"male"},
{userId:4, firstName:"Chuchi", gender:"male"}
];

for(let user of users){
    console.log(user['firstName']);
}

//Destructuring

const [user1, user2, user3, user4, user5] = users;
console.log(user1,user2);
// TASK --> get name of user1 and gender of user3

const [{firstName:user1name, userId:user1Id},,{gender:user3gender} ] = users;
console.log(user1name);
console.log(user3gender ); 
console.log(user1Id);