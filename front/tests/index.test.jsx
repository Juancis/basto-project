import { describe, expect, it } from "vitest";
import { inputValidator } from "../src/utils/utils";

describe("inputValidator function", () => {
  it("returns El campo Id SENASA debe tener 16 carácteres alfanuméricos.", () => {
    let obj = {
      ID_SENASA: "PRUEBA123",
      //ID_SENASA: "COLLARF1ABC456FG",
    };
    expect(inputValidator(obj)).toBe(
      "El campo Id SENASA debe tener 16 carácteres alfanuméricos."
    );
  });
});
