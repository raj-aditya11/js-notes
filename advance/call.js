function setUsername(username){
    //complex DB calls
    this.username = username;
}

function createUser(username, email, password){
    setUsername.call(this, username);                               //.call is used to hold the execution and call the function
    this.email = email;
    this.password = password;
}

const chai = createUser("chai", "chai@chai.com", "chai123")
console.log(chai)

