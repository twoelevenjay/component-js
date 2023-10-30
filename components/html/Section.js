export default function Section({ children, className, componentClass = true }) {
    return (
      <section className={
       `${componentClass ?
          `
          z-10
          max-w-5xl
          w-full
          items-center
          justify-between
          font-mono
          text-sm
          lg:flex
          ` :
          ""}
        ${className}`
      }
      >
        {children}
      </section>
    );
  }
  