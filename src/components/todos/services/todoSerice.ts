import APIClient from "./apiClient"

export interface Todo {
    completed: boolean,
    id: number,
    title: string,
    userId: number,
}

export default new APIClient<Todo>('/todos')