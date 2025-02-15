const express           = require('express')
const deleteArticleById = require('../controllers/c_deleteArticle')

const routes = express.Router()

/**
 * @swagger
 * /api/deleteArticle/{id}:
 *   delete:
 *     tags:
 *       - Delete Article
 *     summary: Menghapus artikel berdasarkan ID
 *     description: Menghapus artikel yang ada di database berdasarkan ID yang diberikan.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID artikel yang ingin dihapus
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
 *       400:
 *         description: Artikel tidak ditemukan
 *       500:
 *         description: Terjadi kesalahan saat menghapus artikel
*/

routes.delete('/deleteArticle/:id', deleteArticleById)

module.exports = routes