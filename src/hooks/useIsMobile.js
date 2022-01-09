import { useEffect, useState } from "react";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1440,
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const setMobile = () => {
      const isMobile = window.innerWidth < breakpoints.md;
      const isTablet = window.innerWidth >= breakpoints.md && window.innerWidth < breakpoints.lg;
      const isDesktop = window.innerWidth >= breakpoints.lg;

      setIsMobile(isMobile)
      setIsTablet(isTablet)
      setIsDesktop(isDesktop)
      // setIsMobile(validation);
    }

    setMobile();
    window.addEventListener('resize', setMobile);
    return () => {
      window.removeEventListener('resize', setMobile);
    }
  }, [])

  return { isMobile, isTablet, isDesktop };
}

export default useIsMobile;