import React, { Component } from 'react';
import { Link } from 'react-router';

import Article from './Article';
import ArticleBody from './ArticleBody';

class ArticleSingle extends Component {
  render() {
    const { articleId } = this.props.params;
    const currentArticle = this.props.articles.data[articleId];
    return (
      <div>
        <div className="top-content">
          <Article index={articleId} article={currentArticle} {...this.props} />
        </div>
        <ArticleBody index={articleId} article={currentArticle} {...this.props} />
        <div className="next-article">
          {/* <Link>
            <button>
              Go to next article
            </button>
          </Link> */}
        </div>
      </div>
    );
  }
}

export default ArticleSingle;
