const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800 py-6 text-center text-gray-400 text-sm">
      © {new Date().getFullYear()} CodeQuest. All rights reserved.
    </footer>
  );
};

export default Footer;