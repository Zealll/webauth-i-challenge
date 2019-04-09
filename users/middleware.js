
const bcrypt = require('bcryptjs')
const db = require('./users-helpers.js')

function restricted(req, res, next) {
    if(req.session && req.session.user) {
        next()
    } else  {
        res.status(401).json({message: "You shall not pass!"})
    }
}















// ======== OLD MIDDLEWARE =========


// function restricted(req, res, next) {
//     const { username, password } = req.headers

//     if (username && password) {
//         db 
//         .findBy({ username })
//         .first()
//         .then(user => {
//             if (user && bcrypt.compareSync(password, user.password)){
//                 next()
//             } else {
//                 res.status(401).json({message: "Invalid Username and/or Password"})
//             }
//         })
//         .catch(error => res.status(500).json(error))
//     } else {
//         res.json({message: "Forgot one of the credentials"})
//     }
// }


module.exports = {
    restricted
}