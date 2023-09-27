export type MoviesType = {
  count: number
  start: number
  total: number
  subjects: MovieType[]
}

export type MovieType = {
  rating: RatingType
  genres: string[]
  title: string
  casts: PersonType[]
  collect_count: number
  original_title: string
  subtype: string
  directors: PersonType[]
  year: string
  images: ImagesType
  alt: string
  id: string
}

export type DetailedMovieType = MovieType & {
  reviews_count: number
  wish_count: number
  douban_site: string
  mobile_url: string
  do_count: null
  share_url: string
  seasons_count: null
  schedule_url: string
  episodes_count: null
  countries: string[]
  current_season: null
  summary: string
  comments_count: number
  ratings_count: number
  aka: string[]
}

export type RatingType = {
  max: number
  average: number
  stars: string
  min: number
}

export type PersonType = {
  alt: string
  avatars: ImagesType
  name: string
  id: string
}

export type ImagesType = {
  small: string
  large: string
  medium: string
}

export type MoviePageParamsType = {
  params: {
    id: number
  }
}

export type MovieSearchPageParamsType = {
  searchParams: { q: string }
}
