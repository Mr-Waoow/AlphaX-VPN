export interface VpnPrice {
  id: number;
  name: string;
  descName: string;
  title: string;
  description: string;
  priceDescription: string;
  icon: string;
  image: string;
  isMonthDiscount: boolean;
  isHalfYearDiscount: boolean;
  isYearDiscount: boolean;
  priceMonth: number;
  priceHalfYear: number;
  priceYear: number;
  discountMonth: number;
  discountHalfYear: number;
  discountYear: number;
}
