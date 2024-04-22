export type TOrder = {
  _id: string;
  image: string[];
  title: string;
  price: string;
  ratings: string;
  category: string;
  isDiscount: boolean;
  discountPercentage: string;
  description: string;
  features: string[];
  email: string;
  userName: string;
  quantity: number;
  status: "Pending" | "Delivered";
};
