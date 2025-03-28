export interface PasswordOptions {
  length: number;
  useUppercase?: boolean;
  useLowercase?: boolean;
  useNumbers?: boolean;
  useSymbols?: boolean;
}

export function generateSecurePassword({
  length,
  useUppercase = false,
  useLowercase = false,
  useNumbers = false,
  useSymbols = false,
}: PasswordOptions): string {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*";

  let validChars = "";
  if (useUppercase) validChars += uppercaseChars;
  if (useLowercase) validChars += lowercaseChars;
  if (useNumbers) validChars += numberChars;
  if (useSymbols) validChars += symbolChars;

  if (!validChars) {
    throw new Error("At least one character set must be enabled");
  }

  const passwordArray = new Uint8Array(length);
  crypto.getRandomValues(passwordArray);

  return Array.from(
    passwordArray,
    (byte) => validChars[byte % validChars.length]
  ).join("");
}

export function calculatePasswordStrength(password: string): string {
  if (!password) return "";

  let score = 0;
  // Length check
  if (password.length >= 12) score += 2;
  else if (password.length >= 8) score += 1;

  // Character variety checks
  if (/[A-Z]/.test(password)) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  if (score >= 5) return "strong";
  if (score >= 3) return "medium";
  return "weak";
}
