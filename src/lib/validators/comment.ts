import { z } from "zod";

export const CommentValidator = z.object({
  postId: z.string(),
  text: z
    .string()
    .trim()
    .min(1, { message: "Coloque ao menos 1 caracter" })
    .max(128, { message: "Máximo de caracteres atingidos: 128" }),
  replyToId: z.string().optional(),
});

export type CommentRequest = z.infer<typeof CommentValidator>;
