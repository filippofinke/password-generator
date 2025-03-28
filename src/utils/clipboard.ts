/**
 * Copies the provided text to the clipboard
 * @param text The text to copy to clipboard
 * @returns A promise that resolves when the text has been copied
 */
export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}
