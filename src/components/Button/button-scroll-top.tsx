import styles from "./button.module.css";
import { useState, useEffect } from 'react';
import Button from './button';
import { IconArrowUp } from "@tabler/icons-react";

function ButtonScrollTop () {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 300); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button onClick={scrollToTop} 
      className={styles["button-scroll-top"]}      
      style={{
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? 'auto' : 'none', 
      }}>
      <IconArrowUp/>
    </Button>
  );
};

export default ButtonScrollTop;