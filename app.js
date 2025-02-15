const express       = require('express')
const bodyPaser     = require('body-parser')
const swaggerJsDoc  = require("swagger-jsdoc")
const swaggerUi     = require("swagger-ui-express")

const app = express()
const port = 5000

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Dokumentasi",
      version: "1.0.0",
      description: "Dokumentasi API Sharing Vision dengan Swagger",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
    tags: [
      { name: "Add Article" },
      { name: "Get Article" },
      { name: "Get Article By Id" },
    ],
  },
  apis: ["./routes/*.js"],
};

const r_article = require('./routes/r_article')
const r_getArticle = require('./routes/r_getArticle')
const r_getArticleById = require("./routes/r_getArticleById");


const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-SVI-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(bodyPaser.json())

app.use('/api', r_article)
app.use('/api', r_getArticle)
app.use('/api', r_getArticleById)

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`)
  console.log(`Swagger UI berjalan di http://localhost:${port}/api-SVI-docs`)
})