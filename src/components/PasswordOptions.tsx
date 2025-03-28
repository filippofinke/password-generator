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
  return (
    <div className="space-y-6 mb-8 bg-gray-50 p-4 rounded-lg">
      <h2 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-2">
        Password Options
      </h2>

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
            label="Uppercase (A-Z)"
            checked={options.useUppercase}
            onChange={onOptionChange}
          />

          <CharacterTypeCheckbox
            name="useLowercase"
            label="Lowercase (a-z)"
            checked={options.useLowercase}
            onChange={onOptionChange}
          />

          <CharacterTypeCheckbox
            name="useNumbers"
            label="Numbers (0-9)"
            checked={options.useNumbers}
            onChange={onOptionChange}
          />

          <CharacterTypeCheckbox
            name="useSymbols"
            label="Symbols (!@#$)"
            checked={options.useSymbols}
            onChange={onOptionChange}
          />
        </div>
      </div>
    </div>
  );
}
