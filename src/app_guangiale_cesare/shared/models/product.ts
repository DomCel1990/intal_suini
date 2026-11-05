import { Recipe } from "./recipie";

export interface Product {
  id: string;
  catKey: string;
  category: string;
  name: string;
  subtitle: string;
  tag: string;
  imageUrl: string;
  description: string;
  pairing: string;
  recipe: Recipe;
}