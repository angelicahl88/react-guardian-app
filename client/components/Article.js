import React, { Component } from 'react';
import { Link } from 'react-router';

import ReadIcon from './ReadIcon';

class Article extends Component {

  countMinToRead() {
    const { bodyText } = this.props.article.fields;
    let articleWords = bodyText.split(' ');

    let wordCount = articleWords.length;
    let wpm = Math.ceil(wordCount / 200);

    return wpm;
  }

  render() {

    const { article, index } = this.props;

    return (
      <div className="article-wrap">
        <div className="article-photo-wrap">
          <Link to={`/article/${index}`}>
            <img src={article.fields.thumbnail} alt={article.fields.headline} />
            <div className="hover-card">
              <div className="read-wrapper">
                <ReadIcon />
                <h5 className="min-to-read bold">{this.countMinToRead()} min</h5>
              </div>
            </div>
          </Link>
        </div>
        <div className="article-info">
          <h3>{article.fields.headline}</h3>
          <p>{article.fields.trailText}</p>
        </div>
      </div>
    );
  }
}

export default Article;
