{
  "jsonSchema": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "type": {
        "type": "string"
      },
      "data": {
        "type": "object",
        "properties": {
          "object": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "amount": {
                "type": "integer"
              },
              "currency": {
                "type": "string"
              }
            }
          }
        }
      }
    }
  },
  "typeScriptInterface": "export interface StripeChargeSucceeded {\n  id: string;\n  type: string;\n  data: {\n    object: {\n      id: string;\n      amount: number;\n      currency: string;\n    }\n  }\n}",
  "zodSchema": "export const stripeChargeSchema = z.object({\n  id: z.string(),\n  type: z.literal('charge.succeeded'),\n  data: z.object({\n    object: z.object({\n      id: z.string(),\n      amount: z.number().int(),\n      currency: z.string()\n    })\n  })\n})",
  "insights": [
    "Identified currency parameter as ISO standard string.",
    "Mapped nested charge metadata block as optional fields."
  ]
}