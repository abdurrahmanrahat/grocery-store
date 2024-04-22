import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
export * from "./cartFish";
export * from "./category";
export * from "./user";

export type TFish = {
  _id: string;
  image: string[];
  title: string;
  price: string;
  ratings: string;
  category: string;
  isDiscount: boolean | string;
  discountPercentage: string;
  description: string;
  features: string[];
};

export type TDrawerItem = {
  title: string;
  path: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
};
