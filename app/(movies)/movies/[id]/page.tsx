import { Suspense } from 'react';
import MovieVideos from '../../../../components/movie-videos';
import MoviewInfo from '../../../../components/movie-info';

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
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
