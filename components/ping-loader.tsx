// 'use client';

import { useTheme } from 'next-themes';
import { Ping } from 'ldrs/react';
import 'ldrs/react/Ping.css';

const PingLoader = () => {
  const { theme } = useTheme();

  const pingColor = theme === 'dark' ? 'white' : 'black';

  return (
    <Ping
      size="30"
      speed="5"
      color={pingColor}
    />
  );
};

export default PingLoader;
