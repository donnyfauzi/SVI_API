const db = require('../config/database')

const updateArticle = async (id, title, content, category, status) => {
    const query = 'UPDATE posts SET title = ?, content = ?, category = ?, status = ? WHERE id = ?'
    const [result] = await db.promise().query(query, [title, content, category, status, id])
    return result
}

module.exports = updateArticle