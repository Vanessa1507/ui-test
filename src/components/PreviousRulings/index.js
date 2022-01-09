import { useEffect, useState } from 'react';
//Hooks
import useIsMobile from './../../hooks/useIsMobile';
import dataVotes from './../../data/dataVotes';
import GridCard from './views/GridCard';

const PreviousRulings = () => {
  const [styleView, setStyleView] = useState('grid');
  const [dataVotesPeople, setDataVotesPeople] = useState([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    saveDataLocalStorage();
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



    setDataVotesPeople(data);
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
            dataVotesPeople.map(person => {
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