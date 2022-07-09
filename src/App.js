import express from 'express'
import cors from 'cors'
import routes from './routes'
import './database'

class App {
  constructor() {
    this.server = express()
    this.middleware()
    this.routes()
  }

  middleware() {
    this.server.use(express.json())
    this.server.use(cors()) //pre configuração das origens da requisição
  }

  routes() {
    this.server.use(routes)
    // const routes = new Router()
    // //inserir aqui o arquivo externo para rota

    // routes.get('/hello', (_req, res) => {
    //   res.json({ hello: 'world' })
    // })
  }
}

export default new App().server
