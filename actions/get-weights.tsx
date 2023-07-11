import { Weight } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/weights`;

const getWeights = async (): Promise<Weight[]> => {
  const res = await fetch(URL);

  return res.json();
}

export default getWeights;