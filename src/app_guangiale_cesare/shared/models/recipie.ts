import { Ingredient } from "./ingredient";

export interface Recipe {
  title: string;
  basePortions: number;
  ingredients: Ingredient[];
  steps: string[];
}