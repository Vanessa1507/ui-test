//Components
import ControllerVotes from './general/ControllerVotes';
import ThumbsGauge from './general/ThumbsGauge';

const GridCard = (props) => {
  const { index, card } = props;
  const { description, category, id, lastUpdated, name, percent, picture, votes } = card;

  // const date1 = new Date(lastUpdated)

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

            <ControllerVotes
              category={category}
              id={id}
              index={index}
              lastUpdated={lastUpdated}
            />
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