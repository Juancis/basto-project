export const inputValidator = (input) => {
  const patternIdSenasa = /^([a-zA-Z0-9_-]){16}$/;
  const patternDispositiveNumber = /^([a-zA-Z0-9_-]){8}$/;

  if (!patternIdSenasa.test(input.ID_SENASA)) {
    return "El campo Id SENASA debe tener 16 carácteres alfanuméricos.";
  }
  if (input.type.length <= 0 || input.type === "Seleccione una opción") {
    return "Debes seleccionar una opción en el Tipo Animal.";
  }
  if (input.animal_weight > 99999) {
    return "El campo Peso está fuera del rango habilitado.";
  }
  if (input.potrero_name.length === 0) {
    return "El campo Nombre del Potrero no puede estar vacio.";
  }
  if (
    input.dispositive_type.length === 0 ||
    input.dispositive_number === "Seleccione una opción"
  ) {
    return "Debes seleccionar una opción en el Tipo de dispositivo.";
  }
  if (!patternDispositiveNumber.test(input.dispositive_number)) {
    return "El campo Número de dispositivo debe tener 8 cáracteres alfanuméricos.";
  }

  return "OK";
};
