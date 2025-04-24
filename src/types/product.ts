export type ProductCategory = 
  | 'ham' 
  | 'beef-jerky' 
  | 'sausage' 
  | 'bacon' 
  | 'cheese' 
  | 'turkey' 
  | 'pork-loin' 
  | 'pet-treats' 
  | 'jar-items';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: ProductCategory;
  isNew?: boolean;
  isFeatured?: boolean;
  weight?: string;
}