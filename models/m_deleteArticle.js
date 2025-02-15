const db = require('../config/database')

const deleteArticle = async (post_id) => {
    const query = 'DELETE FROM posts WHERE id = ?'
    const [result] = await db.promise().query(query, [post_id])
    return result
}

module.exports = deleteArticle