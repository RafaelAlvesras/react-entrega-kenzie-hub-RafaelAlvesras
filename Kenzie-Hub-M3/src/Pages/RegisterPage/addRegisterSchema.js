import { z } from "zod"

export const addRegisterSchema = z.object({
    email: z.string()
        .nonempty("O e-mail é obrigatório")
        .email("O e-mail fornecido é inválido"),
    password: z.string()
        .nonempty("senha incorreta")
        .regex(/^(.{8,})$/, "A senha deve conter pelo menos 8 caracteres")
        .regex(/(?=.*[A-Z])/, "Pelo menos uma letra maiúscula")
        .regex(/(?=.*[a-z])/, "Pelo menos uma letra minúscula")
        .regex(/(?=.*\d)/, "Pelo menos um número")
        .regex(/(?=.*[!@#$%^&*()-=_+|;':",.<>?])/, "Pelo menos um caractere especial"),
    name: z.string()
        .nonempty("O nome é obrigatório"),
    bio: z.string()
        .nonempty("a bio é obrigatória"),
    contact: z.string()
        .nonempty("Contato é obrigatório"),
    course_module: z.string()
        .nonempty("O módulo é obrigatório"),
    confirm: z.string()
    .min(1, "A confirmação de senha é obrigatória")
}).refine(({password, confirm}) => password === confirm,
{
  message: "As senhas precisam corresponderem",
  path: ["confirm"]
})
