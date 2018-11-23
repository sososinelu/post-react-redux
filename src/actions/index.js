import axios from 'axios';
import { ADD_POST, DELETE_POST, FETCH_POST } from './types';

const apiUrl = 'http://localhost:4000/posts';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7Il9pZCI6IjViZTMwOTcyMjVlNmNiM2M0MTM4NmMzNSJ9LCJzZXNzaW9uX2lkIjoiQ0lZVnhMQXNieTFrbUowWGswOGZ0SjA1UHQzbU9GN2RPMjN1Y0tFbiJ9.WnzOPQ3QdcM-XXhwrue6i7OkNxTkzg0n3y7tlBUsTkk';

export const createPost = ({ title, body }) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/add`, {title,body})
        .then(response => {
            dispatch(createPostSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const createPostSuccess = (data) => {
    return {
        type: ADD_POST,
        payload: {
            _id: data._id,
            title: data.title,
            body: data.body
        }
    }
};

export const deletePostSuccess = id => {
  return {
    type: DELETE_POST,
    payload: {
      id
    }
  }
};

export const deletePost = id => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/delete/${id}`)
      .then(response => {
        dispatch(deletePostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchPosts = (posts) => {
  return {
    type: FETCH_POST,
    posts
  }
};

export const fetchAllPosts = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        console.log(response.data);
        dispatch(fetchPosts(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};