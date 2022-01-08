const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-container-information">
          <div className="banner-information">
            <p className="banner-question-opinion">What’s your opinion on</p>
            <h2 className="banner-person-name">Pope Francis?</h2>
            <p className="banner-person-description">
              He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
            </p>
            <p className="banner-question-veredict">What’s Your Veredict?</p>
          </div>

          <div className="banner-thumbs">
            <span className="icon-thumb-up" />
            <span className="icon-thumb-down" />
          </div>
        </div>

      </div>
      <div className="banner-time-remainder">
        <div>closing in</div>
        <div><span>22</span> days</div>
      </div>
    </div>
  )
}

export default Banner;