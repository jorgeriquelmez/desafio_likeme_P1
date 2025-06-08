import { pool } from '../../config/config.js'
import { v4 as uuidv4 } from 'uuid'

export const getPostsModel = async () => {
  try {
    const sql = { text: 'SELECT * FROM posts' }
    const result = await pool.query(sql)
    return result.rows
  } catch (error) {
    console.error('Error al obtener posts:', error)
    throw new Error('Error en la query para obtener posts')
  }
}

export const createPostModel = async ({ titulo, url, descripcion, likes }) => {
  const sqlQuery = {
    text: 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *',
    values: [titulo, url, descripcion, likes]
  }
  try {
    const result = await pool.query(sqlQuery)
    return result.rows[0]
  } catch (error) {
    console.error('Error al crear el post en el modelo:', error)
    throw new Error('Error creando el post en la base de datos')
  }
}
