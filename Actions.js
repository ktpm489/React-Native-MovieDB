export const LANGUAGE_CHANGED = "LANGUAGE_CHANGED";
export const REGION_CHANGED = "REGION_CHANGED";

String.prototype.toUnderScore = function() {
  return this.replace(/([A-Z])/g, "_$1");
};

// CONFIGURATION
export const CONFIG_FETCHED = "CONFIG_FETCHED";
export const configFetched = (config) => ({
  type: "CONFIG_FETCHED",
  config,
});

// MOVIES
export const FETCHING_MOVIES = "FETCHING_MOVIES";
export const fetchingMovies = () => ({
  type: "FETCHING_MOVIES"
});

export const NOW_SHOWING_MOVIES_FETCHED = "NOW_SHOWING_MOVIES_FETCHED";
export const COMING_SOON_MOVIES_FETCHED = "COMING_SOON_MOVIES_FETCHED";
export const POPULAR_MOVIES_FETCHED = "POPULAR_MOVIES_FETCHED";

export const movieFetched = (category, movies) => ({
  type: category.toUnderScore().toUpperCase() + "_MOVIES_FETCHED",
  movies,
});

export const MOVIE_SELECTED = "MOVIE_SELECTED";
export const selectedMovie = (movie) => ({
  type: "MOVIE_SELECTED",
  movie
});

export const MOVIE_DETAILS_FETCHED = "MOVIE_DETAILS_FETCHED";
export const movieDetailsFetched = (details, category) => ({
  type: "MOVIE_DETAILS_FETCHED",
  details,
  category
});

// TV SHOWS
export const FETCHING_TV_SHOWS = "FETCHING_TV_SHOWS";
export const fetchingTvShows = () => ({
  type: "FETCHING_TV_SHOWS"
});

export const SHOWING_TODAY_TV_SHOWS_FETCHED = "SHOWING_TODAY_TV_SHOWS_FETCHED";
export const TOP_RATED_TV_SHOWS_FETCHED = "TOP_RATED_TV_SHOWS_FETCHED";
export const POPULAR_TV_SHOWS_FETCHED = "POPULAR_TV_SHOWS_FETCHED";

export const tvShowsFetched = (category, tvShows) => ({
  type: category.toUnderScore().toUpperCase() + "_TV_SHOWS_FETCHED",
  tvShows,
});

export const TV_SHOW_SELECTED = "TV_SHOW_SELECTED";
export const selectedTvShow = (tvShow) => ({
  type: "TV_SHOW_SELECTED",
  tvShow
});

export const TV_SHOW_DETAILS_FETCHED = "TV_SHOW_DETAILS_FETCHED";
export const tvShowDetailsFetched = (details, category) => ({
  type: "TV_SHOW_DETAILS_FETCHED",
  details,
  category
});
