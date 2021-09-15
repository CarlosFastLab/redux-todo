import React, { useState } from "react";
import { connect } from "react-redux";

import Article from "../../components/Article/Article";
import AddArticle from "../../components/AddArticle/AddArticle";
import * as actionTypes from "../../store/actions/actionTypes";
import { addArticle } from "../../store/creators/actionCreators";

const Articles = ({ articles, saveArticle }) => {
  return (
    <div>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveArticle: (article) =>
      dispatch(addArticle(article)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
