import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'eaa5af4c-0da2-4afe-b571-23b20aa4bfaf'
  }
})

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data);
};

export const getAuthMe = () => {
  return axiosInstance.get(`auth/me`)
    .then(response => response.data);
};

export const followUser = (userID) => {
  return axiosInstance.post(`follow/${userID}`);
};

export const unfollowUser = (userID) => {
  return axiosInstance.delete(`follow/${userID}`);
};