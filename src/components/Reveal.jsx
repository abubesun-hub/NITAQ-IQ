import useInView from '../hooks/useInView';

const hiddenTransform = {
  up: 'translateY(2.5rem)',
  down: 'translateY(-2.5rem)',
  left: 'translateX(-2.5rem)',
  right: 'translateX(2.5rem)',
  none: 'none',
};

export default function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : hiddenTransform[direction],
      }}
      className={`transition-all duration-700 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
