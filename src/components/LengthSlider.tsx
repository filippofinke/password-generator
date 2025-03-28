interface LengthSliderProps {
  length: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
}

export function LengthSlider({
  length,
  onChange,
  min = 8,
  max = 32,
}: LengthSliderProps) {
  return (
    <div>
      <div className="flex justify-between items-center text-gray-700 mb-1">
        <span className="font-medium">Length: {length}</span>
        <span className="text-xs text-gray-500">{length} characters</span>
      </div>
      <input
        type="range"
        name="length"
        min={min}
        max={max}
        value={length}
        onChange={onChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
      />
    </div>
  );
}
