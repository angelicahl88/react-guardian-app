import React, { Component } from 'react';

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
    return (
      <div>
        {this.props.articles.data.map((article, index) => <p key={index} index={index}>{article.fields.headline}</p>)}
      </div>
    );
  }
}

export default ArticleGrid;
