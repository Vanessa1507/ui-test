import { useEffect } from 'react';
import ControllerVotes from './general/ControllerVotes';
import ThumbsGauge from './general/ThumbsGauge';

const GridCard = (props) => {
  const { person } = props;
  const { description, category, lastUpdated, name, percent, picture, votes } = person;


  const date1 = new Date(lastUpdated)
  // console.log(Math.abs(new Date() - date1) / (1000 * 3600 * 24))

  useEffect(() => {

  }, [])


  return (
    <div
      className='previous-rulings--view-grid'
      style={{
        backgroundImage: `url(${require(`../../../img/people/${picture}`)})`
      }}
    >
      <div className='view-grid-container'>
        <div className="view-grid-container-information">
          {
            votes.positive !== votes.negative &&
            <span className={`icon-verdict icon-thumb icon-thumb-${votes.positive > votes.negative ? 'up' : 'down'}`} />
          }
          <div className="view-grid-information">
            <h3 className="view-grid-name">{name}</h3>
            <p className="view-grid-description">{description}</p>
            <p className="view-grid-date"> 1 ago in {category}</p>
            <ControllerVotes />
          </div>
        </div>

        <ThumbsGauge
          positivePercent={percent.positive}
          negativePercent={percent.negative}
        />
      </div>

    </div>
  );
};

export default GridCard;