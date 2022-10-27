import {
  deleteAnimalValidator,
  getAnimalByIDValidator,
  getAnimalValidator,
  postAnimalValidator,
  updateAnimalValidator,
} from "../validators/index.js";

export const getAnimal = async (req, res) => {
  try {
    const animal = await getAnimalByIDValidator(req.params.id);
    return res.status(201).json(animal);
  } catch (e) {
    return res.status(404).json({ error_msg_getAnimal: e.message });
  }
};

export const getAnimals = async (req, res) => {
  try {
    const animals = await getAnimalValidator(req.params.page);
    return res.status(200).json(animals);
  } catch (e) {
    return res.status(404).json({ error_msg_getAnimals: e.message });
  }
};

export const updateAnimal = async (req, res) => {
  try {
    const animal = await updateAnimalValidator(req.params.id, req.body);
    return res.status(200).json(animal);
  } catch (e) {
    return res.status(404).json({ error_msg_updateAnimal: e.message });
  }
};

export const postAnimal = async (req, res) => {
  try {
    const animal = await postAnimalValidator(req.body);
    return res.status(201).json(animal);
  } catch (e) {
    return res.status(404).json({ error_msg_postAnimal: e.message });
  }
};

export const deleteAnimal = async (req, res) => {
  try {
    const animal = await deleteAnimalValidator(req.params.id);
    return res.status(201).json(animal);
  } catch (e) {
    return res.status(404).json({ error_msg_deleteAnimal: e.message });
  }
};
