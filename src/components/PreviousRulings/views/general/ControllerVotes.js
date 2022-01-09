import { useState } from "react"
import { useDispatch, useTrackedState } from '../../../../Store/index';
import getPercent from './../../../../js/functions/getPercent';

const ControllerVotes = (props) => {
  const { category, id, index, lastUpdated } = props;
  //Store
  const state = useTrackedState();
  const { cards } = state;
  const dispatch = useDispatch();

  //Local state
  const [isDisable, setIsDisable] = useState(true);
  const [activeThumb, setActiveThumb] = useState(null);
  const [voteAlready, setVoteAlready] = useState(false);

  //Const
  const buttons = ['up', 'down'];


  const changeActiveThumb = (value) => {
    setIsDisable(false);
    setActiveThumb(value);
  };


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
          ? `1 month ago in ${category.charAt(0).toUpperCase() + category.slice(1)}`
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