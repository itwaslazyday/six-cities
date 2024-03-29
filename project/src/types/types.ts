type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  }
};

type Place = {
  bedrooms: number;
  city: {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  }
  name: string;
  }
  description: string;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  }
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  }
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

type City = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  }
};

type NewReview = {
  rating: number;
  review: string;
  id: number;
};

type FavoriteStatus = {
  status: number;
  id: number;
  currentId?: number;
};

export type {Place, Review, City, NewReview, FavoriteStatus};
