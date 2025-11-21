import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "Informe seu nome completo."),
  company: z.string().optional(),
  email: z.string().email("E-mail inválido."),
  phone: z.string().min(10, "Telefone inválido."),
  message: z.string().min(10, "Detalhe sua necessidade."),
});

export const resultsSchema = z.object({
  document: z.string().min(11, "Informe CPF ou CNPJ."),
  protocol: z.string().min(6, "Protocolo inválido."),
});
