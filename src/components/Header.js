//Hooks
import useIsMobile from './../hooks/useIsMobile';

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className=''>
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
    </header>
  )
}

export default Header