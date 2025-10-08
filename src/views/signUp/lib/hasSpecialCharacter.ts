const hasSpecialCharacter = (text: string): boolean => {
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  return specialCharRegex.test(text);
};

export default hasSpecialCharacter;
