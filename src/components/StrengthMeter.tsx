import { useTranslation } from "react-i18next";

interface StrengthMeterProps {
  passwordStrength: string;
}

export function StrengthMeter({ passwordStrength }: StrengthMeterProps) {
  const { t } = useTranslation();

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

  const getTranslatedStrength = () => {
    switch (passwordStrength) {
      case "strong":
        return t("strong");
      case "medium":
        return t("medium");
      case "weak":
        return t("weak");
      default:
        return t("tooWeak");
    }
  };

  return (
    <div className="mt-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-gray-500">{t("strength")}</span>
        <span
          className={`text-xs font-medium capitalize ${
            passwordStrength === "strong"
              ? "text-green-600"
              : passwordStrength === "medium"
              ? "text-yellow-600"
              : "text-red-600"
          }`}
        >
          {getTranslatedStrength()}
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
