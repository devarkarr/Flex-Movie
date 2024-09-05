import { z } from "zod";

export function ApiResponseObject<DataSchema extends z.ZodTypeAny>(
  dataSchema: DataSchema
) {
  return z.object({
    page: z.number(),
    results: dataSchema,
    total_pages: z.number(),
    total_results: z.number(),
  });
}
