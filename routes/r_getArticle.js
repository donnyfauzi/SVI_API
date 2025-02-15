const express       = require('express')
const getNewArticle = require('../controllers/c_getArticle')

const router = express.Router()

/**
 * @swagger
 * /api/getArticle:
 *   get:
 *     tags:
 *       - Get Article
 *     summary: Mengambil semua data Article
 *     description: Mengambil semua data article dari database.
 *     responses:
 *       200:
 *         description: Berhasil mengambil data artikel
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 article:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       title:
 *                         type: string
 *                       content:
 *                         type: text
 *                       category:
 *                         type: string
 *                       status:
 *                         type: string
 *                         enum:
 *                          - Publish
 *                          - Draft
 *                          - Thrash
 *                         example: 'Publish, Draft, Thrash'
 *       500:
 *         description: Terjadi kesalahan saat mengambil artikel
*/

router.get('/getArticle', getNewArticle)

module.exports = router