export interface CountryProxy {
  id: string;
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  numericCode: string;
  callingCode: string;
  icon: string;
  cities: string[];
  isPrivate: boolean;
  isShared: boolean;
  sharedClass: string;
  privateClass: string;
  disabledClass: string;
  ipAvailibleShared: number;
  ipAvailiblePrivate: number;
  ipAvailiblePrivateCities: number[];
  priceShared: number[];
  pricePrivate: number[];
  priceWithDiscount: number;
  discount: number;
}
