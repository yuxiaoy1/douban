let apikey = process.env.API_KEY as string

let urlPattern = {
  moviesInTheatersUrl: 'https://api.douban.com/v2/movie/in_theaters',
  moviesTop250Url: 'https://api.douban.com/v2/movie/top250',
  moviesSearchUrl: 'https://api.douban.com/v2/movie/search',
  movieByIdUrl: 'https://api.douban.com/v2/movie/subject/',
}

async function _fetch(url: string, params = {}) {
  let res = await fetch(url, {
    method: 'POST',
    body: new URLSearchParams({
      apikey,
      ...params,
    }),
  })
  let data = await res.json()

  return data
}

export async function getMoviesInTheaters({
  start = 0,
  count = 5,
  city = '',
}: {
  start: number
  count: number
  city: string
}) {
  let { moviesInTheatersUrl } = urlPattern
  let data = await _fetch(moviesInTheatersUrl, { start, count, city })

  return data
}

export async function getMoviesTop250({
  start = 0,
  count = 10,
}: {
  start: number
  count: number
}) {
  let { moviesTop250Url } = urlPattern
  let data = await _fetch(moviesTop250Url, { start, count })

  return data
}

export async function searchMovies(q: string, start = 0, count = 10) {
  let { moviesSearchUrl } = urlPattern
  let data = await _fetch(moviesSearchUrl, { q, start, count })

  return data
}

export async function getMovieById(id: number) {
  let { movieByIdUrl } = urlPattern
  let data = await _fetch(movieByIdUrl + id)

  return data
}
