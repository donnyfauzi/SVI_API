const db = require('../config/database')

const getArticleById = async (posts_id) => {
  const query = 'SELECT * FROM posts WHERE id = ?'
  const [result] = await db.promise().query(query, [posts_id])
  return result[0]
}

module.exports = getArticleById
