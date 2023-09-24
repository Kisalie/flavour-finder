<<<<<<< HEAD
import mongoose from 'mongoose'
=======
import mongoose from 'mongoose' 
>>>>>>> 2b63c61 (blogs api complete)
import 'dotenv/config'

// Model
import Recipe from '../models/recipe.js'
import User from '../models/user.js'
<<<<<<< HEAD

// Data
import recipeData from './data/recipes.js'
import userData from './data/users.js'

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING)
    console.log('🥙 Database connection established')

    const { deletedCount: usersDeleted } = await User.deleteMany()
    console.log(`❌ Deleted ${usersDeleted} users`)

    const { deletedCount: recipeDeleted } = await Recipe.deleteMany()
    console.log(`❌ Deleted ${recipeDeleted} recipes`)

    const usersAdded = await User.create(userData)
    console.log(`➕ added ${usersAdded.length} user`)
=======
import Blog from '../models/blog.js'

// Data
import recipeData from './data/recipes.js' 
import userData from './data/users.js'
import blogData from './data/blogs.js'






const seedDatabase = async () => {
  try {

    await mongoose.connect(process.env.CONNECTION_STRING)
    console.log('🥙 Database connection established')


    const { deletedCount: usersDeleted } = await User.deleteMany()
    console.log(`❌👩‍🦰 Deleted ${usersDeleted} users`)


    const { deletedCount: recipeDeleted } = await Recipe.deleteMany()
    console.log(`❌🥘 Deleted ${recipeDeleted} recipes`)

    const { deletedCount: blogsDeleted } = await Blog.deleteMany()
    console.log(`❌🥘 Deleted ${blogsDeleted} blogs`)


    const usersAdded = await User.create(userData)
    console.log(`👩‍🦰 added ${usersAdded.length} users`)

    const blogsAdded = await Blog.create(blogData)
    console.log(`📖 added ${blogsAdded.length} blogs`)


>>>>>>> 2b63c61 (blogs api complete)

    const recipeWithAddedBy = recipeData.map(recipe => {
      const randomUserId = Math.floor(Math.random() * usersAdded.length)
      return { ...recipe, addedBy: usersAdded[randomUserId]._id }
    })

    const recipeAdded = await Recipe.create(recipeWithAddedBy)
<<<<<<< HEAD
    console.log(`🥘 ${recipeAdded.length} recipe added to the recipe collection`)

=======
    console.log(`🥘 added ${recipeAdded.length} recipes`)



>>>>>>> 2b63c61 (blogs api complete)
    await mongoose.connection.close()
    console.log('👋 connection closed')
  } catch (error) {
    console.log(error)
    await mongoose.connection.close()
    console.log('👋 connection closed')
  }
}
<<<<<<< HEAD
seedDatabase()
=======
seedDatabase()
>>>>>>> 2b63c61 (blogs api complete)
