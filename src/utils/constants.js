
// export const YOUTUBE_SEARCH_SUGGESTION_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

const GOOGLE_API_KEY = "AIzaSyAIWnqZCBkhdUDqHs47v-6tBRmGWDQBu3k";
// const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

//  export const OFFSET_LIVE_CHAT = 25;

// export const VIDEO_API =
//   "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
//   GOOGLE_API_KEY;

// export const YOUTUBE_SEARCH_API =
//   // "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
//   "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

 

//clone
// const GOOGLE_API_KEY = "AIzaSyAIi8VgLmgWhKlLLLRkRAGWCco6Nj2nY_I";

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&id=";

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&key=" +
  GOOGLE_API_KEY +
  "&q=";

export const SEARCH_RESULT_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  GOOGLE_API_KEY +
  "&q=";

export const COMMENTS_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=50&key=" +
  GOOGLE_API_KEY +
  "&videoId=";

export const kFormatter = (num) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
};

  




