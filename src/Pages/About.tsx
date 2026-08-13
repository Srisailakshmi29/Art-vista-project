 
import { Card } from '@/components/ui/card' 
import { Button } from '@/components/ui/button' 
 
export default function About() { 
return ( 
<div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Times New Roman, serif', color: 
'black' }}> 
<div className="bg-white shadow-sm"> 
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center"> 
<h1 className="text-4xl font-bold mb-4">About ArtVista</h1> 
<p className="text-xl max-w-3xl mx-auto">Discover the story behind ArtVista — where art meets 
innovation, creativity, and global connection.</p> 
</div> 
</div> 
 
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> 
<Card className="bg-white shadow-sm border border-gray-200 p-8"> 
<h2 className="text-3xl font-semibold mb-4 text-center">Our Mission</h2> 
<p className="text-lg mb-6 text-justify">ArtVista was created to bridge the gap between artists and 
 
art enthusiasts worldwide. Our mission is to make extraordinary artworks accessible to everyone — 
fostering a digital space where creativity thrives and artists gain the recognition they deserve.</p> 
 
<h2 className="text-3xl font-semibold mb-4 text-center">What We Do</h2> 
<p className="text-lg mb-6 text-justify">We curate an exclusive selection of modern, classical, and 
digital artworks from talented creators across the globe. Through ArtVista, collectors can explore, 
connect, and purchase stunning pieces with ease and confidence.</p> 
 
<h2 className="text-3xl font-semibold mb-4 text-center">Our Vision</h2> 
<p className="text-lg mb-6 text-justify">To be the world’s leading online art destination — 
connecting cultures, inspiring creativity, and redefining how people experience art.</p> 
 
<div className="text-center mt-8"> 
<Button className="bg-black text-white hover:bg-gray-800">Explore Our Gallery</Button> 
</div> 
</Card> 
</div> 
</div> 
) 
}