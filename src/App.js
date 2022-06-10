import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./Home'));
const Dashboard = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Order = lazy(() => import('./Order'));
const Footer = lazy(() => import('./Footer'));
const App = () => (
<Router>
 <Suspense fallback={<div>Loading...</div>}>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/Dashboard" element={<Dashboard />} />
 <Route path="/About" element={<About />} />
 <Route path="/Order" element={<Order />} />
 <Route path="/Footer" element={<Footer />} />
 </Routes>
 </Suspense>
</Router>
);
export default App;