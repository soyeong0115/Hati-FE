import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/home/HomePage.tsx';
import Test from '@/pages/test/TestPage.tsx';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/test' element={<Test />} />
    </Routes>
  );
}
