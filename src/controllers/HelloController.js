class HelloController {
  async index(req, res) {
    return res.json({
      hello: 'Fix deprecated mongoose, and running at mongo DB'
    })
  }
}

export default new HelloController()
