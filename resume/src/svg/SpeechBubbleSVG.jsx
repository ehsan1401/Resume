const SpeechBubbleBox = ({ children, className = "", ...props }) => (
  <p
    className={`rounded-xl border-2 border-gray-300 bg-white shadow-lg p-6 text-center ${className}`}
    style={{ minWidth: 200, minHeight: 80, ...props.style }}
    {...props}
  >
    {children}
  </p>
);

export default SpeechBubbleBox;
