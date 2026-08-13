import { Link } from 'react-router-dom' 
import { Palette, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react' 
 
export default function Footer() { 
return ( 
<footer className="bg-gray-900 text-white"> 
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> 
<div className="grid grid-cols-1 md:grid-cols-4 gap-8"> 
 
<div className="col-span-1 md:col-span-2"> 
<Link to="/" className="flex items-center space-x-2 mb-4"> 
<Palette className="h-8 w-8 text-purple-400" /> 
<span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text
transparent">ArtVista</span> 
</Link> 
<p className="text-gray-300 mb-6 max-w-md">Discover and collect extraordinary artworks from 
talented artists around the world. ArtVista is your gateway to the finest contemporary and classical art 
pieces.</p> 
<div className="flex space-x-4"> 
<Facebook className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer transition
colors" /> 
<Twitter className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" 
/> 
<Instagram className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer transition
colors" /> 
</div> 
</div> 
 
<div> 
<h3 className="text-lg font-semibold mb-4">Quick Links</h3> 
<ul className="space-y-2"> 
<li><Link to="/" className="text-gray-300 hover:text-purple-400 transition
colors">Home</Link></li> 
<li><Link to="/gallery" className="text-gray-300 hover:text-purple-400 transition
colors">Gallery</Link></li> 
<li><Link to="/about" className="text-gray-300 hover:text-purple-400 transition
colors">About</Link></li> 
 
<li><Link to="/contact" className="text-gray-300 hover:text-purple-400 transition
colors">Contact</Link></li> 
</ul> 
</div> 
 
<div> 
<h3 className="text-lg font-semibold mb-4">Contact Info</h3> 
<div className="space-y-3"> 
<div className="flex items-center space-x-3"> 
<Mail className="h-5 w-5 text-purple-400" /> 
<span className="text-gray-300">info@artvista.com</span> 
</div> 
<div className="flex items-center space-x-3"> 
<Phone className="h-5 w-5 text-purple-400" /> 
<span className="text-gray-300">+1 (555) 123-4567</span> 
</div> 
<div className="flex items-center space-x-3"> 
<MapPin className="h-5 w-5 text-purple-400" /> 
<span className="text-gray-300">123 Art Street, Creative City</span> 
</div> 
</div> 
</div> 
 
</div> 
<div className="border-t border-gray-800 mt-8 pt-8 text-center"> 
<p className="text-gray-400">© 2024 ArtVista. All rights reserved. | Privacy Policy | Terms of 
Service</p> 
</div> 
</div> 
</footer> 
) 
}