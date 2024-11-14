import Home from './Pages/home/Home';
import Contact from './Pages/contact/Contact';
import Skills from './Pages/skills/Skills';
import NotFound from './Pages/notFound/NotFound';

let routes = [
    {path:"/"  , element: <Home />},
    {path:"/skills" ,  element:<Skills />},
    {path:"/contact" ,  element:<Contact />},
    {path:"/*" ,  element :<NotFound />},
]
export default routes