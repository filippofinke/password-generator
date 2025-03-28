interface StrengthMeterProps {
  passwordStrength: string;
}

export function StrengthMeter({ passwordStrength }: StrengthMeterProps) {
  const getStrengthColor = () => {
    switch (passwordStrength) {
      case "strong":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "weak":
        return "bg-red-500";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div className="mt-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-gray-500">Password Strength</span>
        <span
          className={`text-xs font-medium capitalize ${
            passwordStrength === "strong"
              ? "text-green-600"
              : passwordStrength === "medium"
              ? "text-yellow-600"
              : "text-red-600"
          }`}
        >
          {passwordStrength}
        </span>
      </div>
      <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${getStrengthColor()}`}
          style={{
            width:
              passwordStrength === "strong"
                ? "100%"
                : passwordStrength === "medium"
                ? "66%"
                : "33%",
          }}
        ></div>
      </div>
    </div>
  );
}
