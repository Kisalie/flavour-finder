import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import BrowseRecipes from './components/BrowseRecipes'
import SingleRecipe from './components/SingleRecipe'
import Blog from './components/Blog'
import SingleBlog from './components/SingleBlog'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import RecipeForm from './components/RecipeForm'

export default function App() {
  return (
    <BrowserRouter>
      {/* Show Header on all pages */}
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<BrowseRecipes />} />
        <Route path='/recipes/:id' element={<SingleRecipe />} />
        <Route path='/blogs' element={<Blog />} />
<<<<<<< HEAD
        <Route path='/blogs/:id' element={<SingleBlog />} />
<<<<<<< HEAD
=======
        <Route path="*" element={<NotFound />} />
>>>>>>> d9b791f (page not found)
=======
        <Route path='/recipes/create' element={<RecipeForm />} />
>>>>>>> 3203e08 (added form)
      </Routes>
      {/* Show Footer on all pages */}
      <Footer />
    </BrowserRouter>
  )
}
