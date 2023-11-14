import { differenceInDays } from 'date-fns';

export const daysLeft = (deadline) => {
    const deadlineDate = new Date(deadline);
    const remainingDays = differenceInDays(deadlineDate, new Date());

    return Math.max(remainingDays, 0);
};
  
  export const calculateBarPercentage = (goal, raisedAmount) => {
    const percentage = Math.round((raisedAmount * 100) / goal);
  
    return percentage;
  };
  
  export const checkIfImage = (url, callback) => {
    const img = new Image();
    img.src = url;
  
    if (img.complete) callback(true);
  
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
  };
  