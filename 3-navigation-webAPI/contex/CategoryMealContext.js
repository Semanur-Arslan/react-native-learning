import React, { createContext, useContext, useState } from "react";

const CategoryMealContext = createContext();

export const CategoryMealProvider = ({ children }) => {
  const [category, setCategory] = useState(null);
  const [mealId, setMealId] = useState(null);

  const updateCategory = (newCategory) => setCategory(newCategory);
  const updateMealId = (newMealId) => setMealId(newMealId);

  return (
    <CategoryMealContext.Provider
      value={{ category, mealId, updateCategory, updateMealId }}
    >
      {children}
    </CategoryMealContext.Provider>
  );
};

export const useCategoryMeal = () => useContext(CategoryMealContext);
