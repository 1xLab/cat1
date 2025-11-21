import { describe, expect, it } from "vitest";
import { contactSchema, resultsSchema } from "./validators";

describe("contactSchema", () => {
  it("accepts valid payload", () => {
    const payload = {
      name: "Maria Toxicologia",
      company: "JMBio",
      email: "maria@jmbio.com.br",
      phone: "(11) 99999-0000",
      message: "Precisamos de monitoramento ocupacional.",
    };
    expect(() => contactSchema.parse(payload)).not.toThrow();
  });

  it("rejects invalid payload", () => {
    const payload = {
      name: "A",
      email: "invalid",
      phone: "123",
      message: "short",
    };
    const result = contactSchema.safeParse(payload);
    expect(result.success).toBe(false);
  });
});

describe("resultsSchema", () => {
  it("rejects short protocol", () => {
    const result = resultsSchema.safeParse({
      document: "123456",
      protocol: "12",
    });
    expect(result.success).toBe(false);
  });
});
