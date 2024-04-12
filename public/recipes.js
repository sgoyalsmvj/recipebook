const recipes = [
  {
    title: "Classic Caesar Salad",
    description:
      "A refreshing salad made with crisp romaine lettuce, crunchy croutons, tangy Caesar dressing, and grated Parmesan cheese.",
    image:
      "https://assets.bonappetit.com/photos/624215f8a76f02a99b29518f/1:1/w_1920,c_limit/0328-ceasar-salad-lede.jpg",
    ingredients: [
      { name: "Romaine lettuce", quantity: "1 head" },
      { name: "Croutons", quantity: "1 cup" },
      { name: "Caesar dressing", quantity: "1/2 cup" },
      { name: "Parmesan cheese", quantity: "1/2 cup" },
    ],
    cookingMethod: [
      "1. Wash and dry the romaine lettuce thoroughly.",
      "2. Tear the lettuce leaves into bite-sized pieces and place them in a large salad bowl.",
      "3. Add the croutons, Caesar dressing, and grated Parmesan cheese to the bowl.",
      "4. Toss everything together until the lettuce is evenly coated with the dressing and the other ingredients are well distributed.",
      "5. Serve immediately as a refreshing appetizer or side dish."
    ]
  },
  {
    title: "Chicken Alfredo Pasta",
    description:
      "Creamy Alfredo sauce tossed with tender chicken breast and fettuccine pasta, garnished with parsley and grated Parmesan cheese.",
    image:
      "https://www.recipetineats.com/wp-content/uploads/2017/03/One-Pot-Chicken-Alfredo-2.jpg?resize=900,1260",
    ingredients: [
      { name: "Fettuccine pasta", quantity: "250g" },
      { name: "Chicken breast", quantity: "2, boneless and skinless" },
      { name: "Heavy cream", quantity: "1 cup" },
      { name: "Garlic", quantity: "2 cloves, minced" },
      { name: "Butter", quantity: "2 tablespoons" },
      { name: "Parmesan cheese", quantity: "1/2 cup" },
    ],
    cookingMethod: [
      "1. Cook the fettuccine pasta according to the package instructions until al dente. Drain and set aside.",
      "2. Season the chicken breasts with salt and pepper.",
      "3. In a large skillet, melt the butter over medium heat. Add the minced garlic and cook until fragrant.",
      "4. Add the seasoned chicken breasts to the skillet and cook until golden brown on both sides and cooked through.",
      "5. Remove the chicken from the skillet and set aside. In the same skillet, pour in the heavy cream and bring to a simmer.",
      "6. Stir in the grated Parmesan cheese until melted and the sauce has thickened slightly.",
      "7. Slice the cooked chicken breasts and return them to the skillet, tossing to coat them in the Alfredo sauce.",
      "8. Add the cooked fettuccine pasta to the skillet and toss until evenly coated in the sauce.",
      "9. Garnish with chopped parsley and additional grated Parmesan cheese, if desired.",
      "10. Serve hot, and enjoy your creamy Chicken Alfredo Pasta!"
    ]
  },
  {
    title: "Vegetable Stir-Fry",
    description:
      "A colorful mix of fresh vegetables stir-fried in a savory sauce, served over steamed rice.",
    image:
      "  https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg",
    ingredients: [
      { name: "Broccoli florets", quantity: "1 cup" },
      { name: "Carrots", quantity: "2, sliced" },
      { name: "Bell peppers", quantity: "1 each, sliced" },
      { name: "Snap peas", quantity: "1 cup" },
      { name: "Soy sauce", quantity: "3 tablespoons" },
      { name: "Sesame oil", quantity: "1 tablespoon" },
      { name: "Garlic", quantity: "2 cloves, minced" },
      { name: "Ginger", quantity: "1 teaspoon, grated" },
      { name: "Cooked rice", quantity: "2 cups, for serving" },
    ],
    cookingMethod: [
      "1. Heat sesame oil in a large skillet or wok over medium-high heat.",
      "2. Add minced garlic and grated ginger to the skillet, and cook until fragrant.",
      "3. Add sliced carrots, bell peppers, broccoli florets, and snap peas to the skillet. Stir-fry for 4-5 minutes until vegetables are crisp-tender.",
      "4. Pour soy sauce over the vegetables and stir to combine. Cook for an additional 1-2 minutes.",
      "5. Remove the skillet from heat and serve the stir-fried vegetables over steamed rice.",
      "6. Garnish with sesame seeds or sliced green onions, if desired.",
      "7. Serve hot and enjoy your delicious Vegetable Stir-Fry!"
    ]
  },
  {
    title: "Homemade Margherita Pizza",
    description:
      "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil.",
    image:
      "https://ohsweetbasil.com/wp-content/uploads/how-to-make-authentic-margherita-pizza-at-home-recipe-4-1024x1536.jpg",
    ingredients: [
      { name: "Pizza dough", quantity: "1 ball" },
      { name: "Tomatoes", quantity: "2, thinly sliced" },
      { name: "Fresh mozzarella cheese", quantity: "200g, sliced" },
      { name: "Fresh basil leaves", quantity: "Handful" },
      { name: "Olive oil", quantity: "2 tablespoons" },
      { name: "Salt", quantity: "To taste" },
      { name: "Black pepper", quantity: "To taste" },
    ],
    cookingMethod: [
      "1. Preheat your oven to the highest temperature setting, usually around 475-500°F (245-260°C).",
      "2. Roll out the pizza dough on a floured surface to your desired thickness.",
      "3. Transfer the rolled-out dough to a baking sheet or pizza stone lined with parchment paper.",
      "4. Drizzle olive oil over the dough and spread it evenly with a pastry brush.",
      "5. Arrange the thinly sliced tomatoes evenly over the dough, leaving a small border around the edges.",
      "6. Tear the fresh mozzarella cheese into small pieces and distribute them evenly over the tomatoes.",
      "7. Season the pizza with salt and black pepper to taste.",
      "8. Slide the pizza into the preheated oven and bake for 10-12 minutes, or until the crust is golden brown and the cheese is melted and bubbly.",
      "9. Remove the pizza from the oven and immediately scatter fresh basil leaves over the top.",
      "10. Drizzle with additional olive oil, if desired, and serve hot.",
      "11. Slice and enjoy your Homemade Margherita Pizza!"
    ]
  },
  {
    title: "Beef Tacos",
    description:
      "Tender seasoned beef served in warm tortillas with shredded lettuce, diced tomatoes, grated cheese, and a dollop of sour cream.",
    image:
      "https://smartinthekitchen.com/wp-content/uploads/2020/04/Smart-In-The-Kitchen-Ground-Meat-Taco-Recipe-3-768x1154.jpg",
    ingredients: [
      { name: "Beef sirloin", quantity: "500g, thinly sliced" },
      { name: "Taco seasoning", quantity: "1 packet" },
      { name: "Tortillas", quantity: "8" },
      { name: "Lettuce", quantity: "1 cup, shredded" },
      { name: "Tomatoes", quantity: "2, diced" },
      { name: "Cheddar cheese", quantity: "1 cup, grated" },
      { name: "Sour cream", quantity: "1/2 cup" },
    ],
    cookingMethod: [
      "1. Heat a skillet over medium-high heat. Add thinly sliced beef sirloin to the skillet and cook until browned and cooked through, about 5-7 minutes.",
      "2. Sprinkle taco seasoning over the beef and stir to coat evenly. Cook for an additional 2-3 minutes.",
      "3. Warm the tortillas in a dry skillet or microwave according to package instructions.",
      "4. Assemble the tacos by placing a spoonful of seasoned beef in the center of each tortilla.",
      "5. Top with shredded lettuce, diced tomatoes, and grated cheddar cheese.",
      "6. Finish with a dollop of sour cream on each taco.",
      "7. Serve immediately, and enjoy your flavorful Beef Tacos!"
    ]
  },
  {
    title: "Caprese Salad",
    description:
      "A simple and elegant salad made with fresh tomatoes, mozzarella cheese, basil leaves, olive oil, and balsamic glaze.",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/7/18/0/WU0314H_caprese-salad-recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1530799895174.jpeg",
    ingredients: [
      { name: "Tomatoes", quantity: "2, sliced" },
      { name: "Fresh mozzarella cheese", quantity: "200g, sliced" },
      { name: "Fresh basil leaves", quantity: "Handful" },
      { name: "Olive oil", quantity: "2 tablespoons" },
      { name: "Balsamic glaze", quantity: "2 tablespoons" },
      { name: "Salt", quantity: "To taste" },
      { name: "Black pepper", quantity: "To taste" },
    ],
    cookingMethod: [
      "1. Arrange the sliced tomatoes and fresh mozzarella cheese on a serving platter, alternating between them.",
      "2. Tuck fresh basil leaves in between the tomato and cheese slices.",
      "3. Drizzle olive oil over the salad, followed by balsamic glaze.",
      "4. Season with salt and black pepper to taste.",
      "5. Serve immediately as a light and flavorful appetizer or side dish.",
      "6. Enjoy your simple yet elegant Caprese Salad!"
    ]
  },
  {
    title: "Shrimp Scampi",
    description:
      "Juicy shrimp sautéed in garlic butter and white wine sauce, served over a bed of linguine pasta.",
    image:
      "https://homemadehooplah.com/wp-content/uploads/2022/08/shrimp-scampi-linguine-1-768x1151.jpg",
    ingredients: [
      { name: "Linguine pasta", quantity: "250g" },
      { name: "Shrimp", quantity: "500g, peeled and deveined" },
      { name: "Butter", quantity: "4 tablespoons" },
      { name: "Garlic", quantity: "4 cloves, minced" },
      { name: "White wine", quantity: "1/2 cup" },
      { name: "Lemon juice", quantity: "2 tablespoons" },
      { name: "Parsley", quantity: "2 tablespoons, chopped" },
      { name: "Salt", quantity: "To taste" },
      { name: "Black pepper", quantity: "To taste" },
    ],
    cookingMethod: [
      "1. Cook the linguine pasta according to the package instructions until al dente. Drain and set aside.",
      "2. In a large skillet, melt butter over medium heat. Add minced garlic and cook until fragrant.",
      "3. Add peeled and deveined shrimp to the skillet and cook until pink and opaque, about 2-3 minutes per side.",
      "4. Remove the shrimp from the skillet and set aside.",
      "5. Deglaze the skillet with white wine, scraping up any browned bits from the bottom.",
      "6. Add lemon juice to the skillet and bring the sauce to a simmer.",
      "7. Return the cooked shrimp to the skillet and toss to coat in the sauce.",
      "8. Season with chopped parsley, salt, and black pepper to taste.",
      "9. Serve the shrimp scampi over the cooked linguine pasta.",
      "10. Garnish with additional chopped parsley and lemon wedges, if desired.",
      "11. Enjoy your delicious Shrimp Scampi!"
    ]
  },
  {
    title: "Beef Stir-Fry",
    description:
      "Tender slices of beef stir-fried with colorful vegetables in a savory sauce, served over steamed rice.",
    image:
      "https://playswellwithbutter.com/wp-content/uploads/2022/02/Beef-and-Vegetable-Stir-Fry-15.jpg",
    ingredients: [
      { name: "Beef sirloin", quantity: "500g, thinly sliced" },
      { name: "Broccoli florets", quantity: "1 cup" },
      { name: "Bell peppers", quantity: "1 each, sliced" },
      { name: "Carrots", quantity: "2, sliced" },
      { name: "Soy sauce", quantity: "3 tablespoons" },
      { name: "Sesame oil", quantity: "1 tablespoon" },
      { name: "Garlic", quantity: "2 cloves, minced" },
      { name: "Ginger", quantity: "1 teaspoon, grated" },
      { name: "Cooked rice", quantity: "2 cups, for serving" },
    ],
    cookingMethod: [
      "1. Heat sesame oil in a large skillet or wok over high heat.",
      "2. Add minced garlic and grated ginger to the skillet, and cook until fragrant.",
      "3. Add thinly sliced beef sirloin to the skillet and stir-fry until browned and cooked through, about 2-3 minutes.",
      "4. Remove the beef from the skillet and set aside.",
      "5. In the same skillet, add sliced carrots, bell peppers, and broccoli florets. Stir-fry for 4-5 minutes until vegetables are crisp-tender.",
      "6. Return the cooked beef to the skillet and toss everything together.",
      "7. Pour soy sauce over the beef and vegetables, and stir to combine.",
      "8. Cook for an additional 1-2 minutes, until heated through.",
      "9. Serve the beef stir-fry over steamed rice.",
      "10. Garnish with sliced green onions or sesame seeds, if desired.",
      "11. Enjoy your flavorful Beef Stir-Fry!"
    ]
  },
  {
    title: "Chocolate Chip Cookies",
    description:
      "Classic homemade cookies loaded with chocolate chips, perfect for a sweet treat.",
    image:
      "https://handletheheat.com/wp-content/uploads/2023/06/peanut-butter-chocolate-chip-cookies-SQUARE.jpg",
    ingredients: [
      { name: "All-purpose flour", quantity: "2 1/4 cups" },
      { name: "Butter", quantity: "1 cup, softened" },
      { name: "Brown sugar", quantity: "3/4 cup" },
      { name: "Granulated sugar", quantity: "3/4 cup" },
      { name: "Eggs", quantity: "2" },
      { name: "Vanilla extract", quantity: "1 teaspoon" },
      { name: "Baking soda", quantity: "1 teaspoon" },
      { name: "Salt", quantity: "1/2 teaspoon" },
      { name: "Chocolate chips", quantity: "2 cups" },
    ],
    cookingMethod: [
      "1. Preheat your oven to 375°F (190°C). Line baking sheets with parchment paper.",
      "2. In a large mixing bowl, cream together softened butter, brown sugar, and granulated sugar until light and fluffy.",
      "3. Beat in eggs, one at a time, then stir in vanilla extract.",
      "4. In a separate bowl, combine all-purpose flour, baking soda, and salt.",
      "5. Gradually add the dry ingredients to the wet ingredients, mixing until just combined.",
      "6. Fold in chocolate chips until evenly distributed throughout the cookie dough.",
      "7. Drop rounded tablespoons of dough onto the prepared baking sheets, spacing them about 2 inches apart.",
      "8. Bake in the preheated oven for 8-10 minutes, or until the edges are lightly golden brown.",
      "9. Allow the cookies to cool on the baking sheets for a few minutes before transferring them to wire racks to cool completely.",
      "10. Enjoy your delicious homemade Chocolate Chip Cookies!"
    ]
  },
];

export default recipes;
