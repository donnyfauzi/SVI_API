const express = require('express')
const getNewArticleById = require('../controllers/c_getArticleById')

const router = express.Router()

/**
 * @swagger
 * /api/getArticleById/{id}:
 *   get:
 *     tags:
 *       - Get Article By Id
 *     summary: Mengambil data artikel berdasarkan ID
 *     description: Mengambil satu data artikel berdasarkan ID dari database.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID artikel yang ingin diambil
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
 *       404:
 *         description: Artikel tidak ditemukan
 *       500:
 *         description: Terjadi kesalahan saat mengambil artikel
 */


router.get('/getArticleById/:id', getNewArticleById)

module.exports = router
