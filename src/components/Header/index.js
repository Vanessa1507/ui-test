import { useState } from 'react';
//Hooks
import useIsMobile from '../../hooks/useIsMobile';

const elementsMenu = [
  { name: 'Past Trials', link: '#' },
  { name: 'How It Works', link: '#' },
  { name: 'Login / Sign Up', link: '#' }
]

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const isMobile = useIsMobile();

  const closeOpenMenu = (value) => setIsShowMenu(value);


  return (
    <header>
      <div className='container'>
        <h1>Rule of thumb.</h1>
        {
          isMobile && (
            <>
              <button onClick={(e) => closeOpenMenu(e, true)}>
                <span className='icon-menu' />
              </button>
              {
                isShowMenu && (
                  <>
                    <div className='mobile-menu-background' onClick={() => closeOpenMenu(false)} />
                    <ul className='mobile-menu'>
                      <li>
                        <form className='mobile-menu-search' onSubmit={e => e.preventDefault()}>
                          <input type='text' />
                          <button>
                            <span className='icon-search' />
                          </button>
                        </form>
                      </li>
                      {
                        !!elementsMenu && elementsMenu.length &&
                        elementsMenu.map(link => (
                          <li onClick={() => closeOpenMenu(false)} >
                            <a href={link.link}>{link.name}</a>
                          </li>
                        ))
                      }
                    </ul>
                  </>
                )
              }
            </>
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
  );
};

export default Header;