import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="absolute top-4 right-4">
      <select
        id="language-select"
        onChange={changeLanguage}
        value={i18n.language}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 cursor-pointer hover:bg-gray-100 transition-colors"
      >
        <option value="en">English</option>
        <option value="it">Italiano</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
