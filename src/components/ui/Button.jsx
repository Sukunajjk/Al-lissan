import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40',
  secondary: 'bg-white text-primary-700 border-2 border-primary-600 hover:bg-primary-50',
  outline: 'bg-transparent text-white border-2 border-white/80 hover:bg-white/10',
  ghost: 'bg-transparent text-primary-700 hover:bg-primary-50',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({ children, variant = 'primary', size = 'md', to, href, className = '', ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
  }

  return <button className={classes} {...props}>{children}</button>;
}
