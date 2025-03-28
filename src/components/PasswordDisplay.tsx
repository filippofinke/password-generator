import { CopyButton } from "./CopyButton";
import { StrengthMeter } from "./StrengthMeter";

interface PasswordDisplayProps {
  password: string;
  passwordStrength: string;
}

export function PasswordDisplay({
  password,
  passwordStrength,
}: PasswordDisplayProps) {
  return (
    <div className="mt-6">
      <div className="p-3 bg-gray-100 rounded-md flex items-center">
        <div className="overflow-x-auto whitespace-nowrap flex-grow">
          <span className="font-mono select-all">
            {password || "Click Generate to create a password"}
          </span>
        </div>
        <CopyButton text={password} disabled={!password} />
      </div>
      {password && <StrengthMeter passwordStrength={passwordStrength} />}
    </div>
  );
}
