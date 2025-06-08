import { getPostsModel, createPostModel } from '../models/postModel.js'
export const getPostsController = async (req, res) => {
  try {
    const posts = await getPostsModel()
    res.status(200).json(posts)
  } catch (error) {
    console.error('Error importando posts en el controlador:', error)
    res
      .status(500)
      .json({ message: 'Error en el servidor al obtener publicaciones' })
  }
}
export const createPostController = async (req, res) => {
  console.log('Datos recibidos en el controlador (req.body):', req.body)
  const { titulo, url, descripcion } = req.body
  const likes = req.body.likes !== undefined ? req.body.likes : 0
  if (!titulo || !url || !descripcion) {
    return res
      .status(400)
      .json({ message: 'Datos incompletos falta informacion por completar' })
  }

  try {
    const nuevoPost = await createPostModel({ titulo, url, descripcion, likes })
    res.status(201).json(nuevoPost)
  } catch (error) {
    console.error('Error creando post en el controlador:', error)
    res
      .status(500)
      .json({ message: 'Error en el servidor al crear la publicación' })
  }
}
