import { useEffect, useState } from 'react';
//Hooks
import useIsMobile from './../../hooks/useIsMobile';
import dataVotes from './../../data/dataVotes';
import GridCard from './views/GridCard';
import getPercent from '../../js/functions/getPercent';
import { useDispatch, useTrackedState } from '../../Store';

const PreviousRulings = () => {
  //Store
  const state = useTrackedState();
  const { people } = state;

  const dispatch = useDispatch();

  //Local states
  const [styleView, setStyleView] = useState('grid');
  const [dataVotesPeople, setDataVotesPeople] = useState([]);

  //Hooks
  const isMobile = useIsMobile();

  useEffect(() => {
    saveDataLocalStorage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  useEffect(() => {
    if (isMobile) {
      changeStyleView('grid');
    };
  }, [isMobile]);


  const saveDataLocalStorage = () => {
    const votes = localStorage.getItem('dataVotes');
    let data = [];

    if (!!votes) {
      data = JSON.parse(localStorage.getItem('dataVotes'));
    } else {
      data = dataVotes;
      localStorage.setItem('dataVotes', JSON.stringify(data));
    };

    data.map((dataPerson, index) => {
      const positiveVotes = dataPerson.votes.positive;
      const negativeVotes = dataPerson.votes.negative;
      const totalVotes = positiveVotes + negativeVotes;

      const positivePercent = `${getPercent({ number: positiveVotes, total: totalVotes })}%`;
      const negativePercent = `${getPercent({ number: negativeVotes, total: totalVotes })}%`;

      const percent = {
        positive: positivePercent,
        negative: negativePercent,
      }

      return data[index] = {
        ...dataPerson,
        percent: percent
      }
    })
console.log(data)
    dispatch({
      type: 'SET_DATA',
      property: 'people',
      value: data
    })
  };


  const changeStyleView = (view) => setStyleView(view);


  return (
    <div className="previous-rulings">
      <div className="container">
        <div className='previous-rulings-tittle'>
          <h2>Previous Rulings</h2>
        </div>
        <div className={`previous-rulings-cards`}>
          {
            !!people && people.lenght !== 0 && people.map(person => {
              return (
                <GridCard
                  person={person}
                  key={person.id}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default PreviousRulings;