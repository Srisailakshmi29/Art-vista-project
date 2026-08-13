import { useState } from 'react'; 
import { Button } from '@/components/ui/button'; 
import { Input } from '@/components/ui/input'; 
import { Card, CardContent } from '@/components/ui/card'; 
import { Badge } from '@/components/ui/badge'; 
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 
'@/components/ui/select'; 
import { Search, Filter, Heart, Eye } from 'lucide-react'; 
 
const artworks = [ 
{ 
id: 1, 
title: "Ethereal Dreams", 
artist: "Marina Rodriguez", 
price: "$2,500", 
image: "https://images.unsplash.com/photo-1541961017774
22349e4a1262?w=400&h=300&fit=crop", 
category: "Abstract", 
views: 1250, 
likes: 89 
}, 
 
{ 
id: 2, 
title: "Urban Symphony", 
artist: "David Chen", 
price: "$1,800", 
image: "https://images.unsplash.com/photo-1578321272176
b7bbc0679853?w=400&h=300&fit=crop", 
category: "Contemporary", 
views: 980, 
likes: 67 
}, 
{ 
id: 3, 
title: "Nature's Whisper", 
artist: "Emma Thompson", 
price: "$3,200", 
image: "https://images.unsplash.com/photo-1578662996442
48f60103fc96?w=400&h=300&fit=crop", 
category: "Landscape", 
views: 1450, 
likes: 112 
}, 
{ 
id: 4, 
title: "Digital Horizons", 
artist: "Alex Kim", 
price: "$1,200", 
image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&h=300&fit=crop", 
category: "Digital Art", 
views: 890, 
likes: 45 
}, 
{ 
id: 5, 
title: "Classical Revival", 
artist: "Sophie Laurent", 
price: "$4,500", 
image: "https://images.unsplash.com/photo-1578662015928
3dae7b8e4d85?w=400&h=300&fit=crop", 
category: "Classical", 
views: 2100, 
likes: 156 
}, 
{ 
id: 6, 
title: "Modern Expressions", 
artist: "Carlos Rivera", 
price: "$2,100", 
 
image: "https://images.unsplash.com/photo-1578662996442
48f60103fc96?w=400&h=300&fit=crop", 
category: "Modern", 
views: 1320, 
likes: 78 
}, 
{ 
id: 7, 
title: "Ocean Depths", 
artist: "Maya Patel", 
price: "$2,800", 
image: "https://images.unsplash.com/photo-1541961017774
22349e4a1262?w=400&h=300&fit=crop", 
category: "Abstract", 
views: 1680, 
likes: 94 
}, 
{ 
id: 8, 
title: "City Lights", 
artist: "James Wilson", 
price: "$1,950", 
image: "https://images.unsplash.com/photo-1578321272176
b7bbc0679853?w=400&h=300&fit=crop", 
category: "Contemporary", 
views: 1150, 
likes: 82 
} 
]; 
 
const categories = ["All", "Abstract", "Contemporary", "Landscape", "Digital Art", "Classical", 
"Modern"]; 
const sortOptions = [ 
{ value: "newest", label: "Newest First" }, 
{ value: "oldest", label: "Oldest First" }, 
{ value: "price-low", label: "Price: Low to High" }, 
{ value: "price-high", label: "Price: High to Low" }, 
{ value: "popular", label: "Most Popular" } 
]; 
 
export default function Gallery() { 
const [searchTerm, setSearchTerm] = useState(''); 
const [selectedCategory, setSelectedCategory] = useState('All'); 
const [sortBy, setSortBy] = useState('newest'); 
const [likedArtworks, setLikedArtworks] = useState<number[]>([]); 
 
const toggleLike = (artworkId: number) => { 
setLikedArtworks(prev =>  
 
prev.includes(artworkId)  
? prev.filter(id => id !== artworkId) 
: [...prev, artworkId] 
); 
}; 
 
const filteredArtworks = artworks.filter(artwork => { 
const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
artwork.artist.toLowerCase().includes(searchTerm.toLowerCase()); 
const matchesCategory = selectedCategory === 'All' || artwork.category === selectedCategory; 
return matchesSearch && matchesCategory; 
}); 
 
return ( 
<div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Times New Roman, serif', color: 
'black' }}> 
<div className="bg-white shadow-sm"> 
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center"> 
<h1 className="text-4xl font-bold mb-4">Art Gallery</h1> 
<p className="text-xl max-w-3xl mx-auto">Discover extraordinary artworks from talented artists 
around the world</p> 
</div> 
</div> 
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> 
<div className="bg-white rounded-lg shadow-sm p-6 mb-8"> 
<div className="flex flex-col lg:flex-row gap-4 items-center"> 
<div className="relative flex-1 max-w-md"> 
<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" /> 
<Input placeholder="Search artworks or artists..." value={searchTerm} onChange={(e) => 
setSearchTerm(e.target.value)} className="pl-10" style={{ fontFamily: 'Times New Roman, serif', 
color: 'black' }} /> 
</div> 
<div className="flex flex-wrap gap-2"> 
{categories.map((category) => ( 
<Button key={category} variant={selectedCategory === category ? "default" : "outline"} size="sm" 
onClick={() => setSelectedCategory(category)} className={selectedCategory === category ? "bg
black text-white hover:bg-gray-800" : "text-black border-black hover:bg-gray-100"} style={{ 
fontFamily: 'Times New Roman, serif' }}>{category}</Button> 
))} 
</div> 
<div className="flex items-center gap-2"> 
<Filter className="h-5 w-5 text-gray-500" /> 
<Select value={sortBy} onValueChange={setSortBy}> 
<SelectTrigger className="w-48 border-black text-black" style={{ fontFamily: 'Times New Roman, 
serif' }}> 
<SelectValue /> 
</SelectTrigger> 
<SelectContent> 
 
{sortOptions.map((option) => ( 
<SelectItem key={option.value} value={option.value} style={{ fontFamily: 'Times New Roman, 
serif', color: 'black' }}>{option.label}</SelectItem> 
))} 
</SelectContent> 
</Select> 
</div> 
</div> 
</div> 
<div className="mb-6"><p>Showing {filteredArtworks.length} of {artworks.length} 
artworks</p></div> 
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"> 
{filteredArtworks.map((artwork) => ( 
<Card key={artwork.id} className="group overflow-hidden hover:shadow-xl transition-all 
duration-300 bg-white border-black/10"> 
<div className="relative overflow-hidden"> 
<img src={artwork.image} alt={artwork.title} className="w-full h-64 object-cover group
hover:scale-105 transition-transform duration-300" /> 
<Badge className="absolute top-3 left-3 bg-black text-white">{artwork.category}</Badge> 
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity 
duration-300 flex items-center justify-center"> 
<div className="flex space-x-2"> 
<Button size="sm" variant="secondary" onClick={() => toggleLike(artwork.id)} 
className={`${likedArtworks.includes(artwork.id) ? 'bg-black text-white' : 'bg-white text-black'}`}> 
<Heart className={`h-4 w-4 ${likedArtworks.includes(artwork.id) ? 'fill-current' : ''}`} /> 
</Button> 
<Button size="sm" variant="secondary" className="bg-white text-black"> 
<Eye className="h-4 w-4" /> 
</Button> 
</div> 
</div> 
</div> 
<CardContent className="p-4"> 
<h3 className="text-lg font-semibold mb-1">{artwork.title}</h3> 
<p className="mb-3">by {artwork.artist}</p> 
<div className="flex justify-between items-center mb-3"> 
<span className="text-xl font-bold">{artwork.price}</span> 
<div className="flex items-center space-x-3 text-sm"> 
<div className="flex items-center space-x-1"> 
<Eye className="h-4 w-4" /> 
<span>{artwork.views}</span> 
</div> 
<div className="flex items-center space-x-1"> 
<Heart className="h-4 w-4" /> 
<span>{artwork.likes}</span> 
</div> 
</div> 
</div> 
 
<Button className="w-full bg-black text-white hover:bg-gray-800">View Details</Button> 
</CardContent> 
</Card> 
))} 
</div> 
{filteredArtworks.length === 0 && ( 
<div className="text-center py-12"> 
<Search className="h-16 w-16 mx-auto text-gray-400 mb-4" /> 
<h3 className="text-xl font-semibold mb-2">No artworks found</h3> 
<p>Try adjusting your search or filter criteria</p> 
</div> 
)} 
{filteredArtworks.length > 0 && ( 
<div className="text-center mt-12"> 
<Button size="lg" variant="outline" className="border-black text-black hover:bg-gray-100">Load 
More Artworks</Button> 
</div> 
)} 
</div> 
</div> 
); 
}