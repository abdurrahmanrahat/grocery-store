import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
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
  features: {
    one: string;
    two: string;
    three: string;
    four: string;
  };
};

export type TDrawerItem = {
  title: string;
  path: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
};
