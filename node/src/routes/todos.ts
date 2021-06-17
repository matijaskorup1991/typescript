import { Router } from 'express';
import { createTodo } from '../controllers/todos';

const router = Router();

router.route('/').post(createTodo);

export default router;
