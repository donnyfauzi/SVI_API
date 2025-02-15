const updateArticle  = require('../models/m_updateArticle')
const getArticleById = require('../models/m_getArticleById')

const updateArticleById = async (req, res) => {
    const posts_id = req.params.id
    const { title, content, category, status } = req.body

    if (!title || !content || !category || !status) {
      return res.status(400).json({ message: 'Data baru harus diisi' })
    }

    if (title.length > 20) {
      return res.status(400).json({ message: 'Title tidak boleh lebih dari 20 karakter' })
    }

    if (content.length > 200) {
      return res.status(400).json({ message: 'Content tidak boleh lebih dari 200 karakter' })
    }

    if (category.length < 3) {
      return res.status(400).json({ message: 'Category harus memiliki minimal 3 karakter' })
    }
    
    try {
        const article = await getArticleById(posts_id)

        if (!article) {
            return res.status(404).json({ message: 'Article tidak ditemukan'})
        }

        const updatedArticle = await updateArticle(posts_id, title, content, category, status,)

        if (updatedArticle.changedRows === 0) {
          return res.status(404).json({ message: 'Tidak ada perubahan pada artikel' })
        }

        return res.status(200).json({ message: 'Berhasil update data artikel', originalArticle: article, updatedArticle: updatedArticle })

    } catch (error) {
        return res.status(500).json({ message: 'Terjadi kesalahan saat update data', error })
    }
}

module.exports = updateArticleById