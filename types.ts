export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
};

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
};

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  description: string;
  isFeatured: boolean;
  isArchived: boolean;
  weight: Weight;
  brand: Brand;
  images: Image[];
};

export interface Image {
  id: string;
  url: string;
};

export interface Brand {
  id: string;
  name: string;
  value: string;
};

export interface Weight {
  id: string;
  name: string;
  value: string;
};