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

function App() {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState<string>("");

  const defaultOptions: Required<PasswordOptionsType> = {
    length: 16,
    useUppercase: true,
    useLowercase: true,
    useNumbers: true,
    useSymbols: true,
  };

  const [options, setOptions] =
    useState<Required<PasswordOptionsType>>(defaultOptions);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const updatedOptions = {
      ...options,
      [name]: type === "checkbox" ? checked : Number(value),
    };
    setOptions(updatedOptions);
    saveOptionsToLocalStorage(updatedOptions);
  };

  const handleGeneratePassword = () => {
    const newPassword = generateSecurePassword(options);
    setPassword(newPassword);
    setPasswordStrength(calculatePasswordStrength(newPassword));
  };

  useEffect(() => {
    const savedOptions = getOptionsFromLocalStorage();
    if (savedOptions) {
      setOptions(savedOptions);
    }
    handleGeneratePassword();
  }, []);

  useEffect(() => {
    const isDisabled =
      !options.useUppercase &&
      !options.useLowercase &&
      !options.useNumbers &&
      !options.useSymbols;
    setDisabled(isDisabled);
  }, [options]);

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
