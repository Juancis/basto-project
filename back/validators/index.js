import Animal from "../models/index.js";

export const getAnimalValidator = async (page = 1, limit = 5) => {
  const count = await Animal.count();
  const data = await Animal.find()
    .limit(limit * 1)
    .skip((page - 1) * limit);

  return { meta: { page: Math.ceil(count / limit) }, data };
};

export const getAnimalByIDValidator = async (id) => {
  const data = await Animal.find({ ID_SENASA: id.toUpperCase() });
  return { meta: null, data };
};

export const updateAnimalValidator = async (id, update) => {
  return await Animal.findOneAndUpdate(
    { _id: id },
    { ...update, modification_date: new Date().toLocaleDateString() },
    {
      new: true,
    }
  );
};

export const postAnimalValidator = async (data) => {
  const {
    ID_SENASA,
    type,
    animal_weight,
    potrero_name,
    dispositive_type,
    dispositive_number,
  } = data;

  if (!ID_SENASA) {
    throw new Error("ID is required");
  }
  if (ID_SENASA.length !== 16) {
    throw new Error("Length ID must be 16");
  }
  if (!type) {
    throw new Error("Type is required");
  }
  if (!animal_weight) {
    throw new Error("Animal weight is required");
  }
  if (!potrero_name) {
    throw new Error("Potrero's name is required");
  }
  if (!dispositive_type) {
    throw new Error("Dispositive type is required");
  }
  if (!dispositive_number) {
    throw new Error("Dispositive number is required");
  }
  if (dispositive_number.length !== 8) {
    throw new Error("Length ID must be 8");
  }

  const newAnimal = new Animal({
    ID_SENASA,
    type,
    animal_weight,
    potrero_name,
    dispositive_type,
    dispositive_number,
  });
  await newAnimal.save();

  return newAnimal;
};

export const deleteAnimalValidator = async (id) => {
  const deleted = await Animal.deleteOne({ _id: id });
  if (deleted.deletedCount > 0) {
    return "Deleted";
  }
  return "Doesn't exists";
};
