const bcrypt = require("bcryptjs");


const passwordHash = (password) => {

    return bcrypt.hashSync(password, 10);

}


module.exports = {
    passwordHash
}
