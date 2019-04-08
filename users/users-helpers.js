const db = require('../data/dbConfig.js')

module.exports = {
    get,
    insert
}


function get() {
    return db('users')
}

function insert(user) {
    return db('users')
    .insert(user)
    .then(ids => ids[0])
}