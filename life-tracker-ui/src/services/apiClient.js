import axios from "axios";

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl;
    this.token = null;
    this.tokenName = "lifetracker_token";
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem(this.tokenName, token);
  }

  async request({ endpoint, method = `GET`, data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
      Authorization: this.token ? `Bearer ${this.token}` : "",
    };

    try {
      const res = await axios({ url, method, data, headers });
      return { data: res.data, error: null };
    } catch (error) {
      console.error("APIclient.makeRequest.error:");
      console.error({ errorResponse: error.response });
      const message = error?.response?.data?.error?.message;
      return { data: null, error: message || String(error) };
    }
  }
  //we gonna need create an api call for activites, listexercises, create exercises

  //   async createRatingForPost({ postId, rating }) {
  //     return await this.request({ endpoint: `posts/${postId}/ratings`, method: `POST`, data: { rating } })
  //   }

  //   async updatePost({ postId, postUpdate }) {
  //     return await this.request({ endpoint: `posts/${postId}`, method: `PATCH`, data: postUpdate })
  //   }

  //   async fetchPostById(postId) {
  //     return await this.request({ endpoint: `posts/${postId}`, method: `GET` })
  //   }

  //   async listPosts() {
  //     return await this.request({ endpoint: `posts`, method: `GET` })
  //   }

  //   async createPost(post) {
  //     return await this.request({ endpoint: `posts`, method: `POST`, data: post })
  //   }

  //user calls
  async fetchUserFromToken() {
    return await this.request({ endpoint: `auth/me`, method: `GET` });
  }

  async signupUser(credentials) {
    return await this.request({
      endpoint: `auth/register`,
      method: `POST`,
      data: credentials,
    });
  }

  async loginUser(credentials) {
    return await this.request({
      endpoint: `auth/login`,
      method: `POST`,
      data: credentials,
    });
  }

  async logoutUser() {
    this.setToken(null);
    localStorage.setItem(this.tokenName, "");
  }
  //exercise and activity calls
  async createExercise(exercise) {
    return await this.request({
      endpoint: `exercise/create`,
      method: `POST`,
      data: exercise,
    });
  }
  async exerciseList() {
    return await this.request({ endpoint: `exercise`, method: `GET` });
  }
  async activity() {
    return await this.request({ endpoint: `activity`, method: `GET` });
  }
}

const API = new ApiClient(
  process.env.REACT_APP_REMOTE_HOST_URL || "http://localhost:3001"
);

export default API;
