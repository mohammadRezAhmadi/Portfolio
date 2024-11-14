import React from 'react';
import { useRoutes } from 'react-router-dom';
import Header from './Components/Header/Header';
import routes from './routes'
function App() {

  let route = useRoutes(routes)

  return (
    <div className="App w-[96%] max-h-[90%] mx-auto py-8">
      <Header />
      {route}
    </div>
  );
}

export default App;
