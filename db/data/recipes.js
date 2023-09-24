export default [
  {
    title: 'Sushi',
<<<<<<< HEAD
    image: 'sushi.png',
<<<<<<< HEAD
<<<<<<< HEAD
=======
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694790480/flavour-finder/sushi_dhqk4c.jpg',
>>>>>>> dc79d1b (Merged everything and added sushi image)
    cuisine: 'Japanese',
    ingredients: [{ ingredient: 'Rice', amount: '300 grams' }, { ingredient: 'fish', amount: '225 grams' }, { ingredient: 'seaweed', amount: '25 grams' }, { ingredient: 'vegetables', amount: '500 grams' }],
=======
    cuisine: 'Japan',
=======
    cuisine: 'Japanese',
>>>>>>> 4fdddf3 (Changed 'Japan' to 'Japanese' in the Sushi cuisine field)
    ingredients: [
      { ingredient: 'Rice', amount: '300 grams' },
      { ingredient: 'fish', amount: '225 grams' },
      { ingredient: 'seaweed', amount: '25 grams' },
      { ingredient: 'vegetables', amount: '500 grams' }
    ],
>>>>>>> f0d25e4 (Added search icon and modified positioning)
    cookingTime: { hours: 0, minutes: 15 },
    type: 'main',
    serves: 4,
    method: ['Roll ingredients in seaweed.', 'Slice and serve.']
  },
  {
    title: 'Caprese Salad',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694794140/flavour-finder/caprese-salad_azhifp.jpg',
    cuisine: 'Italian',
    ingredients: [
      { ingredient: 'Tomatoes', amount: '4 medium' },
      { ingredient: 'Mozzarella', amount: '200 grams' },
      { ingredient: 'Basil leaves', amount: '10-12' },
      { ingredient: 'Olive oil', amount: '2 tablespoons' },
      { ingredient: 'Balsamic glaze', amount: '1 tablespoon' },
      { ingredient: 'Salt', amount: 'to taste' },
      { ingredient: 'Black pepper', amount: 'to taste' }
    ],
    cookingTime: { hours: 0, minutes: 10 },
    type: 'starter',
    serves: 4,
    method: [
      'Slice the tomatoes and mozzarella into 1/4-inch thick slices.',
      'Arrange tomato and mozzarella slices on a platter, alternating and overlapping them.',
      'Place a basil leaf between each of the tomato and mozzarella slices.',
      'Drizzle olive oil and balsamic glaze over the arrangement.',
      'Season with salt and black pepper to taste.',
      'Serve immediately.'
    ]
  },
  {
    title: 'Chocolate Avocado Pudding',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694794142/flavour-finder/chocolate-avocado-pudding_dawnva.jpg',
    cuisine: 'American',
    ingredients: [
      { ingredient: 'Avocado', amount: '2 medium' },
      { ingredient: 'Cocoa powder', amount: '1/4 cup' },
      { ingredient: 'Almond milk', amount: '1/2 cup' },
      { ingredient: 'Maple syrup', amount: '3 tablespoons' },
      { ingredient: 'Vanilla extract', amount: '1 teaspoon' }
    ],
    cookingTime: { hours: 0, minutes: 10 },
    type: 'dessert',
    serves: 4,
    method: [
      'Scoop the avocado flesh into a blender.',
      'Add cocoa powder, almond milk, maple syrup, and vanilla extract.',
      'Blend until smooth.',
      'Chill in the fridge for at least 1 hour before serving.'
    ]
  },
  {
    title: 'Guacamole',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694794153/flavour-finder/gucamole_msiwiy.jpg',
    cuisine: 'Mexican',
    ingredients: [
      { ingredient: 'Avocado', amount: '3 medium' },
      { ingredient: 'Onion', amount: '1 small' },
      { ingredient: 'Tomato', amount: '1 medium' },
      { ingredient: 'Lime juice', amount: '2 tablespoons' },
      { ingredient: 'Salt', amount: 'to taste' },
      { ingredient: 'Cilantro', amount: '1/4 cup' }
    ],
    cookingTime: { hours: 0, minutes: 15 },
    type: 'starter',
    serves: 4,
    method: ['Mash avocados.', 'Chop onion and tomato.', 'Mix all ingredients.', 'Season with salt.']
  },
  {
    title: 'Spicy Chickpea Curry',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694794159/flavour-finder/spicy-chickpea-curry_bgbbkp.jpg',
    cuisine: 'Indian',
    ingredients: [
      { ingredient: 'Chickpeas', amount: '1 can' },
      { ingredient: 'Coconut milk', amount: '1 can' },
      { ingredient: 'Onion', amount: '1 medium' },
      { ingredient: 'Garlic', amount: '2 cloves' },
      { ingredient: 'Curry powder', amount: '2 tablespoons' }
    ],
    cookingTime: { hours: 0, minutes: 30 },
    type: 'main',
    serves: 4,
    method: [
      'Sauté onions and garlic.',
      'Add chickpeas and spices.',
      'Pour in coconut milk.',
      'Simmer until thickened.'
    ],
    spiceLevel: 3
  },
  {
    title: 'Grilled Chicken Caesar Salad',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694794151/flavour-finder/grilled-chicken-caesar-salad_qi7ti0.jpg',
    cuisine: 'American',
    ingredients: [
      { ingredient: 'Chicken breast', amount: '2 pieces' },
      { ingredient: 'Romaine lettuce', amount: '1 head' },
      { ingredient: 'Parmesan cheese', amount: '1/2 cup' },
      { ingredient: 'Caesar dressing', amount: '1/4 cup' }
    ],
    cookingTime: { hours: 0, minutes: 20 },
    type: 'main',
    serves: 2,
    method: ['Grill chicken.', 'Chop lettuce.', 'Toss with dressing and cheese.', 'Top with sliced chicken.']
  },
  {
    title: 'Stir-fry Tofu and Vegetables',
<<<<<<< HEAD
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694794161/flavour-finder/stir-fry-tofu-and-vegetables_xtgyiv.jpg',
=======
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694787588/flavour-finder/tofu-stir-fry_crsths.jpg',
>>>>>>> d51fe31 (image urls added)
    cuisine: 'Asian',
    ingredients: [
      { ingredient: 'Tofu', amount: '300 grams' },
      { ingredient: 'Mixed vegetables', amount: '2 cups' },
      { ingredient: 'Soy sauce', amount: '3 tablespoons' },
      { ingredient: 'Garlic', amount: '2 cloves' }
    ],
    cookingTime: { hours: 0, minutes: 20 },
    type: 'main',
    serves: 4,
    method: [
      'Stir-fry tofu until browned.',
      'Add vegetables and garlic.',
      'Pour soy sauce.',
      'Cook until vegetables are tender.'
    ]
  },
  {
    title: 'Fish Tacos',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694794147/flavour-finder/fish-tacos_vtfjre.jpg',
    cuisine: 'Mexican',
    ingredients: [
      { ingredient: 'Fish fillets', amount: '2 pieces' },
      { ingredient: 'Tortillas', amount: '8 small' },
      { ingredient: 'Cabbage', amount: '1 cup' },
      { ingredient: 'Cream sauce', amount: '1/4 cup' },
      { ingredient: 'Lime', amount: '1' }
    ],
    cookingTime: { hours: 0, minutes: 20 },
    type: 'main',
    serves: 4,
    method: ['Grill fish.', 'Assemble tacos with cabbage.', 'Drizzle with cream sauce.', 'Serve with lime wedges.']
  },
  {
    title: 'Spaghetti Carbonara',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694794157/flavour-finder/spaghetti-carbonara_atxqrp.jpg',
    cuisine: 'Italian',
    ingredients: [
      { ingredient: 'Spaghetti', amount: '300 grams' },
      { ingredient: 'Egg yolks', amount: '3' },
      { ingredient: 'Parmesan cheese', amount: '1 cup' },
      { ingredient: 'Pancetta', amount: '150 grams' }
    ],
    cookingTime: { hours: 0, minutes: 20 },
    type: 'main',
    serves: 4,
    method: ['Cook spaghetti.', 'Fry pancetta.', 'Mix egg yolks and cheese.', 'Combine all and serve.']
  },
  {
    title: 'Apple Crumble',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694794140/flavour-finder/apple-crumble_skoir4.jpg',
    cuisine: 'British',
    ingredients: [
      { ingredient: 'Apples', amount: '4' },
      { ingredient: 'Sugar', amount: '1/2 cup' },
      { ingredient: 'Oats', amount: '1 cup' },
      { ingredient: 'Butter', amount: '1/2 cup' }
    ],
    cookingTime: { hours: 0, minutes: 45 },
    type: 'dessert',
    serves: 4,
    method: ['Slice apples.', 'Mix with sugar.', 'Top with oats and butter.', 'Bake until golden.']
  },
  {
    title: 'Churros',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694794144/flavour-finder/churros_dvurqe.jpg',
    cuisine: 'Spanish',
    ingredients: [
      { ingredient: 'Flour', amount: '1 cup' },
      { ingredient: 'Water', amount: '1 cup' },
      { ingredient: 'Sugar', amount: '2 tablespoons' },
      { ingredient: 'Cinnamon', amount: '1 teaspoon' }
    ],
    cookingTime: { hours: 0, minutes: 30 },
    type: 'dessert',
    serves: 4,
    method: ['Make dough.', 'Pipe into hot oil.', 'Fry until golden.', 'Roll in sugar and cinnamon.']
  },
  {
    title: 'Spicy Mango Salsa',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694794160/flavour-finder/spicy-mango-salsa_c2tib0.jpg',
    cuisine: 'Mexican',
    ingredients: [
      { ingredient: 'Mango', amount: '2 medium' },
      { ingredient: 'Red onion', amount: '1 small' },
      { ingredient: 'Jalapeño', amount: '1' },
      { ingredient: 'Cilantro', amount: '1/2 cup' },
      { ingredient: 'Lime juice', amount: '2 tablespoons' },
      { ingredient: 'Salt', amount: 'to taste' }
    ],
    cookingTime: { hours: 0, minutes: 15 },
    type: 'starter',
    serves: 4,
    method: [
      'Peel and dice the mangoes.',
      'Finely chop the red onion, jalapeño, and cilantro.',
      'In a bowl, mix together all the chopped ingredients.',
      'Add lime juice and salt to taste.',
      'Stir well and let sit for at least 10 minutes to meld flavors.',
      'Serve with tortilla chips or as a topping for grilled chicken or fish.'
    ],
    spiceLevel: 2
  },
  {
    title: 'Cucumber Gazpacho',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694794146/flavour-finder/cucumber-gazpacho_kaqpve.jpg',
    cuisine: 'Spanish',
    ingredients: [
      { ingredient: 'Cucumber', amount: '2 large' },
      { ingredient: 'Garlic', amount: '1 clove' },
      { ingredient: 'Greek yogurt', amount: '1 cup' },
      { ingredient: 'Olive oil', amount: '2 tablespoons' },
      { ingredient: 'Salt', amount: 'to taste' },
      { ingredient: 'Black pepper', amount: 'to taste' }
    ],
    cookingTime: { hours: 0, minutes: 20 },
    type: 'starter',
    serves: 4,
    method: [
      'Peel and roughly chop the cucumbers.',
      'In a blender, combine cucumber, garlic, Greek yogurt, and olive oil.',
      'Blend until smooth.',
      'Season with salt and black pepper to taste.',
      'Chill in the fridge for at least 1 hour before serving.',
      'Serve cold.'
    ]
  },
  {
    title: 'Beef Stir-Fry',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694794137/flavour-finder/beef-stir-fry_jpqpzm.jpg',
    cuisine: 'Asian',
    ingredients: [
      { ingredient: 'Beef strips', amount: '400 grams' },
      { ingredient: 'Bell peppers', amount: '2' },
      { ingredient: 'Onion', amount: '1 large' },
      { ingredient: 'Soy sauce', amount: '3 tablespoons' },
      { ingredient: 'Garlic', amount: '3 cloves' },
      { ingredient: 'Olive oil', amount: '2 tablespoons' }
    ],
    cookingTime: { hours: 0, minutes: 20 },
    type: 'main',
    serves: 4,
    method: [
      'Thinly slice the bell peppers and onion.',
      'Mince the garlic.',
      'Heat olive oil in a pan over medium-high heat.',
      'Add garlic and sauté for a minute.',
      'Add beef strips and cook until browned.',
      'Add sliced bell peppers and onion, stir-fry until softened.',
      'Add soy sauce and mix well.',
      'Serve over rice or noodles.'
    ]
  },
  {
    title: 'Chicken Alfredo Pasta',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694794137/flavour-finder/chicken-alfredo-pasta_oqhedj.jpg',
    cuisine: 'Italian',
    ingredients: [
      { ingredient: 'Pasta', amount: '400 grams' },
      { ingredient: 'Chicken breasts', amount: '2' },
      { ingredient: 'Heavy cream', amount: '1 cup' },
      { ingredient: 'Parmesan cheese', amount: '1/2 cup' },
      { ingredient: 'Garlic', amount: '2 cloves' },
      { ingredient: 'Olive oil', amount: '2 tablespoons' },
      { ingredient: 'Salt', amount: 'to taste' },
      { ingredient: 'Black pepper', amount: 'to taste' }
    ],
    cookingTime: { hours: 0, minutes: 30 },
    type: 'main',
    serves: 4,
    method: [
      'Boil pasta according to package instructions.',
      'Season chicken breasts with salt and pepper.',
      'In a pan, heat olive oil and cook chicken until done. Remove and set aside.',
      'In the same pan, add minced garlic and sauté.',
      'Add heavy cream and bring to a simmer.',
      'Add parmesan cheese and stir until sauce thickens.',
      'Slice cooked chicken and add to the sauce.',
      'Add cooked pasta to the pan and mix well.',
      'Serve hot.'
    ]
  },
  {
    title: 'Garlic Bread',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694794150/flavour-finder/garlic-bread_hz3m9v.jpg',
    cuisine: 'Italian',
    ingredients: [
      { ingredient: 'Baguette', amount: '1' },
      { ingredient: 'Butter', amount: '1/2 cup' },
      { ingredient: 'Garlic', amount: '4 cloves' },
      { ingredient: 'Parsley', amount: '2 tablespoons' },
      { ingredient: 'Salt', amount: 'to taste' }
    ],
    cookingTime: { hours: 0, minutes: 15 },
    type: 'side',
    serves: 4,
    method: [
      'Preheat the oven to 375°F (190°C).',
      'Mince garlic and finely chop parsley.',
      'In a bowl, mix softened butter, minced garlic, chopped parsley, and salt.',
      'Slice the baguette into 1-inch pieces but do not cut all the way through.',
      'Spread the garlic butter mixture between the slices.',
      'Wrap the baguette in aluminum foil and bake for 10 minutes.',
      'Open the foil and bake for another 5 minutes to crisp the top.',
      'Serve hot.'
    ]
  },
  {
    title: 'Roasted Sweet Potatoes',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694794154/flavour-finder/roasted-sweet-potatoes_abxrdx.jpg',
    cuisine: 'American',
    ingredients: [
      { ingredient: 'Sweet potatoes', amount: '4 medium' },
      { ingredient: 'Olive oil', amount: '3 tablespoons' },
      { ingredient: 'Salt', amount: 'to taste' },
      { ingredient: 'Black pepper', amount: 'to taste' },
      { ingredient: 'Paprika', amount: '1 teaspoon' }
    ],
    cookingTime: { hours: 0, minutes: 45 },
    type: 'side',
    serves: 4,
    method: [
      'Preheat oven to 400°F (200°C).',
      'Peel and cube the sweet potatoes.',
      'In a bowl, mix olive oil, salt, black pepper, and paprika.',
      'Toss sweet potatoes in the mixture.',
      'Spread on a baking sheet and roast for 35-40 minutes or until tender.',
      'Serve hot.'
    ]
  },
  {
    title: 'Chocolate Brownies',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694794143/flavour-finder/chocolate-brownies_pvog6l.jpg',
    cuisine: 'American',
    ingredients: [
      { ingredient: 'Butter', amount: '1/2 cup' },
      { ingredient: 'Sugar', amount: '1 cup' },
      { ingredient: 'Eggs', amount: '2' },
      { ingredient: 'Vanilla extract', amount: '1 teaspoon' },
      { ingredient: 'Cocoa powder', amount: '1/3 cup' },
      { ingredient: 'All-purpose flour', amount: '1/2 cup' },
      { ingredient: 'Salt', amount: '1/4 teaspoon' }
    ],
    cookingTime: { hours: 0, minutes: 40 },
    type: 'dessert',
    serves: 9,
    method: [
      'Preheat oven to 350°F (175°C).',
      'Grease a 9x9-inch baking pan.',
      'Melt butter in a microwave-safe bowl.',
      'Mix in sugar, eggs, and vanilla extract.',
      'Add cocoa powder, flour, and salt.',
      'Mix until well combined.',
      'Pour into prepared pan.',
      'Bake for 20-25 minutes or until a toothpick comes out slightly sticky.',
      'Let cool before cutting into squares.',
      'Serve.'
    ]
  },
  {
    title: 'Fruit Salad',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694794148/flavour-finder/fruit-salad_bn2l2q.jpg',
    cuisine: 'International',
    ingredients: [
      { ingredient: 'Apple', amount: '1' },
      { ingredient: 'Banana', amount: '1' },
      { ingredient: 'Orange', amount: '1' },
      { ingredient: 'Grapes', amount: '1 cup' },
      { ingredient: 'Kiwi', amount: '1' },
      { ingredient: 'Honey', amount: '2 tablespoons' }
    ],
    cookingTime: { hours: 0, minutes: 15 },
    type: 'dessert',
    serves: 4,
    method: [
      'Chop apple, banana, orange, grapes, and kiwi into bite-sized pieces.',
      'Combine all the fruits in a bowl.',
      'Drizzle honey over the fruit.',
      'Mix well.',
      'Chill for at least 30 minutes before serving.',
      'Serve cold.'
    ]
  },
  {
    title: 'Shrimp Cocktail',
<<<<<<< HEAD
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694794155/flavour-finder/shrimp-cocktail_fkvcme.jpg',
=======
    image: '',
>>>>>>> d51fe31 (image urls added)
    cuisine: 'American',
    ingredients: [
      { ingredient: 'Shrimp', amount: '1 pound' },
      { ingredient: 'Lemon slices', amount: '2' },
      { ingredient: 'Cocktail sauce', amount: '1 cup' }
    ],
    cookingTime: { hours: 0, minutes: 15 },
    type: 'starter',
    serves: 4,
    method: [
      'Boil water in a large pot, add lemon slices.',
      'Add shrimp and cook until pink, about 3-5 minutes.',
      'Remove shrimp and chill in the refrigerator.',
      'Serve chilled shrimp with cocktail sauce.'
    ]
  },
  {
    title: 'Stuffed Mushrooms',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694794162/flavour-finder/stuffed-mushrooms_qbmykg.jpg',
    cuisine: 'Italian',
    ingredients: [
      { ingredient: 'Mushroom caps', amount: '20' },
      { ingredient: 'Cream cheese', amount: '1/2 cup' },
      { ingredient: 'Garlic', amount: '2 cloves' },
      { ingredient: 'Parsley', amount: '2 tablespoons' },
      { ingredient: 'Salt', amount: 'to taste' },
      { ingredient: 'Black pepper', amount: 'to taste' }
    ],
    cookingTime: { hours: 0, minutes: 25 },
    type: 'starter',
    serves: 4,
    method: [
      'Preheat oven to 350°F (175°C).',
      'Remove stems from mushroom caps.',
      'In a bowl, mix cream cheese, minced garlic, and chopped parsley.',
      'Season with salt and black pepper.',
      'Stuff the mushroom caps with the mixture.',
      'Bake for 20 minutes or until mushrooms are tender.',
      'Serve hot.'
    ]
  },
  {
    title: 'Paneer Tikka',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694787582/flavour-finder/paneer-tikka_xj2uuj.jpg',
    cuisine: 'Indian',
    ingredients: [
      { ingredient: 'Paneer', amount: '400 grams' },
      { ingredient: 'Yogurt', amount: '1 cup' },
      { ingredient: 'Red chili powder', amount: '1 teaspoon' },
      { ingredient: 'Turmeric', amount: '1/2 teaspoon' },
      { ingredient: 'Garam masala', amount: '1 teaspoon' },
      { ingredient: 'Salt', amount: 'to taste' },
      { ingredient: 'Lemon juice', amount: '1 tablespoon' }
    ],
    cookingTime: { hours: 0, minutes: 40 },
    type: 'main',
    serves: 4,
    method: [
      'Cut paneer into cubes.',
      'In a bowl, mix yogurt, red chili powder, turmeric, garam masala, salt, and lemon juice.',
      'Marinate paneer cubes in the mixture for at least 30 minutes.',
      'Preheat grill or oven to medium-high.',
      'Thread paneer onto skewers.',
      'Grill for 8-10 minutes or until golden.',
      'Serve hot with mint chutney.'
    ],
    spiceLevel: 2
  },
  {
    title: 'Vegan Stir-Fried Tofu',
    image: 'vegan_stir_fried_tofu.png',
    cuisine: 'Asian',
    ingredients: [
      { ingredient: 'Tofu', amount: '400 grams' },
      { ingredient: 'Broccoli', amount: '2 cups' },
      { ingredient: 'Carrots', amount: '1 cup' },
      { ingredient: 'Soy sauce', amount: '3 tablespoons' },
      { ingredient: 'Garlic', amount: '2 cloves' },
      { ingredient: 'Olive oil', amount: '2 tablespoons' },
      { ingredient: 'Sesame seeds', amount: '1 tablespoon' }
    ],
    cookingTime: { hours: 0, minutes: 30 },
    type: 'main',
    serves: 4,
    method: [
      'Drain and cube the tofu.',
      'Steam broccoli and carrots until tender.',
      'In a pan, heat olive oil over medium-high heat.',
      'Add minced garlic and sauté for a minute.',
      'Add tofu cubes and cook until golden.',
      'Add steamed vegetables and soy sauce, stir well.',
      'Garnish with sesame seeds.',
      'Serve hot.'
    ]
  },
  {
    title: 'Quinoa Salad',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694787579/flavour-finder/quinoa-salad_u1szof.jpg',
    cuisine: 'Mediterranean',
    ingredients: [
      { ingredient: 'Quinoa', amount: '1 cup' },
      { ingredient: 'Cucumber', amount: '1' },
      { ingredient: 'Cherry tomatoes', amount: '1 cup' },
      { ingredient: 'Olive oil', amount: '2 tablespoons' },
      { ingredient: 'Lemon juice', amount: '1 tablespoon' },
      { ingredient: 'Salt', amount: 'to taste' },
      { ingredient: 'Black pepper', amount: 'to taste' }
    ],
    cookingTime: { hours: 0, minutes: 25 },
    type: 'side',
    serves: 4,
    method: [
      'Cook quinoa according to package instructions.',
      'Dice cucumber and halve cherry tomatoes.',
      'In a large bowl, mix cooked quinoa, cucumber, and cherry tomatoes.',
      'In a separate bowl, whisk together olive oil, lemon juice, salt, and pepper.',
      'Pour the dressing over the quinoa mixture and mix well.',
      'Serve cold or at room temperature.'
    ]
  },
  {
    title: 'Mashed Potatoes',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694787578/flavour-finder/mashed-potatoes_fkbq0d.jpg',
    cuisine: 'American',
    ingredients: [
      { ingredient: 'Potatoes', amount: '4 large' },
      { ingredient: 'Butter', amount: '1/2 cup' },
      { ingredient: 'Milk', amount: '1/4 cup' },
      { ingredient: 'Salt', amount: 'to taste' },
      { ingredient: 'Black pepper', amount: 'to taste' }
    ],
    cookingTime: { hours: 0, minutes: 30 },
    type: 'side',
    serves: 4,
    method: [
      'Peel and cube the potatoes.',
      'Boil potatoes until tender.',
      'Drain and return to the pot.',
      'Mash the potatoes.',
      'Add butter, milk, salt, and black pepper.',
      'Mix until smooth.',
      'Serve hot.'
    ]
  },
  {
    title: 'Vegan Tacos',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694787589/flavour-finder/vegan-tacos_gilub8.jpg',
    cuisine: 'Mexican',
    ingredients: [
      { ingredient: 'Corn tortillas', amount: '8' },
      { ingredient: 'Black beans', amount: '1 can' },
      { ingredient: 'Avocado', amount: '1' },
      { ingredient: 'Tomato', amount: '1' },
      { ingredient: 'Red onion', amount: '1' },
      { ingredient: 'Cilantro', amount: '1 bunch' },
      { ingredient: 'Lime', amount: '1' },
      { ingredient: 'Salt', amount: 'to taste' }
    ],
    cookingTime: { hours: 0, minutes: 20 },
    type: 'main',
    serves: 4,
    method: [
      'Warm tortillas in a pan or oven.',
      'Mash avocado and mix with diced tomato, chopped red onion, and cilantro.',
      'Add lime juice and salt to taste.',
      'Heat black beans in a pan.',
      'Assemble tacos with a layer of black beans followed by the avocado mixture.',
      'Serve immediately.'
    ]
  },
  {
    title: 'Quinoa Stuffed Peppers',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694787580/flavour-finder/quinoa-stuffed-peppers_ypjrad.jpg',
    cuisine: 'American',
    ingredients: [
      { ingredient: 'Bell peppers', amount: '4' },
      { ingredient: 'Quinoa', amount: '1 cup' },
      { ingredient: 'Black beans', amount: '1 can' },
      { ingredient: 'Corn', amount: '1 cup' },
      { ingredient: 'Cheese', amount: '1 cup' },
      { ingredient: 'Olive oil', amount: '1 tablespoon' },
      { ingredient: 'Salt', amount: 'to taste' },
      { ingredient: 'Black pepper', amount: 'to taste' }
    ],
    cookingTime: { hours: 0, minutes: 45 },
    type: 'main',
    serves: 4,
    method: [
      'Preheat oven to 350°F (175°C).',
      'Cook quinoa according to package instructions.',
      'Cut the tops off the bell peppers and remove seeds.',
      'In a bowl, mix quinoa, black beans, corn, and half of the cheese.',
      'Season with salt and pepper.',
      'Stuff the bell peppers with the quinoa mixture.',
      'Place stuffed peppers in a baking dish.',
      'Top with remaining cheese.',
      'Bake for 25-30 minutes or until peppers are tender.',
      'Serve hot.'
    ]
  },
  {
    title: 'Chicken Marsala',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694787573/flavour-finder/chicken-marsala_r8smbw.jpg',
    cuisine: 'Italian',
    ingredients: [
      { ingredient: 'Chicken breasts', amount: '4' },
      { ingredient: 'Marsala wine', amount: '1 cup' },
      { ingredient: 'Mushrooms', amount: '1 cup' },
      { ingredient: 'Chicken stock', amount: '1/2 cup' },
      { ingredient: 'Olive oil', amount: '2 tablespoons' },
      { ingredient: 'Butter', amount: '1 tablespoon' },
      { ingredient: 'Salt', amount: 'to taste' },
      { ingredient: 'Black pepper', amount: 'to taste' }
    ],
    cookingTime: { hours: 0, minutes: 30 },
    type: 'main',
    serves: 4,
    method: [
      'Season chicken with salt and pepper.',
      'In a pan, heat olive oil and cook chicken until done.',
      'Remove chicken and set aside.',
      'In the same pan, sauté mushrooms.',
      'Add Marsala wine and chicken stock.',
      'Reduce heat and simmer until the sauce thickens.',
      'Add chicken back into the pan.',
      'Stir in butter to finish the sauce.',
      'Serve hot over pasta or rice.'
    ]
  },
  {
    title: 'Lamb Curry',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694787575/flavour-finder/lamb-curry_qel0c8.jpg',
    cuisine: 'Indian',
    ingredients: [
      { ingredient: 'Lamb', amount: '500 grams' },
      { ingredient: 'Onion', amount: '1' },
      { ingredient: 'Garlic', amount: '3 cloves' },
      { ingredient: 'Ginger', amount: '1 inch' },
      { ingredient: 'Tomatoes', amount: '2' },
      { ingredient: 'Garam masala', amount: '1 teaspoon' },
      { ingredient: 'Turmeric', amount: '1/2 teaspoon' },
      { ingredient: 'Cumin', amount: '1 teaspoon' },
      { ingredient: 'Coriander', amount: '1 teaspoon' },
      { ingredient: 'Coconut milk', amount: '1 cup' },
      { ingredient: 'Salt', amount: 'to taste' }
    ],
    cookingTime: { hours: 1, minutes: 0 },
    type: 'main',
    serves: 4,
    method: [
      'Marinate lamb with salt, turmeric, and cumin.',
      'In a pot, sauté chopped onion, garlic, and ginger.',
      'Add marinated lamb and brown on all sides.',
      'Add chopped tomatoes, garam masala, and coriander.',
      'Cover and cook until lamb is tender.',
      'Stir in coconut milk and simmer for 10 minutes.',
      'Serve hot with rice or naan.'
    ],
    spiceLevel: 3
  },
  {
    title: 'Shrimp Paella',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694787584/flavour-finder/shrimp-paella_ciddr0.jpg',
    cuisine: 'Spanish',
    ingredients: [
      { ingredient: 'Rice', amount: '1 cup' },
      { ingredient: 'Shrimp', amount: '500 grams' },
      { ingredient: 'Chicken stock', amount: '2 cups' },
      { ingredient: 'Saffron', amount: '1 pinch' },
      { ingredient: 'Bell peppers', amount: '1' },
      { ingredient: 'Peas', amount: '1 cup' },
      { ingredient: 'Olive oil', amount: '2 tablespoons' },
      { ingredient: 'Salt', amount: 'to taste' },
      { ingredient: 'Paprika', amount: '1 teaspoon' }
    ],
    cookingTime: { hours: 1, minutes: 0 },
    type: 'main',
    serves: 4,
    method: [
      'Heat olive oil in a paella pan.',
      'Add rice and cook until translucent.',
      'Add bell peppers and peas.',
      'Season with paprika and salt.',
      'Add saffron to the chicken stock and pour over the rice.',
      'Arrange shrimp on top.',
      'Cook until rice is done and shrimp are pink.',
      'Serve hot.'
    ]
  },
  {
    title: 'Pulled Pork Sandwich',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694787583/flavour-finder/pulled-pork-sandwich_u6hi4i.jpg',
    cuisine: 'American',
    ingredients: [
      { ingredient: 'Pork shoulder', amount: '1 kg' },
      { ingredient: 'Barbecue sauce', amount: '1 cup' },
      { ingredient: 'Buns', amount: '4' },
      { ingredient: 'Salt', amount: 'to taste' },
      { ingredient: 'Black pepper', amount: 'to taste' }
    ],
    cookingTime: { hours: 4, minutes: 0 },
    type: 'main',
    serves: 4,
    method: [
      'Preheat oven to 300°F (150°C).',
      'Season pork with salt and pepper.',
      'Wrap pork in aluminum foil and bake for 4 hours.',
      'Remove from oven and shred the meat.',
      'Mix shredded pork with barbecue sauce.',
      'Serve on buns.'
    ]
  },
  {
    title: 'Vegetable Stir-Fry',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694787590/flavour-finder/vegetable-stir-fry_dyiaob.jpg',
    cuisine: 'Asian',
    ingredients: [
      { ingredient: 'Mixed vegetables', amount: '4 cups' },
      { ingredient: 'Soy sauce', amount: '3 tablespoons' },
      { ingredient: 'Garlic', amount: '2 cloves' },
      { ingredient: 'Ginger', amount: '1 inch' },
      { ingredient: 'Olive oil', amount: '2 tablespoons' },
      { ingredient: 'Tofu (optional)', amount: '1 cup' }
    ],
    cookingTime: { hours: 0, minutes: 20 },
    type: 'main',
    serves: 4,
    method: [
      'Heat olive oil in a pan.',
      'Add minced garlic and grated ginger.',
      'Add mixed vegetables and tofu if using.',
      'Stir-fry until vegetables are cooked.',
      'Add soy sauce and mix well.',
      'Serve hot with rice or noodles.'
    ]
  },
  {
    title: 'Lentil Soup',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694787576/flavour-finder/lentil-soup_cyfrsy.jpg',
    cuisine: 'Mediterranean',
    ingredients: [
      { ingredient: 'Lentils', amount: '1 cup' },
      { ingredient: 'Onion', amount: '1' },
      { ingredient: 'Carrot', amount: '1' },
      { ingredient: 'Garlic', amount: '2 cloves' },
      { ingredient: 'Vegetable stock', amount: '4 cups' },
      { ingredient: 'Olive oil', amount: '2 tablespoons' },
      { ingredient: 'Salt', amount: 'to taste' },
      { ingredient: 'Black pepper', amount: 'to taste' }
    ],
    cookingTime: { hours: 1, minutes: 0 },
    type: 'main',
    serves: 4,
    method: [
      'Heat olive oil in a pot.',
      'Sauté chopped onion, carrot, and garlic.',
      'Add lentils and vegetable stock.',
      'Simmer until lentils are tender.',
      'Season with salt and pepper.',
      'Serve hot.'
    ]
  },
  {
    title: 'Chicken Fajitas',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694787571/flavour-finder/chicken-fajitas_euzbwl.jpg',
    cuisine: 'Mexican',
    ingredients: [
      { ingredient: 'Chicken breast', amount: '500 grams' },
      { ingredient: 'Bell peppers', amount: '2' },
      { ingredient: 'Onion', amount: '1' },
      { ingredient: 'Tortillas', amount: '4' },
      { ingredient: 'Cumin', amount: '1 teaspoon' },
      { ingredient: 'Paprika', amount: '1 teaspoon' },
      { ingredient: 'Olive oil', amount: '2 tablespoons' },
      { ingredient: 'Salt', amount: 'to taste' },
      { ingredient: 'Black pepper', amount: 'to taste' }
    ],
    cookingTime: { hours: 0, minutes: 30 },
    type: 'main',
    serves: 4,
    method: [
      'Slice chicken, bell peppers, and onion.',
      'In a bowl, mix cumin, paprika, salt, and pepper.',
      'Toss chicken in the spice mixture.',
      'Heat olive oil in a pan.',
      'Cook chicken until done.',
      'In the same pan, sauté bell peppers and onion.',
      'Serve in tortillas.'
    ],
    spiceLevel: 2
  },
  {
    title: 'Greek Moussaka',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694787574/flavour-finder/greek-moussaka_wvicnt.jpg',
    cuisine: 'Greek',
    ingredients: [
      { ingredient: 'Eggplant', amount: '2' },
      { ingredient: 'Ground lamb', amount: '500 grams' },
      { ingredient: 'Tomato sauce', amount: '1 cup' },
      { ingredient: 'Onions', amount: '2' },
      { ingredient: 'Garlic cloves', amount: '3' },
      { ingredient: 'Bechamel sauce', amount: '2 cups' },
      { ingredient: 'Olive oil', amount: '2 tablespoons' },
      { ingredient: 'Salt', amount: 'to taste' },
      { ingredient: 'Pepper', amount: 'to taste' }
    ],
    cookingTime: { hours: 1, minutes: 30 },
    type: 'main',
    serves: 6,
    method: [
      'Slice and salt eggplants. Let sit for 30 minutes, then rinse.',
      'In a pan, sauté onions and garlic in olive oil.',
      'Add ground lamb and cook until brown.',
      'Stir in tomato sauce, salt, and pepper.',
      'Layer eggplant and meat sauce in a baking dish.',
      'Top with bechamel sauce.',
      'Bake at 350°F (175°C) for 45 minutes.',
      'Serve hot.'
    ]
  },
  {
    title: 'Steak Diane',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694787585/flavour-finder/steak-diane_smlvfq.jpg',
    cuisine: 'European',
    ingredients: [
      { ingredient: 'Beef fillets', amount: '4' },
      { ingredient: 'Shallots', amount: '2' },
      { ingredient: 'Garlic', amount: '1 clove' },
      { ingredient: 'Brandy', amount: '1/4 cup' },
      { ingredient: 'Beef stock', amount: '1 cup' },
      { ingredient: 'Heavy cream', amount: '1/2 cup' },
      { ingredient: 'Mustard', amount: '1 tablespoon' },
      { ingredient: 'Worcestershire sauce', amount: '1 tablespoon' },
      { ingredient: 'Butter', amount: '2 tablespoons' },
      { ingredient: 'Salt', amount: 'to taste' },
      { ingredient: 'Pepper', amount: 'to taste' }
    ],
    cookingTime: { hours: 0, minutes: 30 },
    type: 'main',
    serves: 4,
    method: [
      'Season beef fillets with salt and pepper.',
      'In a skillet, melt butter and cook steaks to your liking.',
      'Remove steaks and set aside.',
      'In the same skillet, sauté shallots and garlic.',
      'Deglaze pan with brandy.',
      'Add beef stock, cream, mustard, and Worcestershire sauce.',
      'Simmer until sauce thickens.',
      'Return steaks to the pan to warm through.',
      'Serve hot.'
    ]
  },
  {
    title: 'Szechuan Chicken',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694787586/flavour-finder/szechuan-chicken_bxw72r.jpg',
    cuisine: 'Chinese',
    ingredients: [
      { ingredient: 'Chicken', amount: '500 grams' },
      { ingredient: 'Soy sauce', amount: '2 tablespoons' },
      { ingredient: 'Szechuan peppercorns', amount: '1 tablespoon' },
      { ingredient: 'Garlic', amount: '2 cloves' },
      { ingredient: 'Green onions', amount: '2' },
      { ingredient: 'Sesame oil', amount: '1 tablespoon' },
      { ingredient: 'Red chilies', amount: '2' }
    ],
    cookingTime: { hours: 0, minutes: 20 },
    type: 'main',
    serves: 4,
    method: [
      'Cut chicken into bite-sized pieces.',
      'Marinate chicken in soy sauce and set aside.',
      'Heat a wok with sesame oil.',
      'Add Szechuan peppercorns and chilies, and sauté.',
      'Add minced garlic and chicken to the wok.',
      'Stir-fry until chicken is cooked.',
      'Add chopped green onions.',
      'Serve hot with steamed rice.'
    ],
    spiceLevel: 3
  },
  {
    title: 'Butter Chicken',
    image: 'https://res.cloudinary.com/dlcb7n93a/image/upload/v1694787571/flavour-finder/butter-chicken_thrfdw.jpg',
    cuisine: 'Indian',
    ingredients: [
      { ingredient: 'Chicken', amount: '500 grams' },
      { ingredient: 'Butter', amount: '1/4 cup' },
      { ingredient: 'Tomato sauce', amount: '1 cup' },
      { ingredient: 'Cream', amount: '1/2 cup' },
      { ingredient: 'Ginger garlic paste', amount: '1 tablespoon' },
      { ingredient: 'Garam masala', amount: '1 teaspoon' },
      { ingredient: 'Red chili powder', amount: '1 teaspoon' },
      { ingredient: 'Salt', amount: 'to taste' }
    ],
    cookingTime: { hours: 0, minutes: 30 },
    type: 'main',
    serves: 4,
    method: [
      'Marinate chicken in ginger garlic paste, salt, and red chili powder.',
      'In a pan, melt butter and add the marinated chicken.',
      'Cook until chicken is done.',
      'Add tomato sauce and simmer.',
      'Stir in cream and garam masala.',
      'Cook until sauce thickens.',
      'Serve hot with naan or rice.'
    ],
    spiceLevel: 2
  }
]
