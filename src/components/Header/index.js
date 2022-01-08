//Hooks
import useIsMobile from '../../hooks/useIsMobile';

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header>
      <div className='container'>
        <h1>Rule of thumb.</h1>
        {
          isMobile && (
            <button>
              <span className='icon-menu' />
            </button>
          )
        }
        {
          !isMobile && (
            <button>
              <span className='icon-menu' />
            </button>
          )
        }
      </div>
    </header>
  )
}

export default Header