interface CharacterTypeCheckboxProps {
  name: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CharacterTypeCheckbox({
  name,
  label,
  checked,
  onChange,
}: CharacterTypeCheckboxProps) {
  return (
    <label className="inline-flex items-center p-2 border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="rounded text-blue-500 focus:ring-blue-400"
      />
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  );
}
