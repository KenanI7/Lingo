// Validation
const isValidUsername = (username: string): boolean => {
  return /^[a-zA-Z\s]+$/.test(username);
};

const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isValidPassword = (password: string): boolean => {
  return /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{8,}$/.test(password);
};

export const validateUser = ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) => {
  if (!isValidEmail(email)) {
    return false;
  }

  if (!isValidPassword(password)) {
    return false;
  }

  if (!isValidUsername(username)) {
    return false;
  }

  return true;
};
