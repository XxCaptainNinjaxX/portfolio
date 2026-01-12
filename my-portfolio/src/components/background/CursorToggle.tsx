import "./ThemeToggle.css";

// 1. Define the props
interface ToggleProps {
  isActive: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isActive, onToggle }: ToggleProps) {
  return (
    <div className="container">
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        checked={isActive}
        onChange={onToggle}
      />
      <label htmlFor="checkbox" className="label">
        {}
      </label>
    </div>
  );
}
