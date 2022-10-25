import UseStateHooks from "./components/use-state/UseStateHooks"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import UseEffect from "./components/use-effect/UseEffect";
import UseReducer from './components/use-reducer/UseReducer'
import UseRef from './components/use-ref/UseRef'
import Home from "./Home";
import Dashboard from "./components/use-context/Dashboard";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="state/*" element={<UseStateHooks />} />
          <Route path="reducer/*" element={<UseReducer />} />
          <Route path="ref/*" element={<UseRef />} />
          <Route path='dashboard/*' element={<Dashboard />} />
          <Route path='effect/*' element={<UseEffect />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
