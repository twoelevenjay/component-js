export default function H1({ children, className, componentClass = true }) {
  return (
    <h1 className={
     `${componentClass ?
        `
        flex
        w-full 
        justify-center
        text-4xl
        border-b
        border-gray-300
        bg-gradient-to-b
        from-zinc-200
        pb-6
        pt-8
        backdrop-blur-2xl
        dark:border-neutral-800
        dark:bg-zinc-800/30
        dark:from-inherit
        lg:static
        lg:w-auto 
        lg:rounded-xl
        lg:border
        lg:bg-gray-200
        lg:p-4
        lg:dark:bg-zinc-800/30 ` :
        ""}
      ${className}`
    }
    >
      {children}
    </h1>
  );
}
