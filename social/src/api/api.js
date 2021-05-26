import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "c2a22318-a7af-4454-8310-6e9aed9fb5cd"
    },
    withCredentials: true
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 100) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}

export const followsAPI = {
    follow (userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unFollow (userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const authAPI = {
    authMe () {
        return instance.get('auth/me').then(response => response.data)
    }
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    }
}