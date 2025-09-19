export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 p-4">
      <div className="container md:w-1/2 mx-auto flex justify-between">
        {/* right side */}
        <h3 className="space-x-4">
          Rajit Abdillah <br /> <p className="text-sm">Frontend Developer</p>
        </h3>

        {/* left side */}
        <div className="flex space-x-4">
          <a
            className="text-white hover:text-gray-300" href="https://github.com/Rajit-Abdillah"            
          >
            <i className="fab fa-github text-2xl"></i>
          </a>

          <a
            className="text-white hover:text-gray-300" href="https://www.instagram.com/clash_royale_bowler/"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>

          <a
            className="text-white hover:text-gray-300" href="https://www.linkedin.com/in/rajit-abdillah-5348b6328/"            
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>

          <a
            className="text-white hover:text-gray-300" href="tel:+6285143242897"            
          >
            <i className="fab fa-whatsapp text-2xl"></i>
          </a>
        </div>
      </div>
      <hr className="border-t border-gray-700 mt-8" />
      <div className="container mx-auto text-center mt-8">
        <p>&copy; 2025 Rajit Abdillah. All rights reserved</p>
      </div>
    </footer>
  );
}
