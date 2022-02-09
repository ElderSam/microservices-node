const request = require("supertest");
const app = require("../../src/app");

describe("Users", () => {
	it("GET all users", async () => {
		const response = await request(app).get("/users");

		expect(response.status).toBe(200);
	});
});
