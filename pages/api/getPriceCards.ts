import { sanityClient } from "./../../sanity";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
  *[_type=='priceCard']
`;

type Data = {
  priceCards: PriceCard[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const priceCards: PriceCard[] = await sanityClient.fetch(query);
  res.status(200).json({ priceCards });
}
