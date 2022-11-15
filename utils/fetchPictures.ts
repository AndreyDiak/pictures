export const fetchPictures = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPictures`);
  const data = await res.json();
  const pictures: Picture[] = data.pictures;

  return pictures;
}