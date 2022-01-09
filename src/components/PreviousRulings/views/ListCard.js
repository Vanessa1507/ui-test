//Components
import ControllerVotes from './general/ControllerVotes';
import ThumbsGauge from './general/ThumbsGauge';

const ListCard = (props) => {
  const { index, card } = props;
  const { description, category, id, lastUpdated, name, percent, picture, votes } = card;

  // const date1 = new Date(lastUpdated)

  return (
    <div
      className='previous-rulings--view-list'
      style={{
        backgroundImage: `url(${require(`../../../img/people/${picture}`)})`
      }}
    >
      <div className='view-list-container'>
        <div className="view-container-information">
          {
            votes.positive !== votes.negative &&
            <span className={`icon-verdict icon-thumb icon-thumb-${votes.positive > votes.negative ? 'up' : 'down'}  thumb-${votes.positive > votes.negative ? 'up' : 'down'}`} />
          }
          <div className="view-information">
            <div>
              <h3 className="view-name">{name}</h3>
              <p className="view-description">{description}</p>
            </div>

            <div>
              <ControllerVotes
                category={category}
                id={id}
                index={index}
                lastUpdated={lastUpdated}
              />
            </div>
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

export default ListCard;