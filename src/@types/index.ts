export interface Product {
  id: string;
  label: string;
  image: string;
  description: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}
