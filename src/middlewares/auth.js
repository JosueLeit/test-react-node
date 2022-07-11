import jwt from 'jsonwebtoken'
import authConfig from '../config/auth'
import { promisify } from 'util'

export default async (req, res, next) => {
  const authHeader = req.headers.authorization

  console.log(authHeader)

  //console.log(authHeader)
  if (!authHeader) {
    return res.status(401).json({ error: 'Token was not provided' })
  }

  //Bearer XXXX
  const [, token] = authHeader.split(' ')
  console.log(token)
  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret)

    req.userId = decoded.id

    return next()
  } catch (err) {
    return res.status(401).json({ error: 'Invalid Token.' })
  }
}
