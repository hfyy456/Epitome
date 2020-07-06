const BaseDao = require('./basedao')
const Image = require('../image')

class ImageDao extends BaseDao {
    constructor() {
        super(Image)
    }
}
module.exports = ImageDao;