// import { API_URL } from '../app/(home)/page';
async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}`);
  return response.json();
}
export default async function MoviewInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
