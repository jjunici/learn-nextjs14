import { Suspense } from 'react';
import MovieVideos from '../../../../components/movie-videos';
import MoviewInfo, { getMovie } from '../../../../components/movie-info';

interface IParams {
  params: { id: string };
}
export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MoviewInfo id={id} />
      </Suspense>
      <Suspense fallback={<h6>Loading movie Videos</h6>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
