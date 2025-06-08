import { Router } from 'express'
import {
  getPostsController,
  createPostController
} from '../controllers/postController.js'

const router = Router()

router.get('/posts', getPostsController)
router.post('/posts', createPostController)

export default router
