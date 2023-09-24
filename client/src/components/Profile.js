<<<<<<< HEAD
// import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { isAuthenticated } from '../../utils/auth.js'
import { useParams } from 'react-router-dom'


export default function Profile() {
  const { addedBy } = useParams()
  // const userId = isAuthenticated()
  // const [usersRecipes, setUsersRecipes] = useState([])
=======
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { isAuthenticated } from '../utils/auth.js'

export default function Profile() {
  const userId = isAuthenticated()
  const [usersRecipes, setUsersRecipes] = useState([])
<<<<<<< HEAD
>>>>>>> ea88f2e (profile working, temp hard coded user)
=======
  console.log(userId)
>>>>>>> ac954f1 (changes)

  useEffect(() => {
    async function getRecipesByUser() {
      try {
        // const { data } = await axios.get(`/user/${userId}`)
        const { data } = await axios.get(`/api/user/${userId}`)
        setUsersRecipes(data)
        console.log(userId)
      } catch (error) {
        console.log(error.message)
      }
    }
    getRecipesByUser()
  }, []

  )



  return (
    <main className='user-profile'>
      <h1>Welcome back!</h1>
<<<<<<< HEAD
      <h2>My recipes</h2>
      <Link to={`/user/${addedBy}/create`}>
        Create New Recipe
      </Link>

      {/* {usersRecipes.map((recipe) => (
        <Link key={recipe._id} to={`/recipes/${recipe._id}`} className='recipe'>
          <div
            className='recipe-container'
            style={{
              backgroundImage: `url(${recipe.image})`,
            }}
          >
            <div className='recipe-title'>
              <p>{recipe.title}</p>
=======
      <h2>Recipes you added:</h2>
      <section className='grid-container'>
        {usersRecipes.map((recipe) => (
          <Link key={recipe._id} to={`/recipes/${recipe._id}`} className='recipe'>
            <div
              className='recipe-container'
              style={{
                backgroundImage: `url(${recipe.image})`,
              }}
            >
              <div className='recipe-title'>
                <p>{recipe.title}</p>
              </div>
>>>>>>> ea88f2e (profile working, temp hard coded user)
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}
