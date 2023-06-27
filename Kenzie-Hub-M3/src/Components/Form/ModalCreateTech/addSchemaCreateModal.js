import { z } from "zod"

export const addSchemaCreateModal = z.object({
    title: z.string().nonempty("Informe o nome da tecnologia."),
    status: z.string()
})