import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-gray-900">
              Portfolio
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="/portfolio" className="text-gray-700 hover:text-gray-900">
              Portfolio
            </a>
            <a href="/blog" className="text-gray-700 hover:text-gray-900">
              Blog
            </a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <a
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="/portfolio"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Portfolio
            </a>
            <a
              href="/blog"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Blog
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;