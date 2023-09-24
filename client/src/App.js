import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import BrowseRecipes from './components/BrowseRecipes'
import SingleRecipe from './components/SingleRecipe'
import Blog from './components/Blog'
import SingleBlog from './components/SingleBlog'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
<<<<<<< HEAD
import RecipeForm from './components/RecipeForm'
import Profile from './components/Profile'
=======
import Filter from './components/Filter.js'
import Featured from './components/FeaturedRecipes'
>>>>>>> 80a3042 (featured 1/2 done)

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
<<<<<<< HEAD
=======
        <Route path= '/recipes/type/:type' element={<Filter/>} />
        <Route path="*" element={<NotFound />} />
>>>>>>> 80a3042 (featured 1/2 done)
        <Route path='/blogs/:id' element={<SingleBlog />} />
<<<<<<< HEAD
=======
        <Route path="*" element={<NotFound />} />
>>>>>>> d9b791f (page not found)
=======
        <Route path='/recipes/create' element={<RecipeForm />} />
<<<<<<< HEAD
>>>>>>> 3203e08 (added form)
=======
        <Route path='/user/:addedBy' element={<Profile />} />
>>>>>>> 6aa22af (profile with errors importing isAuthenticated)
      </Routes>
      {/* Show Footer on all pages */}
      <Footer />
    </BrowserRouter>
  )
}
