import { PasswordOptions } from "./password";

const OPTIONS_KEY = "password_generator_options";

export const saveOptionsToLocalStorage = (
  options: Required<PasswordOptions>
): void => {
  try {
    localStorage.setItem(OPTIONS_KEY, JSON.stringify(options));
  } catch (error) {
    console.error("Failed to save options to localStorage:", error);
  }
};

export const getOptionsFromLocalStorage =
  (): Required<PasswordOptions> | null => {
    try {
      const savedOptions = localStorage.getItem(OPTIONS_KEY);
      return savedOptions ? JSON.parse(savedOptions) : null;
    } catch (error) {
      console.error("Failed to get options from localStorage:", error);
      return null;
    }
  };
