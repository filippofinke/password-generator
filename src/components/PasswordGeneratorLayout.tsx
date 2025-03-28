import { ReactNode } from "react";

interface PasswordGeneratorLayoutProps {
  children: ReactNode;
}

export function PasswordGeneratorLayout({
  children,
}: PasswordGeneratorLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Password Generator
        </h1>
        <p className="text-gray-500 mb-6 text-center">
          Create strong, secure passwords
        </p>

        {children}

        <p className="text-xs text-gray-500 mt-6 text-center">
          All passwords are generated locally and never stored or transmitted.
        </p>
      </div>
    </div>
  );
}
