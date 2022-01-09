const ThumbsGauge = (props) => {
  const { positivePercent, negativePercent } = props

  return (
    <div className='thumbs-gauge'>
      <div className='thumbs-gauge-values'>
        <p><span className="icon-thumb icon-thumb-up" /> {positivePercent}</p>
        <p>{negativePercent} <span className="icon-thumb icon-thumb-down" /> </p>
      </div>
      <div className="thumbs-up-gauge" style={{ width: positivePercent }}/>
      <div className="thumbs-down-gauge" style={{ width: negativePercent }}/>
    </div>
  )
}

export default ThumbsGauge;