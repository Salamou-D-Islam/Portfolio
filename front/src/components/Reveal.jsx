import { useInView } from "react-intersection-observer";

function Reveal({ children }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {children}
    </div>
  );
}

export default Reveal;
