import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  generateSecurePassword,
  calculatePasswordStrength,
  PasswordOptions as PasswordOptionsType,
} from "./utils/password";
import {
  saveOptionsToLocalStorage,
  getOptionsFromLocalStorage,
} from "./utils/localStorage";
import {
  PasswordDisplay,
  PasswordOptions,
  GenerateButton,
  PasswordGeneratorLayout,
} from "./components";
import LanguageSwitcher from "./components/LanguageSwitcher";

const defaultOptions: Required<PasswordOptionsType> = {
  length: 16,
  useUppercase: true,
  useLowercase: true,
  useNumbers: true,
  useSymbols: true,
};

const loadInitialOptions = (): Required<PasswordOptionsType> => ({
  ...defaultOptions,
  ...(getOptionsFromLocalStorage() ?? {}),
});

const hasCharacterSet = (options: Required<PasswordOptionsType>) =>
  options.useUppercase ||
  options.useLowercase ||
  options.useNumbers ||
  options.useSymbols;

function App() {
  const { t } = useTranslation();
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState<string>("");

  const [options, setOptions] =
    useState<Required<PasswordOptionsType>>(loadInitialOptions);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const updatedOptions = {
      ...options,
      [name]: type === "checkbox" ? checked : Number(value),
    };
    setOptions(updatedOptions);
    saveOptionsToLocalStorage(updatedOptions);
  };

  const generatePassword = (opts: Required<PasswordOptionsType>) => {
    if (!hasCharacterSet(opts)) return;
    const newPassword = generateSecurePassword(opts);
    setPassword(newPassword);
    setPasswordStrength(calculatePasswordStrength(newPassword));
  };

  const handleGeneratePassword = () => generatePassword(options);

  // Generate a new password on first load (using the options restored from
  // localStorage) and whenever the settings change, so the shown password
  // always matches the current settings.
  useEffect(() => {
    generatePassword(options);
  }, [options]);

  const disabled = !hasCharacterSet(options);

  return (
    <>
      <LanguageSwitcher />
      <PasswordGeneratorLayout>
        <PasswordDisplay
          password={password}
          passwordStrength={passwordStrength}
        />
        <PasswordOptions
          options={options}
          onOptionChange={handleOptionChange}
        />
        <GenerateButton
          onGenerate={handleGeneratePassword}
          disabled={disabled}
          errorMessage={disabled ? t("selectAtLeastOne") : ""}
        />
      </PasswordGeneratorLayout>
    </>
  );
}

export default App;
