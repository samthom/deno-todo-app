import { v4 } from 'https://deno.land/std/uuid/mod.ts';
import Todo from '../interfaces/Todo.ts';
import todos from '../data/todos.ts';

export default {
    getAll: ({ response }: { response: any }) => {
        response.status = 200;
        response.body = {
            data: todos
        };
    },
    create: async (
        { request, response }: { request: any, response: any }
    ) => {
        const body = await request.body();
        if (!request.hasBody) {
            response.status = 400;
            response.body = {
                message: 'Please provide the task detail and status',
            };
            return;
        }
        let newTodo: Todo = {
            id: v4.generate(),
            task: body.value.todo,
            done: false,
        };
        let data = [...todos, newTodo];
        response.body = {
            data
        };
    },
    delete: (
        { params, response } : { params: { id: string }, response: any}
    ) => {
        const allTodos = todos.filter(t => t.id !== params.id);
        response.status = 200;
        response.body = {
            data: allTodos,
        };
    },
};