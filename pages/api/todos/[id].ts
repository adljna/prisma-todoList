import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      const deleted = await prisma.todo.delete({
        where: { id: Number(id) },
      });

      return res.status(200).json(deleted);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to delete' });
    }
  }

  if (req.method === 'PATCH') {
    try {
      const updated = await prisma.todo.update({
        where: { id: Number(id) },
        data: {
          completed: true,
        },
      });

      return res.status(200).json(updated);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to update' });
    }
  }

  return res.status(405).end();
}