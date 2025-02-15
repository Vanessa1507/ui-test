import useIsMobile from './../../hooks/useIsMobile';

const BannerTop = () => {
  const { isDesktop } = useIsMobile();

  return (
    <div className="banner-top">
      <div className="container">
        <div className="banner-top-container">
          <div className="banner-top-tittle">
            <p>Speak out. Be heard. <br /> <span>Be counted</span> </p>
          </div>

          <div className="banner-top-description">
            <p>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</p>
            {isDesktop && <span className="icon-close" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTop;