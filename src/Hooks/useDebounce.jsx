import React, { useEffect, useRef } from "react";

const useDebouncedHook = (callback, delay = 300, dependencies = []) => {
  const intervalRef = useRef(null);

  useEffect(() => {
    if (intervalRef.current) {
      clearTimeout(intervalRef.current);
    }
    intervalRef.current = setTimeout(() => {
      callback();
    }, delay);
    return () => clearTimeout(intervalRef.current);
  }, [...dependencies]);
};

export default useDebouncedHook;
