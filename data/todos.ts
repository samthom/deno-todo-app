import { v4 } from 'https://deno.land/std/uuid/mod.ts';
import Todo from '../interfaces/Todo.ts';

let todos: Todo[] = [
    {
        id: v4.generate(),
        task: 'Hello world app with deno',
        done: true,
    },
    {
        id: v4.generate(),
        task: 'Simple rest API with deno',
        done: true,
    },
];

export default todos;