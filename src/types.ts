interface FilmObject {
  id: number;

  title: string;
  genre: string;
  year: number;
  imageSrc: string;
  preview: string;
  fullVideo: string;

  poster: string;
  backgroundImage: string;
  backgroundColor: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  isFavorite: boolean;
};

interface ReviewData {
  id: number;
  user: {
    id: number;
    name: string;
  };
  rating: number;
  comment: string;
  date: Date;
};

interface AuthInfo {
  id?: number;
  email?: string;
  name?: string;
  avatar?: string;
};

enum MovieInfoTab {
  OVERVIEW = `Overview`,
  DETAILS = `Details`,
  REVIEWS = `Reviews`,
};

export {FilmObject, AuthInfo, ReviewData, MovieInfoTab};
