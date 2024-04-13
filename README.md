# Recipe Book

Welcome to Recipe Book, a web application designed to help you manage your recipes seamlessly. Whether you're a seasoned chef or just getting started in the kitchen, Recipe Book has you covered with its intuitive interface and convenient features.

## Features

- **Add New Recipes**: Easily add new recipes to your collection by filling out a simple form with details such as title, description, ingredients, and cooking method.

- **Edit and Delete Recipes**: Edit existing recipes to make changes or delete recipes you no longer need, all with just a few clicks.

- **View All Recipes**: Browse through your entire collection of recipes to find the perfect meal for any occasion.

- **Persisting Data with LocalStorage**: Your recipes are saved locally in your browser's LocalStorage, ensuring that your data is always accessible even if you close the browser or refresh the page.

## Usage of LocalStorage

The Recipe Book app utilizes LocalStorage to persist recipe data locally in the user's browser. Here's how it works:

- **Saving Recipes**: When a user adds a new recipe or edits an existing one, the recipe data is saved to the browser's LocalStorage. This ensures that the data persists even if the user refreshes the page or closes the browser.

- **Retrieving Recipes**: When the app loads, it checks the LocalStorage for any saved recipe data. If data is found, it is loaded into the app's state and displayed to the user. This allows users to view their previously added recipes across sessions.

- **Editing and Deleting Recipes**: When a user edits or deletes a recipe, the changes are made both in the app's state and in the LocalStorage. This keeps the data in sync between the app and the browser's storage.

- **Limitations**: It's important to note that LocalStorage has limitations, such as a storage capacity limit (usually around 5MB per origin) and data being stored as strings only. Therefore, it's recommended to use LocalStorage for small amounts of data like recipe details rather than large datasets.

By utilizing LocalStorage, the Recipe Book app provides a seamless and persistent user experience, allowing users to manage their recipes without the need for server-side storage or authentication.

## Getting Started

To get started with Recipe Book, simply follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies by running `npm install` or `yarn install`.
3. Start the development server with `npm run dev` or `yarn dev`.
4. Open your browser and navigate to `http://localhost:3000` to view the app.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered applications.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A statically typed superset of JavaScript that compiles to plain JavaScript.
- **Ant Design**: A design system for enterprise-level products, providing a set of high-quality React components.
- **LocalStorage**: A web storage mechanism that allows data to be stored locally in a user's browser.

## Contributing

Contributions are welcome! If you have any ideas for new features, improvements, or bug fixes, feel free to open an issue or submit a pull request.

