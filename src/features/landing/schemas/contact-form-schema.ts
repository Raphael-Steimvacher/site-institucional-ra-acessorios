import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Informe seu nome."),
  phone: z.string().min(8, "Informe um telefone válido."),
  service: z.enum(["sacada", "fachada", "box", "guardacorpo", "outro"]),
  message: z.string().max(500, "Use até 500 caracteres.").optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
