let foodToSearch = null;
const YOUR_APP_ID = "029ee2cf";
const YOUR_APP_KEY = "6d8d5f8fa0c32e8665b8b483ec9da9cf";

function handleRecipeClick() {
  handleFoodChange();
  fetchRecipe(foodToSearch);
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}

async function fetchRecipe(food) {
  const requestUrl = `https://api.edamam.com/search?q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  const newRecipePromice = await fetch(requestUrl);
  const newRecipe = await newRecipePromice.json();
  displayRecipes(newRecipe.hits);
}

function displayRecipes(myRecipeArray) {
  let maxLength = Math.min(6, myRecipeArray.length);
  for (let i = 0; i < maxLength; i++) {
    console.log(myRecipeArray);
    showRecipeOnHTML(myRecipeArray[i], i);
  }
}
function showRecipeOnHTML(recipeObject, index = 1) {
  let recipe = recipeObject.recipe;
  const recipeSection = document.getElementById(`recipe-${index}`);
  recipeSection.innerHTML = "";
  let recipeLink = document.createElement("a");
  recipeLink.setAttribute("id", `recipe-label-${index}`);
  recipeSection.appendChild(recipeLink);
  recipeLink.innerHTML = recipe.label;
  recipeLink.href = recipe.url;

  let recipeImage = document.createElement("img");
  recipeImage.src = recipe.image;
  recipeImage.alt = "Recipe Image" + index;
  recipeSection.appendChild(recipeImage);

  let newList = document.createElement("ul");
  recipeSection.appendChild(newList);
  const ingredientsArray = recipe.ingredients;
  ingredientsArray.forEach((ingredient) => {
    let newListItem = document.createElement("li");
    newListItem.innerText = ingredient.text;
    newList.appendChild(newListItem);
  });
}

// https://api.edamam.com/search?q=kale&app_id=029ee2cf&app_key=6d8d5f8fa0c32e8665b8b483ec9da9cf
