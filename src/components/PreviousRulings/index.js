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
  const { cards, newChange } = state;
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
    setDataVotesPeople(cards)
  }, [cards, newChange])

  useEffect(() => {
    if (isMobile) {
      changeStyleView('grid');
    };
  }, [isMobile]);


  const saveDataLocalStorage = () => {
    const votes = localStorage.getItem('dataVotes');
    let data = [];

    if (!!votes && !!JSON.parse(votes)) {
      data = JSON.parse(votes);
    } else {
      data = dataVotes;
    };

    const dataVote = [];
    data.map((dataPerson, index) => {
      const values = dataPerson.votes;
      const percent = getPercent({ values });

      return dataVote.push(data[index] = {
        ...dataPerson,
        percent: percent
      })
    })

    localStorage.setItem('dataVotes', JSON.stringify(dataVote));
    setDataVotesPeople(dataVote);

    dispatch({
      type: 'SET_DATA',
      property: 'cards',
      value: dataVote
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
            !!dataVotesPeople && dataVotesPeople.lenght !== 0 && (
              <>
                {
                  styleView === 'grid' && dataVotesPeople.map((card, index) => {
                    return (
                      <GridCard
                        index={index}
                        card={card}
                        key={index}
                      />
                    )
                  })
                }
              </>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default PreviousRulings;