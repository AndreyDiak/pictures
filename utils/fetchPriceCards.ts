export const fetchPriceCards = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPriceCards`);
  const data = await res.json();
  const priceCards: PriceCard[] = data.priceCards;

  return priceCards;
}