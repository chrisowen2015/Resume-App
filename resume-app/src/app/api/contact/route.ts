import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
 
type ResponseData = {
  message: string
}
/*
export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    console.log(req.body);
    res.status(200).json({ message: 'Contact form submitted successfully'});
}
*/

export async function POST(req: Request) {
    console.log(req.body);

    return NextResponse.json({ message: 'Hello from the server!'});
}