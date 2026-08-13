import { useState } from 'react'; 
import { Button } from '@/components/ui/button'; 
import { Input } from '@/components/ui/input'; 
import { Label } from '@/components/ui/label'; 
import { Textarea } from '@/components/ui/textarea'; 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 
'@/components/ui/card'; 
import { Alert, AlertDescription } from '@/components/ui/alert'; 
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 
'@/components/ui/select'; 
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'; 
import { toast } from 'sonner'; 
 
const contactInfo = [ 
{ 
icon: Mail, 
title: "Email Us", 
details: "info@artvista.com", 
description: "Send us an email anytime" 
}, 
{ 
 
icon: Phone, 
title: "Call Us", 
details: "+1 (555) 123-4567", 
description: "Mon-Fri from 8am to 6pm" 
}, 
{ 
icon: MapPin, 
title: "Visit Us", 
details: "123 Art Street, Creative City, CC 12345", 
description: "Come see our physical gallery" 
}, 
{ 
icon: Clock, 
title: "Business Hours", 
details: "Mon-Fri: 8am-6pm, Sat: 10am-4pm", 
description: "We're here to help" 
} 
]; 
 
const inquiryTypes = [ 
{ value: "general", label: "General Inquiry" }, 
{ value: "artwork", label: "Artwork Question" }, 
{ value: "artist", label: "Artist Application" }, 
{ value: "collector", label: "Collector Services" }, 
{ value: "partnership", label: "Partnership" }, 
{ value: "support", label: "Technical Support" } 
]; 
 
export default function Contact() { 
const [formData, setFormData] = useState({ 
name: '', 
email: '', 
phone: '', 
inquiryType: '', 
subject: '', 
message: '' 
}); 
const [loading, setLoading] = useState(false); 
const [submitted, setSubmitted] = useState(false); 
 
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | 
HTMLTextAreaElement>) => { 
setFormData({ 
...formData, 
[e.target.name]: e.target.value 
}); 
}; 
 
 
const handleSelectChange = (value: string) => { 
setFormData({ 
...formData, 
inquiryType: value 
}); 
}; 
 
const handleSubmit = async (e: React.FormEvent) => { 
e.preventDefault(); 
setLoading(true); 
setTimeout(() => { 
setLoading(false); 
setSubmitted(true); 
toast.success('Thank you! Your message has been sent successfully.'); 
setTimeout(() => { 
setSubmitted(false); 
setFormData({ 
name: '', 
email: '', 
phone: '', 
inquiryType: '', 
subject: '', 
message: '' 
}); 
}, 3000); 
}, 1500); 
}; 
 
return ( 
<div className="min-h-screen bg-gray-50"> 
<div className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white"> 
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> 
<div className="text-center"> 
<h1 className="text-4xl lg:text-5xl font-bold mb-4">Get in Touch</h1> 
<p className="text-xl text-purple-100 max-w-3xl mx-auto"> 
We'd love to hear from you. Send us a message and we'll respond as soon as possible. 
</p> 
</div> 
</div> 
</div> 
 
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> 
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12"> 
<div className="lg:col-span-1"> 
<div className="space-y-8"> 
<div> 
<h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2> 
<p className="text-gray-600 mb-6"> 
 
Ready to start your art journey? We're here to help you every step of the way. 
</p> 
</div> 
<div className="space-y-6"> 
{contactInfo.map((info, index) => ( 
<div key={index} className="flex items-start space-x-4"> 
<div className="bg-purple-100 p-3 rounded-full"> 
<info.icon className="h-6 w-6 text-purple-600" /> 
</div> 
<div> 
<h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3> 
<p className="text-gray-800 mb-1">{info.details}</p> 
<p className="text-gray-600 text-sm">{info.description}</p> 
</div> 
</div> 
))} 
</div> 
<Card className="border-0 shadow-lg"> 
<CardContent className="p-0"> 
<div className="bg-gradient-to-br from-purple-100 to-pink-100 h-48 rounded-lg flex items-center 
justify-center"> 
<div className="text-center"> 
<MapPin className="h-12 w-12 text-purple-600 mx-auto mb-2" /> 
<p className="text-gray-600">Interactive Map</p> 
<p className="text-sm text-gray-500">Coming Soon</p> 
</div> 
</div> 
</CardContent> 
</Card> 
</div> 
</div> 
 
<div className="lg:col-span-2"> 
<Card className="border-0 shadow-xl"> 
<CardHeader> 
<CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle> 
<CardDescription> 
Fill out the form below and we'll get back to you within 24 hours. 
</CardDescription> 
</CardHeader> 
<CardContent> 
{submitted ? ( 
<div className="text-center py-12"> 
<CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" /> 
<h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3> 
<p className="text-gray-600 mb-4"> 
Thank you for contacting us. We'll get back to you soon. 
</p> 
 
<Alert className="border-green-200 bg-green-50"> 
<AlertDescription className="text-green-800"> 
Your message has been successfully submitted. Check your email for a confirmation. 
</AlertDescription> 
</Alert> 
</div> 
) : ( 
<form onSubmit={handleSubmit} className="space-y-6"> 
<div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
<div className="space-y-2"> 
<Label htmlFor="name">Full Name *</Label> 
<Input id="name" name="name" type="text" placeholder="Your full name" value={formData.name} 
onChange={handleInputChange} required className="h-11" /> 
</div> 
<div className="space-y-2"> 
<Label htmlFor="email">Email Address *</Label> 
<Input id="email" name="email" type="email" placeholder="your.email@example.com" 
value={formData.email} onChange={handleInputChange} required className="h-11" /> 
</div> 
</div> 
<div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
<div className="space-y-2"> 
<Label htmlFor="phone">Phone Number</Label> 
<Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" 
value={formData.phone} onChange={handleInputChange} className="h-11" /> 
</div> 
<div className="space-y-2"> 
<Label htmlFor="inquiryType">Inquiry Type *</Label> 
<Select value={formData.inquiryType} onValueChange={handleSelectChange} required> 
<SelectTrigger className="h-11"> 
<SelectValue placeholder="Select inquiry type" /> 
</SelectTrigger> 
<SelectContent> 
{inquiryTypes.map((type) => ( 
<SelectItem key={type.value} value={type.value}>{type.label}</SelectItem> 
))} 
</SelectContent> 
</Select> 
</div> 
</div> 
<div className="space-y-2"> 
<Label htmlFor="subject">Subject *</Label> 
<Input id="subject" name="subject" type="text" placeholder="Brief description of your inquiry" 
value={formData.subject} onChange={handleInputChange} required className="h-11" /> 
</div> 
<div className="space-y-2"> 
<Label htmlFor="message">Message *</Label> 
<Textarea id="message" name="message" placeholder="Please provide details about your inquiry..." 
 
value={formData.message} onChange={handleInputChange} required rows={6} 
className="resize-none" /> 
</div> 
<div className="flex items-start space-x-2"> 
<input id="consent" type="checkbox" required className="mt-1 rounded border-gray-300 text
purple-600 focus:ring-purple-500" /> 
<Label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed"> 
I agree to the processing of my personal data in accordance with ArtVista's Privacy Policy 
</Label> 
</div> 
<Button type="submit" className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 
hover:from-purple-700 hover:to-pink-700" disabled={loading}> 
{loading ? 'Sending Message...' : (<>Send Message <Send className="ml-2 h-5 w-5" /></>)} 
</Button> 
</form> 
)} 
</CardContent> 
</Card> 
</div> 
</div> 
 
<div className="mt-20"> 
<div className="text-center mb-12"> 
<h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2> 
<p className="text-xl text-gray-600">Quick answers to common questions about ArtVista</p> 
</div> 
<div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
<Card className="border-0 shadow-lg"> 
<CardContent className="p-6"> 
<h3 className="font-semibold text-gray-900 mb-2">How do I purchase artwork?</h3> 
<p className="text-gray-600">Browse our gallery, select your desired piece, and follow the secure 
checkout process. We accept various payment methods and provide worldwide shipping.</p> 
</CardContent> 
</Card> 
<Card className="border-0 shadow-lg"> 
<CardContent className="p-6"> 
<h3 className="font-semibold text-gray-900 mb-2">Can I sell my artwork on ArtVista?</h3> 
<p className="text-gray-600">Yes! We welcome applications from artists. Submit your portfolio 
through our artist application process, and our curation team will review your work.</p> 
</CardContent> 
</Card> 
<Card className="border-0 shadow-lg"> 
<CardContent className="p-6"> 
<h3 className="font-semibold text-gray-900 mb-2">What is your return policy?</h3> 
<p className="text-gray-600">We offer a 30-day return policy for original condition artworks. All 
pieces come with authenticity certificates and detailed condition reports.</p> 
</CardContent> 
</Card> 
 
<Card className="border-0 shadow-lg"> 
<CardContent className="p-6"> 
<h3 className="font-semibold text-gray-900 mb-2">Do you offer art consultation?</h3> 
<p className="text-gray-600">Absolutely! Our art consultants can help you find the perfect pieces 
for your space, budget, and personal taste. Contact us to schedule a consultation.</p> 
</CardContent> 
</Card> 
</div> 
</div> 
</div> 
</div> 
); 
}