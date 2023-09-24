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
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { isAuthenticated, getToken } from '../utils/auth.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'



export default function Profile() {

  const userId = isAuthenticated()
  const [usersRecipes, setUsersRecipes] = useState([])
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ea88f2e (profile working, temp hard coded user)
=======
  console.log(userId)
>>>>>>> ac954f1 (changes)
=======
  const { id } = useParams()
  const navigate = useNavigate()
>>>>>>> 0d71b74 (delete draft)

  useEffect(() => {
    async function getRecipesByUser() {
      try {
<<<<<<< HEAD
        // const { data } = await axios.get(`/user/${userId}`)
        const { data } = await axios.get(`/api/user/${userId}`)
=======
        const { data } = await axios.get(`/api/user/${userId}`)
<<<<<<< HEAD
        // const { data } = await axios.get('/api/user/650c2cfbde13d1a3da109eff')
>>>>>>> 1a38f65 (Updated dropdown links and added Create Recipe to login)
=======
>>>>>>> 0fc5342 (changes)
        setUsersRecipes(data)
        console.log(userId)
        console.log(data)
      } catch (error) {
        console.log(error.message)
      }
    }
    getRecipesByUser()
  }, [])

<<<<<<< HEAD
<<<<<<< HEAD
=======
  async function handleDelete(id){
=======
  async function handleDelete(recipeId){
>>>>>>> 220c538 (delete working)
    try {
      console.log('delete is broken')
      await axios.delete(`/api/recipes/${recipeId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      navigate('/user/:addedBy')
    } catch (error) {
      console.log('delete is defo broken')
      console.log(error)
    }
  }
>>>>>>> 0d71b74 (delete draft)

  return (
    <main className='user-profile'>
      <h1>Welcome back!</h1>
<<<<<<< HEAD
      <h2>My recipes</h2>
<<<<<<< HEAD
      <Link to={`/user/${addedBy}/create`}>
=======
      <Link className='create-link' to={`/user/${userId}/create`}>
<<<<<<< HEAD
>>>>>>> ab51bf9 (Added update recipe icon link functionality and added styling to icons)
        Create New Recipe
=======
        Create Recipe
>>>>>>> 4c4bf21 (Final)
      </Link>
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> 1a38f65 (Updated dropdown links and added Create Recipe to login)
      <h2>Recipes you added:</h2>
=======
>>>>>>> 0d71b74 (delete draft)
      <section className='grid-container'>
        {usersRecipes.map((recipe) => (
          <Link key={recipe._id} to={`/recipes/${recipe._id}`} className='recipe'>
            <div
              className='recipe-container'
              style={{
                backgroundImage: `url(${recipe.image})`,
              }}
            >
              <div className="edit-buttons">
                <Link to={`/user/${recipe.addedBy}/${recipe._id}`}>
                  <div className='icon-container'>
                    <FontAwesomeIcon className='update' icon={faPen} />
                  </div>
                </Link>
                <div className='icon-container delete-icon'>
                  <FontAwesomeIcon onClick={() => handleDelete(recipe._id)} icon={faTrash} />
                </div>
              </div>
              <div className='recipe-title'>
                <p>{recipe.title}</p>
              </div>
<<<<<<< HEAD
>>>>>>> ea88f2e (profile working, temp hard coded user)
=======
>>>>>>> 1a38f65 (Updated dropdown links and added Create Recipe to login)
            </div>

          </Link>
        ))}
      </section>
    </main>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> 1a38f65 (Updated dropdown links and added Create Recipe to login)
=======
}
>>>>>>> 0d71b74 (delete draft)
