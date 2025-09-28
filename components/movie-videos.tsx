// import { API_URL } from '../app/(home)/page';
async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
