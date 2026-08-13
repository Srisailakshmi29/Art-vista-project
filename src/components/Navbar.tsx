 
import { useState } from 'react' 
import { Link, useLocation, useNavigate } from 'react-router-dom' 
import { Button } from '@/components/ui/button' 
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet' 
import { Menu, Palette, User, LogOut } from 'lucide-react' 
import { useAuth } from '@/contexts/AuthContext' 
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } 
from '@/components/ui/dropdown-menu' 
 
export default function Navbar() { 
const [isOpen, setIsOpen] = useState(false) 
 
const location = useLocation() 
const navigate = useNavigate() 
const { user, logout } = useAuth() 
 
const navItems = [ 
{ name: 'Home', path: '/' }, 
{ name: 'Gallery', path: '/gallery' }, 
{ name: 'About', path: '/about' }, 
{ name: 'Contact', path: '/contact' }, 
] 
 
const handleLogout = () => { 
logout() 
navigate('/') 
} 
 
return ( 
<nav className="bg-white shadow-lg sticky top-0 z-50"> 
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
<div className="flex justify-between items-center h-16"> 
<Link to="/" className="flex items-center space-x-2"> 
<Palette className="h-8 w-8 text-purple-600" /> 
<span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text
transparent">ArtVista</span> 
</Link> 
<div className="hidden md:flex items-center space-x-8"> 
{navItems.map((item) => ( 
<Link key={item.name} to={item.path} className={`text-gray-700 hover:text-purple-600 
transition-colors font-medium ${location.pathname === item.path ? 'text-purple-600 border-b-2 
border-purple-600' : ''}`}>{item.name}</Link> 
))} 
</div> 
<div className="hidden md:flex items-center space-x-4"> 
{user ? ( 
<DropdownMenu> 
<DropdownMenuTrigger asChild> 
<Button variant="outline" className="flex items-center space-x-2"> 
<User className="h-4 w-4" /> 
<span>{user.name || user.email}</span> 
</Button> 
</DropdownMenuTrigger> 
<DropdownMenuContent align="end"> 
<DropdownMenuItem onClick={handleLogout}> 
<LogOut className="h-4 w-4 mr-2" /> 
Logout 
</DropdownMenuItem> 
</DropdownMenuContent> 
</DropdownMenu> 
 
) : ( 
<> 
<Button variant="outline" asChild> 
<Link to="/login">Login</Link> 
</Button> 
<Button asChild> 
<Link to="/signup">Sign Up</Link> 
</Button> 
</> 
)} 
</div> 
<Sheet open={isOpen} onOpenChange={setIsOpen}> 
<SheetTrigger asChild> 
<Button variant="outline" size="icon" className="md:hidden"> 
<Menu className="h-6 w-6" /> 
</Button> 
</SheetTrigger> 
<SheetContent side="right" className="w-[300px] sm:w-[400px]"> 
<div className="flex flex-col space-y-4 mt-8"> 
{navItems.map((item) => ( 
<Link key={item.name} to={item.path} className={`text-lg font-medium transition-colors 
${location.pathname === item.path ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`} 
onClick={() => setIsOpen(false)}>{item.name}</Link> 
))} 
<div className="pt-4 border-t"> 
{user ? ( 
<div className="space-y-2"> 
<p className="text-sm text-gray-600">Welcome, {user.name || user.email}</p> 
<Button variant="outline" onClick={handleLogout} className="w-full"> 
<LogOut className="h-4 w-4 mr-2" /> 
Logout 
</Button> 
</div> 
) : ( 
<div className="space-y-2"> 
<Button variant="outline" asChild className="w-full"> 
<Link to="/login" onClick={() => setIsOpen(false)}>Login</Link> 
</Button> 
<Button asChild className="w-full"> 
<Link to="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link> 
</Button> 
</div> 
)} 
</div> 
</div> 
</SheetContent> 
</Sheet> 
</div> 
 
</div> 
</nav> 
) 
}