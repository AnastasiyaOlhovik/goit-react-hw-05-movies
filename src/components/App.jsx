import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Cast } from '../components/Cast/Cast';
import { Review } from '../components/Review/Review';
import { SharedLayout } from '../components/SharedLayout/SharedLayout'

const NotFound = lazy(() => import('../pages/NotFound'));
const Searchbar = lazy(() => import('../pages/Searchbar'));
const MovieView = lazy(() => import('../pages/MovieView'));
const Home = lazy(() => import('../pages/Home'));


export const App = () => {
  return (
    <div>
      <Suspense fallback={<h2>Loading ...</h2>}>
        <Routes>
          <Route path="/" end element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Searchbar />} />
            <Route path="movies/:movieId" element={<MovieView />} >
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Review />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};