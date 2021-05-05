let foodToSearch = null;

function handleRecipeClick() {
  fetchRecipe(foodToSearch);
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}

async function fetchRecipe(food) {
  //--- write your code below ---
  const YOUR_APP_ID = "029ee2cf";
  const YOUR_APP_KEY = "6d8d5f8fa0c32e8665b8b483ec9da9cf";
  let searchID = document.getElementById("food-input").value;
  const requestUrl = `https://api.edamam.com/search?q=${searchID}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  const newRecipePromice = await fetch(requestUrl);
  const newRecipe = await newRecipePromice.json();
  const myRecipe = newRecipe.hits[0];
  console.log(myRecipe);
  //--- write your code above ---
}

// https://api.edamam.com/search?q=kale&app_id=029ee2cf&app_key=6d8d5f8fa0c32e8665b8b483ec9da9cf
