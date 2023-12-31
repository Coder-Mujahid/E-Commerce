import { useState, useEffect } from 'react';

const SaleCountdown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set the sale end date (replace with your actual sale end date)
  const saleEndDate = new Date('2023-12-31T23:59:59');

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const difference = saleEndDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        // Sale has ended
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const countdownInterval = setInterval(calculateCountdown, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(countdownInterval);
  }, [saleEndDate]);

  return (
    <div className=' lg:flex items-center gap-4 '>
      <h1 className=' lg:text-xl font-semibold capitalize text-orange-600'>Sale Ends In 》</h1>
      <div className=' lg:flex flex-col lg:flex-row md:gap-2 items-center justify-center mb-2 xl:text-2xl font-medium '>
        <span>{countdown.days} days :</span>
        <span>{countdown.hours} hours :</span>
        <span>{countdown.minutes} minutes :</span>
        <span>{countdown.seconds} seconds</span>
      </div>
    </div>
  );
};

export default SaleCountdown;
