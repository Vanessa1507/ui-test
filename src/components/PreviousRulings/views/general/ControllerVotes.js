import { useState } from "react"

const ControllerVotes = () => {

  const [isDisable, setIsDisable] = useState(true);
  const [activeThumb, setActiveThumb] = useState(null);

  const buttons = ['up', 'down'];


  const changeActiveThumb = (value) => {
    setIsDisable(false);
    setActiveThumb(value);
  };



  return (
    <div className="view-grid-controller-votes">
      {
        buttons.map(button => (
          <button onClick={() => { changeActiveThumb(button) }}>
            <span className={`icon-thumb icon-thumb-${button} ${button === activeThumb ? 'active-thumb' : ''}`} />
          </button>
        ))
      }

      <button className="button-vote" disabled={isDisable}>
        Vote Now
      </button>
    </div>
  )
}

export default ControllerVotes