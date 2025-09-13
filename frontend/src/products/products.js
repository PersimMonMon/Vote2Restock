import { v4 as uuidv4 } from 'uuid';

const products = [
  { id: uuidv4(), name: 'Luxor Upholstered Sofa', category: 'Living Room', price: 499.99, image: '/assets/sofa.png' },
  { id: uuidv4(), name: 'Imperial Dining Table', category: 'Dining Room', price: 299.99, image: '/assets/dining-table.png' },
  { id: uuidv4(), name: 'Contemporary Coffee Table', category: 'Living Room', price: 129.99, image: '/assets/coffee-table.png' },
  { id: uuidv4(), name: 'Regal Bed Frame', category: 'Bedroom', price: 349.99, image: '/assets/bed-frame.png' },
  { id: uuidv4(), name: 'Elegance Armchair', category: 'Living Room', price: 199.99, image: '/assets/armchair.png' },
  { id: uuidv4(), name: 'Sierra Bookshelf', category: 'Office', price: 159.99, image: '/assets/bookshelf.png' },
  { id: uuidv4(), name: 'Monarch Nightstand', category: 'Bedroom', price: 89.99, image: '/assets/nightstand.png' },
  { id: uuidv4(), name: 'Glamour Dining Chairs (Set of 4)', category: 'Dining Room', price: 99.99, image: '/assets/dining-chairs.png' },
  { id: uuidv4(), name: 'Premium TV Stand', category: 'Living Room', price: 229.99, image: '/assets/tv-stand.png' },
  { id: uuidv4(), name: 'Executive Office Desk', category: 'Office', price: 199.99, image: '/assets/office-desk.png' }
];

export default products;
