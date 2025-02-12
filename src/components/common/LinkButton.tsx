import React from "react";

interface LinkButtonProps {
  icon: React.ReactNode;
  title: string;
  href: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ icon, title, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      // {/* rel: noopener noreferrer */}
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
      onClick={(e) => e.stopPropagation()}
    >
      {icon}
      <span className="font-semibold">{title}</span>
    </a>
  );
};

export default LinkButton;
