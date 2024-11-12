const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Firebase. All Rights Reserved.</p>
        <p>
          <a href="#" className="text-gray-300 hover:text-white">
            Privacy Policy
          </a>{" "}
          |
          <a href="#" className="text-gray-300 hover:text-white">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
