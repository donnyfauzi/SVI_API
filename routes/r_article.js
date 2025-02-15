const express          = require('express')
const createNewArticle = require('../controllers/c_article')

const router = express.Router()

/**
 * @swagger
 * /api/addArticle:
 *   post:
 *     tags:
 *       - Add Article
 *     summary: Membuat Article Baru
 *     description: Membuat article baru ke database article.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: 'Judul Artikel'
 *               content:
 *                 type: text
 *                 example: 'Konten Artiker'
 *               category:
 *                 type: string
 *                 example: 'Kategory Artikel'
 *               status:
 *                 type: string
 *                 enum:
 *                    - Publish
 *                    - Draft
 *                    - Trash
 *                 example: 'Publish'
 *     responses:
 *       200:
 *         description: Berhasil menambahkan article baru    
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Berhasil menambahkan artikel baru'
 *                 new_article:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       example: 'Judul Article'
 *                     content:
 *                       type: text
 *                       example: 'Kontent Artikel'
 *                     category:
 *                       type: string
 *                       example: 'Kategory Article'
 *                     status:
 *                       type: string
 *                       enum:
 *                        - Publish
 *                        - Draft
 *                        - Trash
 *                       example: 'Publish, Draft, Thrash'
 *       500:
 *         description: Terjadi kesalahan saat menambah artikel 
*/

router.post('/addArticle', createNewArticle)

module.exports = router

