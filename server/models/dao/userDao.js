const BaseDao = require('./basedao')
const User = require('../user')

class UserDao extends BaseDao {
    constructor() {
        super(User)
    }
}
module.exports = UserDao