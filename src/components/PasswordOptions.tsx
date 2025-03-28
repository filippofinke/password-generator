import { useTranslation } from "react-i18next";
import { PasswordOptions as PasswordOptionsType } from "../utils/password";
import { LengthSlider } from "./LengthSlider";
import { CharacterTypeCheckbox } from "./CharacterTypeCheckbox";

interface PasswordOptionsProps {
  options: Required<PasswordOptionsType>;
  onOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function PasswordOptions({
  options,
  onOptionChange,
}: PasswordOptionsProps) {
  const { t } = useTranslation();

  return (
    <div className="space-y-6 mb-8 bg-gray-50 p-4 rounded-lg mt-4">
      <LengthSlider
        length={options.length}
        onChange={onOptionChange}
        min={8}
        max={32}
      />
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-gray-600">Character Types</h3>
        <div className="grid grid-cols-2 gap-3">
          <CharacterTypeCheckbox
            name="useUppercase"
            label={t("includeUppercase")}
            checked={options.useUppercase}
            onChange={onOptionChange}
          />
          <CharacterTypeCheckbox
            name="useLowercase"
            label={t("includeLowercase")}
            checked={options.useLowercase}
            onChange={onOptionChange}
          />
          <CharacterTypeCheckbox
            name="useNumbers"
            label={t("includeNumbers")}
            checked={options.useNumbers}
            onChange={onOptionChange}
          />
          <CharacterTypeCheckbox
            name="useSymbols"
            label={t("includeSymbols")}
            checked={options.useSymbols}
            onChange={onOptionChange}
          />
        </div>
      </div>
    </div>
  );
}
