import * as z from 'zod';

const orderSchema = z.object({
    name: z.string().min(1, { message: 'Required' }),
    vin: z.string().min(10),
  });
  export default orderSchema;