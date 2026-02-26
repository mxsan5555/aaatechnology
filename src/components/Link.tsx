import { forwardRef } from "react";
import type { AnchorHTMLAttributes } from "react";

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, children, className = "", ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";

export default Link;