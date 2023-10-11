module.exports = {
  Recipe: {
    ingredients(recipe, _, { dataSources }) {
      return dataSources.recipesAPI.getRecipeIngredients(recipe.id);
    },
    relatedRecipes(recipe, _, { dataSources }) {
      const limit = 3;
      return dataSources.recipesAPI.getRelatedRecipes(recipe.id, limit);
    },
    cookware(recipe, _, { dataSources }) {
      const cookwareNameList = dataSources.recipesAPI.getRecipeCookware(recipe.id);

      if (!cookwareNameList) return;

      return cookwareNameList.map((cookware) => ({
        name: cookware,
      }));
    }
  },
};
