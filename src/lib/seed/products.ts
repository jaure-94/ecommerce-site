import { db } from '../db';
import { products } from '../db/schema';

const nikeProducts = [
  {
    name: 'Nike Air Max 270',
    description: 'The Nike Air Max 270 delivers visible cushioning under every step. The design draws inspiration from the Air Max 93 and Air Max 180, featuring Nike\'s largest heel Air unit yet for a super-soft ride that feels as impossible as it looks.',
    price: '150.00',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/air-max-270-mens-shoes-KkLcGR.png',
    category: 'Shoes',
    brand: 'Nike',
    stock: 25,
  },
  {
    name: 'Nike Air Force 1 \'07',
    description: 'The radiance lives on in the Nike Air Force 1 \'07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.',
    price: '110.00',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png',
    category: 'Shoes',
    brand: 'Nike',
    stock: 30,
  },
  {
    name: 'Nike Dri-FIT ADV TechKnit Ultra',
    description: 'The Nike Dri-FIT ADV TechKnit Ultra Running Tank combines our most innovative technologies and features to help keep you cool and comfortable during your run.',
    price: '70.00',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/16a04c80-3b54-44d5-a84a-8d8f57c6b6c7/dri-fit-adv-techknit-ultra-mens-running-tank-2lHx4z.png',
    category: 'Apparel',
    brand: 'Nike',
    stock: 15,
  },
  {
    name: 'Nike Revolution 7',
    description: 'We know comfort is key to a successful run. That\'s why the Nike Revolution 7 cushions your stride with soft foam to keep you running in comfort.',
    price: '70.00',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0a300da-2e56-4d29-be7e-0a8cfd0e1d6d/revolution-7-mens-road-running-shoes-BrRXX6.png',
    category: 'Shoes',
    brand: 'Nike',
    stock: 20,
  },
  {
    name: 'Nike Sportswear Club Fleece',
    description: 'The Nike Sportswear Club Fleece Pullover Hoodie is made from soft fleece fabric that feels smooth on the outside and plush on the inside for all-day comfort.',
    price: '60.00',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/178b2a46-3ee4-492b-882e-f71efdd53a36/sportswear-club-fleece-pullover-hoodie-WWTpjN.png',
    category: 'Apparel',
    brand: 'Nike',
    stock: 18,
  },
  {
    name: 'Nike Air Jordan 1 Low',
    description: 'Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look that\'s familiar yet always fresh. With an iconic design that pairs perfectly with any \'fit.',
    price: '90.00',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/air-jordan-1-low-shoes-6Q1tFM.png',
    category: 'Shoes',
    brand: 'Nike',
    stock: 22,
  },
];

export async function seedProducts() {
  try {
    console.log('Seeding products...');
    
    // Insert products
    await db.insert(products).values(nikeProducts);
    
    console.log('Products seeded successfully!');
  } catch (error) {
    console.error('Error seeding products:', error);
    throw error;
  }
}