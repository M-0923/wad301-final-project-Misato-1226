"use client";

import Form from "@/app/components/recipeForm";
import RecipeList from "@/app/components/recipeList";
import { RecipeResultProvider } from "@/app/contexts/RecipeResult";

const Recipes = () => {
  return (
    <div>
      <RecipeResultProvider>
        <Form />
        <RecipeList />
      </RecipeResultProvider>
    </div>
  );
};

export default Recipes;
