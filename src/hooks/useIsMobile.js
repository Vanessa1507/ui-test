import { useEffect, useState } from "react";

const useIsMobile = () => {

  const mobile = 768;
  const [isMobile, setIsMobile] = useState(window.innerWidth < mobile ? true : false);

  useEffect(() => { 
    const setMobile = () => {
      let validation = window.innerWidth < mobile ? true : false;
      setIsMobile(validation);
    }

    setMobile();
    window.addEventListener('resize', setMobile);
    return () => {
      window.removeEventListener('resize', setMobile);
    }
  }, [])

  return isMobile;
}

export default useIsMobile;