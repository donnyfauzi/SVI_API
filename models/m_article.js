const db = require('../config/database')

const createArticle = async (title, content, category, status = 'Draft') => {
    const query = `
    INSERT INTO posts (title, content, category, status, created_date, updated_date)
    VALUES (?, ?, ?, ?, NOW(), NOW());`

    const values = [title, content, category, status]
    const [result] = await db.promise().query(query, values)
    return { id: result.insertId, title, content, category, status }
}

module.exports = createArticle