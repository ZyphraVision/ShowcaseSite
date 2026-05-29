import { type ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit';
}

/**
 * HUD action control — a bracketed, monospace command button. The primary
 * variant reads like an engaged target; ghost reads like a selectable option.
 */
export default function GlowButton({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  type = 'button',
}: GlowButtonProps) {
  const base =
    'group relative inline-flex items-center justify-center font-mono uppercase tracking-widest ' +
    'transition-all duration-200 select-none';

  const sizeStyles = {
    sm: 'px-4 py-2 text-[11px]',
    md: 'px-6 py-3 text-xs',
    lg: 'px-8 py-4 text-sm',
  };

  const variantStyles = {
    primary:
      'bg-accent text-white shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5',
    ghost:
      'bg-transparent border border-border text-text-primary ' +
      'hover:border-scan/50 hover:text-scan hover:bg-scan/5',
  };

  const combined = `${base} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const corners = (
    <>
      <span className="pointer-events-none absolute -top-px -left-px h-2 w-2 border-t border-l border-current opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      <span className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-b border-r border-current opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
    </>
  );

  if (href) {
    return (
      <a href={href} className={combined}>
        {corners}
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combined}>
      {corners}
      {children}
    </button>
  );
}
