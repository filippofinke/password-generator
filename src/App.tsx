import { useState, useEffect } from "react";
import {
  generateSecurePassword,
  calculatePasswordStrength,
  PasswordOptions as PasswordOptionsType,
} from "./utils/password";
import {
  PasswordDisplay,
  PasswordOptions,
  GenerateButton,
  PasswordGeneratorLayout,
} from "./components";

function App() {
  const [disabled, setDisabled] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState<string>("");
  const [options, setOptions] = useState<Required<PasswordOptionsType>>({
    length: 16,
    useUppercase: true,
    useLowercase: true,
    useNumbers: true,
    useSymbols: true,
  });

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setOptions({
      ...options,
      [name]: type === "checkbox" ? checked : Number(value),
    });
  };

  const handleGeneratePassword = () => {
    const newPassword = generateSecurePassword(options);
    setPassword(newPassword);
    setPasswordStrength(calculatePasswordStrength(newPassword));
  };

  useEffect(() => {
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
    <PasswordGeneratorLayout>
      <PasswordDisplay
        password={password}
        passwordStrength={passwordStrength}
      />
      <PasswordOptions options={options} onOptionChange={handleOptionChange} />
      <GenerateButton onGenerate={handleGeneratePassword} disabled={disabled} />
    </PasswordGeneratorLayout>
  );
}

export default App;
