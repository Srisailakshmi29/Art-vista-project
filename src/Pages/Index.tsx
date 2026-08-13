 
import { Button } from '@/components/ui/button' 
import { Card, CardContent } from '@/components/ui/card' 
import { Badge } from '@/components/ui/badge' 
import { Link } from 'react-router-dom' 
import { ArrowRight, Star, Users, Palette, Award } from 'lucide-react' 
 
const featuredArtworks = [ 
{ id: 1, title: "Ethereal Dreams", artist: "Marina Rodriguez", price: "$2,500", image: 
"https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop", 
category: "Abstract" }, 
{ id: 2, title: "Urban Symphony", artist: "David Chen", price: "$1,800", image: 
"https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=300&fit=crop", 
category: "Contemporary" }, 
{ id: 3, title: "Nature's Whisper", artist: "Emma Thompson", price: "$3,200", image: 
"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop", 
category: "Landscape" } 
] 
 
const stats = [ 
{ icon: Palette, label: "Artworks", value: "10,000+" }, 
{ icon: Users, label: "Artists", value: "500+" }, 
{ icon: Star, label: "Reviews", value: "4.9/5" }, 
{ icon: Award, label: "Awards", value: "25+" } 
] 
 
export default function Index() { 
return ( 
<div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Times New Roman, serif', color: 
'black' }}> 
<section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text
 
white overflow-hidden"> 
<div className="absolute inset-0 bg-black/20"></div> 
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32"> 
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> 
<div className="space-y-8"> 
<h1 className="text-4xl lg:text-6xl font-bold leading-tight"> 
Discover 
<span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text
transparent">Extraordinary</span> 
Artworks 
</h1> 
<p className="text-xl text-purple-100 max-w-lg">Explore a curated collection of stunning artworks 
from talented artists worldwide. Find your perfect piece and transform your space.</p> 
<div className="flex flex-col sm:flex-row gap-4"> 
<Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50" asChild> 
<Link to="/gallery">Explore Gallery <ArrowRight className="ml-2 h-5 w-5" /></Link> 
</Button> 
<Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text
purple-900" asChild> 
<Link to="/about">Learn More</Link> 
</Button> 
</div> 
</div> 
<div className="relative"> 
<div className="grid grid-cols-2 gap-4"> 
<img src="https://images.unsplash.com/photo-1578662996442
48f60103fc96?w=300&h=400&fit=crop" alt="Featured Artwork 1" className="rounded-lg shadow
2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"/> 
<img src="https://images.unsplash.com/photo-1541961017774
22349e4a1262?w=300&h=400&fit=crop" alt="Featured Artwork 2" className="rounded-lg 
shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-8"/> 
</div> 
</div> 
</div> 
</div> 
</section> 
 
<section className="py-16 bg-gray-100"> 
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
<div className="grid grid-cols-2 md:grid-cols-4 gap-8"> 
{stats.map((stat, index) => ( 
<div key={index} className="text-center"> 
<div className="flex justify-center mb-4"><stat.icon className="h-8 w-8 text-purple-600" 
/></div> 
<div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div> 
<div className="text-gray-600">{stat.label}</div> 
</div> 
))} 
 
</div> 
</div> 
</section> 
 
<section className="py-20 bg-white"> 
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
<div className="text-center mb-16"> 
<h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Artworks</h2> 
<p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover our handpicked selection of 
extraordinary pieces from emerging and established artists</p> 
</div> 
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
{featuredArtworks.map((artwork) => ( 
<Card key={artwork.id} className="group overflow-hidden hover:shadow-xl transition-shadow 
duration-300"> 
<div className="relative overflow-hidden"> 
<img src={artwork.image} alt={artwork.title} className="w-full h-64 object-cover group
hover:scale-105 transition-transform duration-300"/> 
<Badge className="absolute top-4 left-4 bg-purple-600">{artwork.category}</Badge> 
</div> 
<CardContent className="p-6"> 
<h3 className="text-xl font-semibold text-gray-900 mb-2">{artwork.title}</h3> 
<p className="text-gray-600 mb-3">by {artwork.artist}</p> 
<div className="flex justify-between items-center"> 
<span className="text-2xl font-bold text-purple-600">{artwork.price}</span> 
<Button size="sm">View Details</Button> 
</div> 
</CardContent> 
</Card> 
))} 
</div> 
<div className="text-center mt-12"> 
<Button size="lg" asChild><Link to="/gallery">View All Artworks</Link></Button> 
</div> 
</div> 
</section> 
 
<section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20"> 
<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"> 
<h2 className="text-4xl font-bold mb-6">Ready to Start Your Art Journey?</h2> 
<p className="text-xl mb-8 text-purple-100">Join thousands of art enthusiasts and discover your 
next favorite piece</p> 
<div className="flex flex-col sm:flex-row gap-4 justify-center"> 
<Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50" asChild><Link 
to="/signup">Create Account</Link></Button> 
<Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text
purple-600" asChild><Link to="/contact">Get in Touch</Link></Button> 
</div> 
 
</div> 
</section> 
</div> 
) 
}