import * as types from "./types";
import axios from "axios";
const URL = "http://localhost:3000";
import { toast } from "react-toastify";

export const createAnimal = (animal) => {
  return async function (dispatch) {
    try {
      dispatch({ type: types.LOADING });
      const { data } = await axios.post(`${URL}/animal`, animal);
      dispatch({ type: types.CREATE_ANIMAL, payload: data });
      return toast.success("Created!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateAnimal = (id, animal) => {
  return async function (dispatch) {
    try {
      dispatch({ type: types.LOADING });
      const { data } = await axios.put(`${URL}/animal/${id}`, animal);
      dispatch({ type: types.UPDATE_ANIMAL, payload: data });
      return toast.success("Updated!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteAnimal = (id) => {
  return async function (dispatch) {
    try {
      dispatch({ type: types.LOADING });
      const { data } = await axios.delete(`${URL}/animal/${id}`);
      dispatch({ type: types.DELETE_ANIMAL, payload: data });
      return toast.error("Deleted!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getAnimals = (page) => {
  return async function (dispatch) {
    try {
      dispatch({ type: types.LOADING });
      const { data } = await axios.get(`${URL}/animals/${page}`);
      return dispatch({ type: types.GET_ANIMALS, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getAnimal = (id) => {
  return async function (dispatch) {
    try {
      dispatch({ type: types.LOADING });
      const { data } = await axios.get(`${URL}/animal/${id}`);
      return dispatch({ type: types.GET_ANIMAL, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const clearAnimals = () => {
  return async function (dispatch) {
    try {
      dispatch({ type: types.CLEAR_ANIMALS });
    } catch (err) {
      console.log(err);
    }
  };
};
