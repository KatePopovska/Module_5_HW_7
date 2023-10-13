import apiClient from '../client'

export const regist = ({ email, password }: { email: string, password: string }) => apiClient({
    path: `register`,
    method: 'post',
    data: { email, password }
})