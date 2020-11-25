import { NextApiRequest, NextApiResponse } from "next";


export default function(req: NextApiRequest, res: NextApiResponse) {
    res.json({ random: Math.floor(Math.random() * 100) })
}