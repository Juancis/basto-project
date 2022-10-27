import request from "supertest";
import app from "../index";

xdescribe("GET /animals/1", () => {
  test("should respond with an array", async () => {
    const { body } = await request(app).get("/animals/1").send();
    await expect(body.data).toBeInstanceOf(Array);
  });
});

xdescribe("GET /animal", () => {
  test("should return an empty array", async () => {
    const someRandomId = "randomId";
    const { body } = await request(app).get(`/animal/${someRandomId}`).send();
    await expect(body.data).toStrictEqual([]);
  });
});

xdescribe("POST /animals", () => {
  test("should return an array with array items ", async () => {
    const array = [
      "ID_SENASA",
      "type",
      "animal_weight",
      "potrero_name",
      "dispositive_type",
      "dispositive_number",
    ];
    const obj = {
      ID_SENASA: "TESTEXAMPLE456F4",
      type: "novillo",
      animal_weight: 34,
      potrero_name: "Mario",
      dispositive_type: "collar",
      dispositive_number: "CFG203M1",
    };
    const { body } = await request(app).post("/animal").send(obj);
    await expect(Object.keys(body)).toEqual(expect.arrayContaining(array));
  });
});

xdescribe("Delete /animal", () => {
  test("should return the string Deleted", async () => {
    const id = "6359d9a241aed0fae88a5898";
    const { body } = await request(app).delete(`/animal/${id}`).send();
    await expect(body).toBe("Deleted");
  });
});

xdescribe("Delete /animal", () => {
  test("should return error msg", async () => {
    const randomId = "6359e64a9d462bb2f6864856";
    const response = await request(app).delete(`/animal/${randomId}`).send();
    await expect(response.statusCode).toBe(404);
  });
});

xdescribe("POST /animals", () => {
  test("should return a 404 code because ID_SENASA length", async () => {
    const obj = {
      ID_SENASA: "WrongExample",
      type: "novillo",
      animal_weight: 34,
      potrero_name: "Mario",
      dispositive_type: "collar",
      dispositive_number: "CFG203M1",
    };
    const response = await request(app).post("/animal").send(obj);
    await expect(response.statusCode).toBe(404);
  });
});

xdescribe("PUT /animals", () => {
  test("should return the modify object", async () => {
    const id = "6359b6ffaacf4ff2c1666951";
    const update = { animal_weight: 37 };
    const { body } = await request(app).put(`/animal/${id}`).send(update);
    await expect(body.animal_weight).toBe(37);
  });
});
