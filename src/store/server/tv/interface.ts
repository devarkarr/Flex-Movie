export interface TvSeriesType {
  adult: boolean;
  backdrop_path: string | null;
  first_air_date: string | null;
  genre_ids: number[];
  id: number;
  title?: string;
  release_date?: string;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  vote_average: number;
  vote_count: number;
}
