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
    },
    login (formData) {
        return instance.post('auth/login', {
            ...formData
        }).then(response => response.data)
    },
    logout () {
        return instance.delete('auth/login').then(response => response.data)
    }
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getStatus (userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },
    updateStatus (status) {
        return instance.put(`profile/status`, {
            status: status
        }).then(response => response.data)
    },
    uploadPhoto (file) {
        let formData = new FormData();
        formData.append("image", file);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then(response => response.data)
    }
}