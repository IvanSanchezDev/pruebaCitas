import jwt from 'jsonwebtoken'
import { Router } from 'express'
import { Especialidad } from '../dto/Especialidad.js'
import { Consultorio } from '../dto/Consultorio.js'
import { Medico } from '../dto/Medico.js'
import { EstadoCita } from '../dto/EstadoCita.js'
import { Cita } from '../dto/Cita.js'
import { TipoDocumento } from '../dto/TipoDocumento.js'
import { classToPlain, plainToClass } from 'class-transformer'
import dotenv from 'dotenv'

dotenv.config('../../')

const appToken = Router()
const appVerifyToken = Router()

const DTO = (p1) => {
  const match = {
    especialidad: Especialidad,
    consultorio: Consultorio,
    medico: Medico,
    estadoCita: EstadoCita,
    cita: Cita,
    tipoDocumento: TipoDocumento
  }
  const inst = match[p1]

  if (!inst) {
    throw new Error('no existe la coleccion')
  }

  return { atributos: plainToClass(inst, {}, { ignoreDecorators: true }), class: inst }
}

appToken.use('/:coleccion', async (req, res, next) => {
  try {
    const inst = DTO(req.params.coleccion).atributos
    const jwtt = jwt.sign(Object.assign({}, classToPlain(inst)), process.env.CLAVE_JWT, { expiresIn: '1h' })
    res.status(201).send({ status: 201, message: jwtt })
  } catch (error) {
    res.status(error.status).send(error.message)
  }
})

appVerifyToken.use('/', async (req, res, next) => {
  const { Authorization } = req.headers
  if (!Authorization) return res.status(400).json({ message: 'Token no enviado' })

  try {
    jwt.verify(Authorization, process.env.CLAVE_JWT, (err, result) => {
      if (err) {
        return res.status(400).json({ error: 'token invalido' })
      } else {
        req.data = result
        next()
      }
    })
  } catch (error) {

  }
})

export {
  appToken,
  appVerifyToken,
  DTO
}
