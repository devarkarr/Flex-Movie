interface Result {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string; // ISO 8601 formatted date string
  id: string;
}

export interface VideoType {
  id: number;
  results: Result[];
}
