import {
  Glasses,
  Underpants,
  Heels,
  Dress,
  Skirt,
  Boots,
  Slippers,
  Sneakers,
  Jacket,
  Bra,
  Cap,
  Hat,
  WomensShirt,
  MensShirt,
  PoloShirt,
  Belt,
  Coat,
  Boxers,
  Swimsuit,
  Jeans,
  SwimTrunks,
} from "./assets";

const Items = [
  {
    id: 16,
    name: "Coat",
    img: Coat,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 250,
    inBag: false,
    count: 0,
    total: 0,
  },

  {
    id: 2,
    name: "Underpants",
    img: Underpants,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 10,
    inBag: false,
    count: 0,
    total: 0,
  },
  {
    id: 3,
    name: "Heels",
    img: Heels,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 100,
    inBag: false,
    count: 0,
    total: 0,
  },
  {
    id: 4,
    name: "Dress",
    img: Dress,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 30,
    inBag: false,
    count: 0,
    total: 0,
  },
  {
    id: 5,
    name: "Skirt",
    img: Skirt,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 20,
    inBag: false,
    count: 0,
    total: 0,
  },
  {
    id: 6,
    name: "Boots",
    img: Boots,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 250,
    inBag: false,
    count: 0,
    total: 0,
  },
  {
    id: 7,
    name: "Slippers",
    img: Slippers,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 20,
    inBag: false,
    count: 0,
    total: 0,
  },
  {
    id: 8,
    name: "Sneakers",
    img: Sneakers,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 100,
    inBag: false,
    count: 0,
    total: 0,
  },
  {
    id: 9,
    name: "Jacket",
    img: Jacket,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 200,
    inBag: false,
    count: 0,
    total: 0,
  },
  {
    id: 10,
    name: "Bra",
    img: Bra,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 25,
    inBag: false,
    count: 0,
    total: 0,
  },
  {
    id: 11,
    name: "Swim trunks",
    img: SwimTrunks,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 35,
    inBag: false,
    count: 0,
    total: 0,
  },
  {
    id: 12,
    name: "Jeans",
    img: Jeans,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 50,
    inBag: false,
    count: 0,
    total: 0,
  },
  {
    id: 13,
    name: "Swimsuit",
    img: Swimsuit,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 55,
    inBag: false,
    count: 0,
    total: 0,
  },
  {
    id: 14,
    name: "Boxers",
    img: Boxers,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 25,
    inBag: false,
    count: 0,
    total: 0,
  },
  {
    id: 15,
    name: "Belt",
    img: Belt,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 15,
    inBag: false,
    count: 0,
    total: 0,
  },

  {
    id: 17,
    name: "Polo shirt",
    img: PoloShirt,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 45,
    inBag: false,
    count: 0,
    total: 0,
  },
  {
    id: 18,
    name: "Men's shirt",
    img: MensShirt,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 25,
    inBag: false,
    count: 0,
    total: 0,
  },
  {
    id: 19,
    name: "Women's shirt",
    img: WomensShirt,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 25,
    inBag: false,
    count: 0,
    total: 0,
  },
  {
    id: 20,
    name: "Hat",
    img: Hat,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 50,
    inBag: false,
    count: 0,
    total: 0,
  },
  {
    id: 1,
    name: "Glasses",
    img: Glasses,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 25,
    inBag: false,
    count: 0,
    total: 0,
  },
  {
    id: 21,
    name: "Cap",
    img: Cap,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 25,
    inBag: false,
    count: 0,
    total: 0,
  },
];

const itemDetails = {
  id: 1,
  name: "Glasses",
  img: Glasses,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  price: 25,
  inCart: false,
  count: 0,
  total: 0,
};

export { Items, itemDetails };
