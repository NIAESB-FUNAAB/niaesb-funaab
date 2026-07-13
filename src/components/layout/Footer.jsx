const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t-4 border-niaesb-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        <div>
          <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2">
            NIAESB
          </h3>
          <p className="text-sm text-gray-400 max-w-xs">
            Nigerian Institution of Agricultural Engineering Student Body. Cultivating technical excellence.
          </p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="hover:text-niaesb-green transition-colors">Twitter</a>
          <a href="#" className="hover:text-niaesb-green transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-niaesb-green transition-colors">Instagram</a>
        </div>
      </div>
      
      <div className="mt-12 text-center text-sm text-gray-500">
        &copy; {currentYear} NIAESB. All rights reserved. Built for the future of agriculture.
      </div>
    </footer>
  );
};

export default Footer;