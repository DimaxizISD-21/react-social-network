import axios from "axios";

export default class SocialAPI {
  #axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
      'API-KEY': 'eaa5af4c-0da2-4afe-b571-23b20aa4bfaf'
    }
  })

  getUserProfile = (userID) => {
    return this.#axiosInstance.get(`profile/${userID}`)
      .then(response => response.data);
  }

  getUsers = (currentPage = 1, pageSize = 10) => {
    return this.#axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  }

  getAuthMe = () => {
    return this.#axiosInstance.get(`auth/me`)
      .then(response => response.data);
  }

  followUser = (userID) => {
    return this.#axiosInstance.post(`follow/${userID}`);
  }

  unfollowUser = (userID) => {
    return this.#axiosInstance.delete(`follow/${userID}`);
  }
}