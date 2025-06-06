import { NextApiRequest } from 'next';
// This file defines the Request interface for Next.js API routes, extending NextApiRequest with a method property.

export interface Request extends Partial<NextApiRequest> {
    method: string;
}