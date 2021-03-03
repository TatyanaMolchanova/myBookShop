import {BookCategory, BookModel} from "./interfaces";

export const BOOKS: BookModel[] = [
  {
    id: 0,
    name: 'King Lion',
    description: 'Fairy Tail for children',
    price: 300,
    category: BookCategory.Childish,
    createDate: 25,
    isAvailable: true,
    howMuchIsAddedToCart: 0
  },
  {
    id: 1,
    name: 'JavaScript',
    description: 'Programming language',
    price: 1000,
    category: BookCategory.IT,
    createDate: 1,
    isAvailable: true,
    howMuchIsAddedToCart: 0
  },
  {
    id: 2,
    name: 'Really love',
    description: 'Fairy Tail for adults',
    price: 100,
    category: BookCategory.Fiction,
    createDate: 14,
    isAvailable: false,
    howMuchIsAddedToCart: 0
  }
]
