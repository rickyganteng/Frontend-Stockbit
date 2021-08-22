import axiosApiIntances from "../../utils/axios";

export const getmoviebyId = (imdbID) => {
  return {
    type: "GET_MOVIE_ID",
    payload: axiosApiIntances.get(
      `&i=${imdbID}`
    ),
  };
}