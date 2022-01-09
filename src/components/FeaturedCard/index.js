import useIsMobile from './../../hooks/useIsMobile';

const FeaturedCard = () => {

  const { isMobile } = useIsMobile()

  return (
    <div className="hero-featured-card">
      <div className="container">
        <div className="featured-card">
          <div className="featured-card-information">
            <p className="featured-card-question-opinion">What’s your opinion on</p>
            <h2 className="featured-card-person-name">Pope Francis?</h2>
            <p className="featured-card-person-description">
              He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
            </p>
            {
              !isMobile && (
                <p className="featured-card-more-information">
                  <span className="icon-wikipedia" /> <a href="https://en.wikipedia.org/wiki/Pope_Francis" target='_blank' rel="noreferrer">More information</a>
                </p>
              )
            }
            <p className="featured-card-question-verdict">What’s Your Verdict?</p>
          </div>

          <div className="featured-card-thumbs">
            <div className='thumb-up' ><span className="icon-thumb-up" /></div>
            <div className='thumb-down'><span className="icon-thumb-down" /></div>
          </div>
        </div>

      </div>
      <div className="closing-in-bar">
        <div>closing in</div>
        <div><span>22</span> days</div>
      </div>
    </div>
  );
};

export default FeaturedCard;