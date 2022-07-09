class HelloController {
  async index(req, res) {
    return res.json({
      hello: 'Fix deprecated moongose, and running at mongo DB'
    })
  }
}

export default new HelloController()
