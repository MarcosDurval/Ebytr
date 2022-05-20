import { z } from 'zod';

const isValidTask = async (body:IcreateTask) => {
  const schemaTask = z.object({
    task: z.string().min(5),
  });
  await schemaTask.parseAsync(body);
};

export default isValidTask;
