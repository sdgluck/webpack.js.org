import React from 'react';
import Additional from './support-additional.json';
import './support-style';

export default class Support extends React.Component {
  render() {
    let { minimum, maximum, size, type } = this.props;
    let supporters = require(`./support-${type}.json`);

    if (type === 'sponsors') {
      supporters = supporters.slice();
      supporters.push(...Additional);
      supporters.sort((a, b) => b.totalDonations - a.totalDonations);
    }

    if (typeof minimum === 'number') {
      supporters = supporters.filter(item => item.totalDonations >= minimum * 100);
    }

    if (typeof maximum === 'number') {
      supporters = supporters.filter(item => item.totalDonations < maximum * 100);
    }

    return (
      <div className="support">
        {
          supporters.map((supporter, index) => (
            <a key={ supporter.id || supporter.username || index }
               className="support__item"
               title={ `$${supporter.totalDonations / 100} by ${supporter.name || supporter.username}` }
               target="_blank"
               href={ supporter.website || `https://opencollective.com/${supporter.username}` }>
              { supporter.avatar ? <img
                className={ `support__${type}-avatar-${size || 'normal'}` }
                src={ supporter.avatar }
                alt={ supporter.username ? `${supporter.username}'s avatar` : 'avatar' } /> :
                supporter.name }
              { type === 'backers' ? <figure className="support__outline" /> : null }
            </a>
          ))
        }

        <div className="support__bottom">
          <a className="support__button" href="https://opencollective.com/webpack#support">
            Become a { type.replace(/s$/, '') }
          </a>
        </div>
      </div>
    );
  }
}
