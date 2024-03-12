export interface CountryProxy {
  id: string;
  name: string;
  code: string;
  flag: string;
  cities: string[];
  shared: string;
  private: string;
  ipAvailibleShared: number;
  ipAvailiblePrivate: number;
  ipAvailiblePrivateCities: number[];
  priceShared: number[];
  pricePrivate: number[];
  priceWithDiscount: number;
  discount: number;
}
