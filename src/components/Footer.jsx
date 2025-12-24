import React from 'react';
import { Camera, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from './ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = (platform) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: `${platform} integration coming soon!`
    });
  };

  const socialLinks = [
    { icon: Instagram, name: 'Instagram' },
    { icon: Facebook, name: 'Facebook' },
    { icon: Twitter, name: 'Twitter' },
    { icon: Linkedin, name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
              <span className="text-lg sm:text-xl font-bold text-white">PixelStory</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              Creating stunning visual narratives through professional photography services.
            </p>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block text-base sm:text-lg">Quick Links</span>
            <nav className="space-y-2">
              {['About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => toast({
                    title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
                  })}
                  className="block text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm sm:text-base"
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block text-base sm:text-lg">Follow Us</span>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.button
                    key={social.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSocialClick(social.name)}
                    className="bg-slate-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 p-3 rounded-lg transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-200" />
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © {new Date().getFullYear()} PixelStory Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;