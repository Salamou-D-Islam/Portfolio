function ContactLink({ children, href, target, title, onClick, className }) {
  return (
    <a
      href={href}
      onClick={onClick}
      title={title}
      className={`hover:scale-120 transition-all ${className}`}
      target="_blank"
    >
      {children}
    </a>
  );
}

export default ContactLink;
