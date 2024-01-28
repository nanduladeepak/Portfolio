import React from 'react';

// mobileDesktopDetector.ts

export const isMobileDevice = (): boolean => {
    const userAgent = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  };
  