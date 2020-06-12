import { Router } from 'https://deno.land/x/oak/mod.ts';
const router = new Router();

import todoController from '../controllers/todo.controller.ts';

router
    .get("/todos", todoController.getAll)
    .post("/todos", todoController.create)
    .delete("todos/:id", todoController.delete);

export default router;