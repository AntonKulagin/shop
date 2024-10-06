export type BannerType = {
  id: number;
  title: string;
  text: string;
  image: {
    id: number;
    name: string;
    url: string;
    width: number;
    height: number;
  };
};
