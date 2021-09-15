import * as actionTypes from "../actions/actionTypes";

const initialState = {
  articles: [
    { id: 1, title: "post 1", body: "Lorem ipsum dolor sit amet." },
    { id: 2, title: "post 2", body: "Lorem ipsum dolor sit amet." },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle = {
        id: Math.random(), //id semialeatória para exemplo
        title: action.article.title,
        body: action.article.body,
      };
      return {
          ...state,
          articles: state.articles.concat(newArticle),
      }
      default:
          return state;
  }
};

export default reducer;
