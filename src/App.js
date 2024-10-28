import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Home from './Pages/home/Home';
import Contact from './Pages/contact/Contact';
import Skills from './Pages/skills/Skills';
import Header from './Components/Header/Header';
import NotFound from './Pages/notFound/NotFound';
function App() {
  return (
    <div className="App w-[96%] max-h-[90%] mx-auto py-8">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
