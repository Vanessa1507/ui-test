const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="featured-card">
          <div className="featured-card-information">
            <p className="featured-card-question-opinion">What’s your opinion on</p>
            <h2 className="featured-card-person-name">Pope Francis?</h2>
            <p className="featured-card-person-description">
              He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
            </p>
            <p className="featured-card-question-veredict">What’s Your Veredict?</p>
          </div>

          <div className="featured-card-thumbs">
            <span className="icon-thumb-up" />
            <span className="icon-thumb-down" />
          </div>
        </div>

      </div>
      <div className="closing-in-bar">
        <div>closing in</div>
        <div><span>22</span> days</div>
      </div>
    </div>
  )
}

export default Banner;