const ThumbsGauge = (props) => {
  const {positivePercent, negativePercent} = props

  return (
    <div className='thumbs-gauge'>
      <div className="thumbs-up-gauge" style={{ width: positivePercent }}>
        <p><span className="icon-thumb icon-thumb-up" /> 50%</p>
      </div>
      <div className="thumbs-down-gauge" style={{ width: negativePercent }}>
        <p>50% <span className="icon-thumb icon-thumb-down" /> </p>
      </div>
    </div>
  )
}

export default ThumbsGauge;