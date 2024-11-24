export const emailValidation = {
  test: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  message: "Please enter a valid email address"
};

export const passwordValidation = [
  {
    test: (value: string) => value.length >= 8,
    message: "Password must be at least 8 characters long"
  },
  {
    test: (value: string) => /[A-Z]/.test(value),
    message: "Password must contain at least one uppercase letter"
  },
  {
    test: (value: string) => /[a-z]/.test(value),
    message: "Password must contain at least one lowercase letter"
  },
  {
    test: (value: string) => /[0-9]/.test(value),
    message: "Password must contain at least one number"
  },
  {
    test: (value: string) => /[^A-Za-z0-9]/.test(value),
    message: "Password must contain at least one special character"
  }
];

export const phoneValidation = {
  test: (value: string) => /^\+?[\d\s-]{10,}$/.test(value),
  message: "Please enter a valid phone number"
};

export const urlValidation = {
  test: (value: string) => /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(value),
  message: "Please enter a valid URL"
};

export const numberValidation = {
  test: (value: string) => !isNaN(Number(value)),
  message: "Please enter a valid number"
};