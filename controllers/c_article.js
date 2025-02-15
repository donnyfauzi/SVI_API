const createArticle = require('../models/m_article')

const createNewArticle = async (req, res) => {
    const { title, content, category, status } = req.body

    if (title.length > 20) {
        return res.status(400).json({message: 'Title tidak boleh lebih dari 20 karakter'})
    }

    if (content.length > 200) {
        return res.status(400).json({ message: 'Content tidak boleh lebih dari 200 karakter' })
    }

    if (category.length < 3 ) {
      return res.status(400).json({ message: 'Category harus memiliki minimal 3 karakter' })
    }

    const validStatuses = ['Publish', 'Draft', 'Trash']
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message:'Status tidak valid. Pilih antara Publish, Draft, atau Trash.' })
    }

    try {
        const newArticle = await createArticle(title, content, category, status || 'Draft')
        res.status(200).json({ message: 'Berhasil menambah artikel baru', newArticle })

    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat menambah artikel", error })
    } 
}

module.exports = createNewArticle