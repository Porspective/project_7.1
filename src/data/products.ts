import { Product } from '../types/product';

export const allProducts: Product[] = [
  // Real Beef Jerky
  {
    id: 'jerky-01',
    name: 'Real Beef Jerky',
    description: 'Our signature beef jerky made from premium cuts of beef, perfectly seasoned and slowly smoked for maximum flavor.',
    price: 16.99,
    imageUrl: `${import.meta.env.BASE_URL}Jerky.jpeg`,
    category: 'beef-jerky',
    isFeatured: true,
    weight: '16 oz (One Pound)'
  },

  // Smoked Ham
  {
    id: 'ham-01',
    name: 'Smoked Ham',
    description: 'Traditional hickory-smoked ham, cured and prepared using time-honored methods for exceptional flavor.',
    price: 79.99,
    imageUrl: `${import.meta.env.BASE_URL}Cooked_ham.jpeg`,
    category: 'ham',
    isFeatured: true,
    weight: '15-18 lbs'
  },

  // Smoked Turkey
  {
    id: 'turkey-01',
    name: 'Smoked Turkey',
    description: 'Whole turkey, slow-smoked to perfection with our signature blend of seasonings.',
    price: 49.99,
    imageUrl: `${import.meta.env.BASE_URL}turkeybreast_1024x1024.jpeg`,
    category: 'turkey',
    isFeatured: true,
    weight: '12-14 lbs'
  },

  // Smoked Bacon
  {
    id: 'bacon-01',
    name: 'Smoked Bacon',
    description: 'Premium bacon, hickory-smoked and hand-cut for the perfect breakfast experience.',
    price: 9.99,
    imageUrl: `${import.meta.env.BASE_URL}Bacon.jpeg`,
    category: 'bacon',
    isFeatured: true,
    weight: '1 lb package'
  },

  // Cooked Sausage
  {
    id: 'sausage-01',
    name: 'Cooked Sausage',
    description: 'Fully cooked sausage made with our special blend of spices and seasonings.',
    price: 6.99,
    imageUrl: `${import.meta.env.BASE_URL}Cooked_sausage.jpeg`,
    category: 'sausage',
    weight: '1 lb package'
  },

  // Dog Jerky Treats
  {
    id: 'pet-01',
    name: 'Dog Jerky Treats',
    description: 'All-natural beef jerky treats specially made for your four-legged friends.',
    price: 12.99,
    imageUrl: `${import.meta.env.BASE_URL}Dog_jerky.jpeg`,
    category: 'pet-treats',
    weight: '12 oz (.75 LBS)'
  },

  // Jar Items (Hot Green Salsa)
  {
    id: 'jar-01',
    name: 'Hot Green Salsa',
    description: 'Our signature hot green salsa, perfect for adding a spicy kick to any meal.',
    price: 5.99,
    imageUrl: `${import.meta.env.BASE_URL}Jar_items.jpeg`,
    category: 'jar-items',
    weight: '16 oz (1 lb)'
  },

  // Smoked Cheese (Pepper Jack)
  {
    id: 'cheese-01',
    name: 'Smoked Pepper Jack Cheese',
    description: 'Creamy pepper jack cheese with jalapeños, perfectly smoked for added flavor.',
    price: 7.99,
    imageUrl: `${import.meta.env.BASE_URL}Smoked_Cheese.jpeg`,
    category: 'cheese',
    weight: '8 oz block'
  },

  // Smoked Pork Loin
  {
    id: 'pork-01',
    name: 'Smoked Pork Loin',
    description: 'Tender pork loin, slow-smoked to perfection with our signature seasonings.',
    price: 24.99,
    imageUrl: `${import.meta.env.BASE_URL}hamstandgood.jpeg`,
    category: 'pork-loin',
    weight: '3-4 lbs'
  },

  // Smoked Sausage
  {
    id: 'sausage-02',
    name: 'Smoked Sausage',
    description: 'Traditional smoked sausage made with premium pork and our special spice blend.',
    price: 8.99,
    imageUrl: `${import.meta.env.BASE_URL}Smoked_sausage.jpeg`,
    category: 'sausage',
    weight: '1 lb package'
  }
];

export const featuredProducts = allProducts.filter(product => product.isFeatured);