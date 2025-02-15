const express           = require('express')
const updateArticleById = require('../controllers/c_updateArticle')

const routes = express.Router()

/**
 * @swagger
 * /api/updateArticle/{id}:
 *   put:
 *     tags:
 *       - Update Article
 *     summary: Memperbarui data artikel berdasarkan ID
 *     description: Memperbarui artikel yang ada di database berdasarkan ID yang diberikan.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID artikel yang ingin diperbarui
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Judul artikel
 *                 default: ''
 *               content:
 *                 type: string
 *                 description: Konten artikel
 *                 default: ''
 *               category:
 *                 type: string
 *                 description: Kategori artikel
 *                 default: ''
 *               status:
 *                 type: string
 *                 enum:
 *                   - Publish
 *                   - Draft
 *                   - Thrash
 *                 description: Status artikel
 *                 default: ''
 *     responses:
 *       200:
 *         description: Berhasil memperbarui artikel
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 originalArticle:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     title:
 *                       type: string
 *                     content:
 *                       type: string
 *                     category:
 *                       type: string
 *                     status:
 *                       type: string
 *                       enum:
 *                         - Publish
 *                         - Draft
 *                         - Thrash
 *                       example: 'Publish, Draft, Thrash'
 *                 updatedArticle:
 *                   type: object
 *                   properties:
 *                     affectedRows:
 *                       type: integer
 *                     changedRows:
 *                       type: integer
 *       404:
 *         description: Artikel tidak ditemukan atau tidak ada perubahan
 *       500:
 *         description: Terjadi kesalahan saat memperbarui artikel
*/

routes.put('/updateArticle/:id', updateArticleById)

module.exports = routes