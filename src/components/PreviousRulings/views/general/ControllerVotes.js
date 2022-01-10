import { useEffect, useState } from "react"
//Store
import { useDispatch, useTrackedState } from '../../../../Store/index';
//Functions
import getPercent from './../../../../js/functions/getPercent';

//Const
const buttons = ['up', 'down'];


const ControllerVotes = (props) => {
  const { category, id, index, lastUpdated } = props;
  //Store
  const state = useTrackedState();
  const { cards } = state;
  const dispatch = useDispatch();

  //Local state
  const [isDisable, setIsDisable] = useState(true);
  const [activeThumb, setActiveThumb] = useState(null);
  const [dateLastUpdated, setDateLastUpdated] = useState(null);
  const [voteAlready, setVoteAlready] = useState(false);

  const changeActiveThumb = (value) => {
    setIsDisable(false);
    setActiveThumb(value);
  };


  useEffect(() => {
    const differenceMilliseconds = new Date().getTime() - new Date(lastUpdated).getTime();
    const day = 1000 * 60 * 60 * 24;
    const month = day*30;
    const year = month * 12;
    
    const days = differenceMilliseconds / day;
    const months = Math.floor(differenceMilliseconds / month);
    const years = Math.floor(differenceMilliseconds/year);


    const timeStamp = years >= 1
      ? `${years} ${years !== 1 ? 'years' : 'year'}`
      : months >= 1
        ? `${months} ${months !== 1 ? 'months' : 'month'}`
        : `${Math.floor(days)} ${Math.floor(days) !== 1 ? 'days' : 'day'}`;
    
    setDateLastUpdated(timeStamp);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const vote = () => {
    let newData = [...cards];

    if (newData[index].id === id) {
      const voteValue = activeThumb === 'up' ? 'positive' : 'negative';
      const newValue = newData[index].votes[voteValue] + 1

      newData[index].votes[voteValue] = newValue;
      newData[index].percent = getPercent({ values: newData[index].votes });

      dispatch({
        type: 'SET_DATA',
        property: 'cards',
        value: newData
      });

      dispatch({
        type: 'SET_DATA',
        property: 'newChange',
        value: true
      });

      localStorage.setItem('dataVotes', JSON.stringify(newData));
      setVoteAlready(true);
    }
  }

  const voteAgain = () => {
    dispatch({
      type: 'SET_DATA',
      property: 'newChange',
      value: false
    });

    setActiveThumb(null);
    setIsDisable(true);
    setVoteAlready(false);
  }


  return (
    <>
      <p className="view-eyebrow"> {
        !voteAlready
          ? `${dateLastUpdated} ago in ${category.charAt(0).toUpperCase() + category.slice(1)}`
          : 'Thank you for your vote!'
      }</p>

      <div className="view-controller-votes">
        {
          !voteAlready && (
            <>
              {
                buttons.map(button => (
                  <button
                    className={`icon-thumb thumb-${button} ${button === activeThumb ? 'active-thumb' : ''}`}
                    key={`button${button}`}
                    onClick={() => { changeActiveThumb(button) }}
                  >
                    <span className={`icon-thumb-${button}`} />
                  </button>
                ))
              }
            </>
          )
        }

        <button
          className={`button-vote ${voteAlready ? 'button-vote-again' : ''}`} disabled={isDisable}
          onClick={() => { !voteAlready ? vote() : voteAgain(); }}
        >
          {!voteAlready ? 'Vote Now' : 'Vote Again'}
        </button>
      </div>
    </>
  )
}

export default ControllerVotes