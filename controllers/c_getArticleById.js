const getArticleById = require('../models/m_getArticleById')

const getNewArticleById = async (req, res) => {
  const posts_id = req.params.id

  try {
    const newArticleById = await getArticleById(posts_id)

    if (!newArticleById) {
      return res.status(404).json({ message: 'Artikel tidak ditemukan' })
    }

    return res.status(200).json({ message: 'Berhasil mengambil artikel berdasarkan id', newArticleById })
      
  } catch (error) {
    return res.status(500).json({ message: 'Terjadi kesalahan saat mengambil data artikel', error })
  }
}

module.exports = getNewArticleById