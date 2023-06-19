import { z } from "zod"

export const addSchemaLogin = z.object({
    email: z.string()
        .nonempty("O e-mail é obrigatório")
        .email("O e-mail fornecido é inválido"),
    password: z.string()
        .nonempty("Senha incorreta")
})