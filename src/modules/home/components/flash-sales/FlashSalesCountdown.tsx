'use client';
import React, { useEffect, useState } from 'react';

const FlashSalesCountdown = ({ date }: { date: string | number | Date }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const targetTime = new Date(date).getTime();
      const difference = targetTime - now;

      return difference > 0
        ? {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          }
        : { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft()); // Set initial state on mount

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [date]);

  if (!timeLeft) return null; // Prevent rendering until mounted

  return (
    <div className="section-header__content">
      <h2 className="mb-10 me-30">Flash Sales</h2>
      <div className="countdown countdown--style1">
        <div className="countdown__block">
          <h5 className="countdown__number">
            {String(timeLeft.days).padStart(2, '0')}
          </h5>
          <p className="countdown__label">Days</p>
        </div>
        <div className="countdown__block">
          <h5 className="countdown__number">
            {String(timeLeft.hours).padStart(2, '0')}
          </h5>
          <p className="countdown__label">Hours</p>
        </div>
        <div className="countdown__block">
          <h5 className="countdown__number">
            {String(timeLeft.minutes).padStart(2, '0')}
          </h5>
          <p className="countdown__label">Mins</p>
        </div>
        <div className="countdown__block">
          <h5 className="countdown__number">
            {String(timeLeft.seconds).padStart(2, '0')}
          </h5>
          <p className="countdown__label">Secs</p>
        </div>
      </div>
    </div>
  );
};

export default FlashSalesCountdown;
