const deleteArticle  = require('../models/m_deleteArticle')
const getArticleById = require('../models/m_getArticleById')

const deleteArticleById = async (req, res) => {
    const post_id = req.params.id

    try {
        const article = await getArticleById(post_id)

        if (!article) {
            return res.status(400).json({ message: 'Artikel tidak ditemukan'})
        }

        const deletedArticle = await deleteArticle(post_id)

        return res.status(200).json({ message: 'Artikel berhasil dihapus' }, article, deletedArticle)
        
    } catch (error) {
        return res.status(500).json({ message: 'Terjadi kesalahan saat menghapus artikel', error })
    }
}

module.exports = deleteArticleById