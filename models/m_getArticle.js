const db = require('../config/database')

const getArticle = async () => {
    const query = 'SELECT * FROM posts'
    const [result] = await db.promise().query(query)
    return [result]
}

module.exports = getArticle