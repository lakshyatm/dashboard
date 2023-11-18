import React, { useEffect } from 'react';

const InfiniteScroll = ({ onScroll }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        onScroll();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onScroll]);

  return <div className="infinite-scroll">Loading...</div>; // You can add a loading indicator
};

export default InfiniteScroll;
