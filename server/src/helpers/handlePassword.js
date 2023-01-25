const bcryptjs = require("bcryptjs");


const encrypt = async(password) => {
    const hashPassword = await bcryptjs.hash(password, 12)
    return hashPassword
}

const compare = async(password, hashPassword) => {
    return await bcryptjs.compare(password, hashPassword)
}


module.exports = { encrypt, compare }