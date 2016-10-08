import React, { Component } from 'react';

import Article from './Article';

class ArticleGrid extends Component {

  // constructor(props) {
  //   super(props);
  //   const { getArticles } = this.props;
  //   this.state = {
  //     newArticles: getArticles()
  //   }
  // }

  componentWillMount() {
    const { getArticles } = this.props;
    getArticles();
  }

  render() {
    if (this.props.articles.data) {
      return (
          <div className="article-grid">
            {this.props.articles.data.map((article, index) => <Article key={index} index={index} article={article} {...this.props} />)}
          </div>
      );
    } else {
      return (
        <div>
          <h4 className="loader">Loading...</h4>
        </div>
      )
    }
  }
}

export default ArticleGrid;
