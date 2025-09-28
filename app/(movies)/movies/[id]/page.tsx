import { Suspense } from 'react';
import MovieVideos from '../../../../components/movie-videos';
import MoviewInfo from '../../../../components/movie-info';

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <h3>Movie Detail Page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MoviewInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie Videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
