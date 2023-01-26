import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Counter } from './features/count/Counter';
import { PostsList } from './features/posts/PostsList';
import { Main } from './pages/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/count" element={<Counter />} />
        <Route path="/posts-list" element={<PostsList />} />
      </Routes>
    </Router>
  );
}

export default App;
