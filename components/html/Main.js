export default function Main({ children, className, componentClass = true }) {
    return (
      <main className={
       `${componentClass ?
          `
          flex
          min-h-screen
          flex-col
          items-center
          justify-between
          p-24
          ` :
          ""}
        ${className}`
      }
      >
        {children}
      </main>
    );
  }
  