export interface Headphone {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
}

export const headphones: Headphone[] = [
  { id: 1, img: "/assets/image.png",  title: "Apple BYZ S852I", price: 2927, rate: 4.7 },
  { id: 2, img: "/assets/image1.png", title: "Apple EarPods",   price: 2327, rate: 4.5 },
  { id: 3, img: "/assets/image2.png", title: "Apple EarPods",   price: 2327, rate: 4.5 },
  { id: 4, img: "/assets/image.png",  title: "Apple BYZ S852I", price: 2927, rate: 4.7 },
  { id: 5, img: "/assets/image1.png", title: "Apple EarPods",   price: 2327, rate: 4.5 },
  { id: 6, img: "/assets/image2.png", title: "Apple EarPods",   price: 2327, rate: 4.5 },
];

export const wirelessHeadphones: Headphone[] = [
  { id: 7, img: "/assets/image3.png", title: "Apple AirPods",   price: 9527, rate: 4.7 },
  { id: 8, img: "/assets/image4.png", title: "GERLAX GH-04",    price: 6527, rate: 4.7 },
  { id: 9, img: "/assets/image5.png", title: "BOROFONE BO4",    price: 7527, rate: 4.7 },
];