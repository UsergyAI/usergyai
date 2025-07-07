import { useState, useRef } from 'react';

interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
  lockoutMs: number;
}

export const useRateLimit = (config: RateLimitConfig) => {
  const [isLocked, setIsLocked] = useState(false);
  const [remainingAttempts, setRemainingAttempts] = useState(config.maxAttempts);
  const attemptsRef = useRef<number[]>([]);
  const lockoutTimerRef = useRef<NodeJS.Timeout | null>(null);

  const checkRateLimit = (): boolean => {
    const now = Date.now();

    // Clean old attempts outside the window
    attemptsRef.current = attemptsRef.current.filter(
      time => now - time < config.windowMs
    );

    // Check if already locked out
    if (isLocked) {
      return false;
    }

    // Check if attempts exceed limit
    if (attemptsRef.current.length >= config.maxAttempts) {
      setIsLocked(true);
      setRemainingAttempts(0);

      // Set lockout timer
      lockoutTimerRef.current = setTimeout(() => {
        setIsLocked(false);
        setRemainingAttempts(config.maxAttempts);
        attemptsRef.current = [];
      }, config.lockoutMs);

      return false;
    }

    // Record this attempt
    attemptsRef.current.push(now);
    setRemainingAttempts(config.maxAttempts - attemptsRef.current.length);

    return true;
  };

  const reset = () => {
    attemptsRef.current = [];
    setRemainingAttempts(config.maxAttempts);
    setIsLocked(false);

    if (lockoutTimerRef.current) {
      clearTimeout(lockoutTimerRef.current);
      lockoutTimerRef.current = null;
    }
  };

  return {
    checkRateLimit,
    reset,
    isLocked,
    remainingAttempts
  };
};