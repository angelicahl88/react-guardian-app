function articles(state = {}, action) {
  switch(action.type) {
    case 'RECEIVE_ARTICLES' :
      return {
        data: action.data
      };
      break;
    default :
      return state;
  }
}

export default articles;
