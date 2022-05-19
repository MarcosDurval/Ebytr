import { z } from 'zod';

const isValidTask = async (body:IcreateTask) => {
  const schemaTask = z.object({
    title: z.string().min(3),
    task: z.string().min(5),
    author: z.string().min(3),
  });
  await schemaTask.parseAsync(body);
};

export default isValidTask;
