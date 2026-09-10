import type { ReactNode } from "react";
import { Container } from "./container";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <Container className="pb-10 pt-14 sm:pb-14 sm:pt-20">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-pine-700">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600">
          {description}
        </p>
      )}
      {children}
    </Container>
  );
}