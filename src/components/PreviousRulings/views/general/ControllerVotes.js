import { useState } from "react"
import { useDispatch, useTrackedState } from '../../../../Store/index';
import getPercent from './../../../../js/functions/getPercent';

const ControllerVotes = (props) => {
  const { id, index } = props;
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

  const setUpInitialStateVote = () => {
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
    <div className="view-grid-controller-votes">
      {
        !voteAlready && (
          <>
            {
              buttons.map(button => (
                <button onClick={() => { changeActiveThumb(button) }} key={`button${button}`}>
                  <span className={`icon-thumb icon-thumb-${button} ${button === activeThumb ? 'active-thumb' : ''}`} />
                </button>
              ))
            }
            <button className="button-vote" disabled={isDisable} onClick={vote}>
              Vote Now
            </button>
          </>
        )
      }

      {
        voteAlready && (
          <button className="button-vote" onClick={setUpInitialStateVote}>
            Vote Again
          </button>
        )
      }
    </div>
  )
}

export default ControllerVotes