import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Leaderboard from '../../components/Leaderboard';

export default function LeaderboardPage() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(screen.width);
    setHeight(screen.height);
  }, []);

  return (
    <>
      <Header />
      <section>
        <Leaderboard width={width} height={height} />
      </section>
    </>
  );
}