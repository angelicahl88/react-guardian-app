import fetch from 'isomorphic-fetch';

const KEY = '3516861c-06d5-4a8d-877c-667a1ba21ed2';

function receiveArticles(json) {
  return {
    type: 'RECEIVE_ARTICLES',
    data: json.response.results
  }
}

// get articles from guardian API
export function getArticles() {
  const URL = `http://content.guardianapis.com/sport?edition=uk&show-fields=all&api-key=${KEY}`;
  return (dispatch) => {
    return fetch(URL)
      .then((response) => response.json())
      .then((json) => dispatch(receiveArticles(json)));
  }
}

// get single article from guardian API
