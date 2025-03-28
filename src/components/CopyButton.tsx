import { useState } from "react";
import { useTranslation } from "react-i18next";
import { copyToClipboard } from "../utils/clipboard";

interface CopyButtonProps {
  text: string;
  disabled?: boolean;
}

export function CopyButton({ text, disabled = false }: CopyButtonProps) {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    if (text) {
      copyToClipboard(text)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy:", err);
          alert("Failed to copy to clipboard");
        });
    }
  };

  return (
    <button
      onClick={handleCopyToClipboard}
      disabled={disabled}
      className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-md disabled:opacity-50 transition duration-200 text-sm font-medium flex-shrink-0 cursor-pointer"
      title={t("copyToClipboard")}
    >
      {copied ? t("copied") : t("copyToClipboard")}
    </button>
  );
}
