/**
 * All utility functions below
 */

export const isValidPin = (pin: string) => {
  const safePin = localStorage.getItem("safePin");
  if (pin === safePin) return true;
  return false;
};
