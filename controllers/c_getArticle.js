const getArticle = require('../models/m_getArticle')

const getNewArticle = async (req, res) => {
    try {
        const newArticle = await getArticle()
        return res.status(200).json({ message: 'Berhasil mengambil data artikel', newArticle })
        
    } catch (error) {
         return res.status(500).json({ message: 'Terjadi kesalahan saat mengambil artikel', error })
    } 
}

module.exports = getNewArticle