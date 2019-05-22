import fetch from 'isomorphic-fetch';
import * as myConfig from '../config'

export const GET_DATA_PENDING = 'GET_DATA_PENDING';
export const GET_DATA_FULFILLED = 'GET_DATA_FULFILLED';
export const GET_DATA_REJECTED = 'GET_DATA_REJECTED';



export function getData() {
    return {
        type: 'GET_DATA',
        payload: {
            promise: fetch(myConfig.BACKEND_VIDEO_URL)
                .then(response => response.json())
        }
    };
}

export function addTodo(text) {
    return {
      type: 'ADD_TODO',
      text
    }
  }




