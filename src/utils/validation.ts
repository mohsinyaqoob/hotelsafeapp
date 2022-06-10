export const isValidPin = (pin: string) => {
  const safePin = localStorage.getItem("safePin");
  if (pin === safePin) return true;
  return false;
};

export const setNewPin = (newPin: string) => {
  localStorage.setItem("safePin", newPin);
};
