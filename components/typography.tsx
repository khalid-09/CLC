type Props = {
  children: React.ReactNode;
  styles?: string;
};

export function H1({ children, styles }: Props) {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${styles}`}
    >
      {children}
    </h1>
  );
}

export function H2({ children, styles }: Props) {
  return (
    <h2
      className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${styles}}`}
    >
      {children}
    </h2>
  );
}

export function H3({ children, styles }: Props) {
  return (
    <h3
      className={`scroll-m-20 text-center text-2xl font-semibold tracking-tight ${styles}}`}
    >
      {children}
    </h3>
  );
}

export function H4({ children, styles }: Props) {
  return (
    <h4
      className={`scroll-m-20 text-xl font-semibold tracking-tight ${styles}}`}
    >
      {children}
    </h4>
  );
}

export function P({ children, styles }: Props) {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 ${styles}`}>
      {children}
    </p>
  );
}
