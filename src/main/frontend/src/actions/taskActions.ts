import { createAction } from 'redux-actions';
import { Task } from '../model';

export const ADD_TASK = 'ADD_TASK';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const DELETE_TASK = 'DELETE_TASK';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCESS';
export const LIST_TASK = 'LIST_TASK';
export const LIST_TASK_SUCCESS = 'LIST_TASK_SUCCESS';

const addTask = createAction<Task, string>(
    ADD_TASK,
    (name: string) => ({name})
);

const addTaskSucess = createAction<Task, Task>(
    ADD_TASK_SUCCESS,
    (task: Task) => (task)
);

const deleteTask = createAction<string, string>(
    DELETE_TASK,
    (id: string) => id
);

const listTask = createAction<void>(
    LIST_TASK,
    () => { }
);

const listTaskSuccess = createAction<void>(
    LIST_TASK_SUCCESS,
    () => { }
);

export {
    addTask,
    addTaskSucess,
    deleteTask,
    listTask,
    listTaskSuccess
};