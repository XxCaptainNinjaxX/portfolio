import "./ScrollBlur.css";

export default function ScrollBlur() {
  return (
    <div className="scroll-blur" aria-hidden="true">
      <div className="scroll-blur-layer scroll-blur-near" />
      <div className="scroll-blur-layer scroll-blur-mid" />
      <div className="scroll-blur-layer scroll-blur-far" />
      <div className="scroll-blur-tint" />
    </div>
  );
}
