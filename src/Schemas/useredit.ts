import { z } from "zod";

export const userEditAccountSchema = z.object({
  firstName: z.string({
    invalid_type_error: "Confira seu nome...",
    required_error: "Confira seu nome!",
  }),
  role: z.union(
    [
      z.literal("administrador"),
      z.literal("financeiro"),
      z.literal("operador"),
      z.literal("empresa"),
    ],
    {
      required_error: "Confira seu cargo!",
      invalid_type_error: "Opa, confira seu cargo!",
    }
  ),
  phone: z
    .number({
      invalid_type_error: "Apenas numeros para o telefone...",
      required_error: "Confira o numero de telefone...",
    })
    .min(1)
    .max(99999999),
});
