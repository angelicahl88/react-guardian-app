import React, { Component } from 'react';
import { Link } from 'react-router';

class ArticleBody extends Component {

  formatDate() {
    const DateFormats = {
      weekDays: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      months: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    };

    const { webPublicationDate } = this.props.article;
    let pubDate = new Date(webPublicationDate);
    let weekDay = DateFormats.weekDays[pubDate.getDay()];
    let date = pubDate.getDate();
    let month = DateFormats.months[pubDate.getMonth()];
    let year = pubDate.getFullYear();

    let publicationDate = `${weekDay}, ${date} ${month} ${year}`;
    return publicationDate;
  }

  render() {

    const { byline, body } = this.props.article.fields;

    return (
      <div className="body-content">
        <div className="article-body" dangerouslySetInnerHTML={{__html: body}}></div>
        <div className="article-details">
          <h5 className="author">{byline}</h5>
          <h5 className="publication-date">Date: {this.formatDate()}</h5>
        </div>
      </div>
    );
  }
}

export default ArticleBody;
