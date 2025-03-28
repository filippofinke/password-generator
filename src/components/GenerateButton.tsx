import { useTranslation } from "react-i18next";

interface GenerateButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onGenerate: () => void;
  errorMessage?: string;
}

export function GenerateButton({
  onGenerate,
  errorMessage,
  ...rest
}: GenerateButtonProps) {
  const { t } = useTranslation();

  return (
    <div className="generate-button-container">
      {errorMessage && (
        <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
      )}
      <button
        {...rest}
        onClick={onGenerate}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400 text-white py-4 px-6 rounded-lg font-medium transition duration-200 shadow-md hover:shadow-lg disabled:shadow-none flex items-center justify-center cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        {t("generate")}
      </button>
    </div>
  );
}
