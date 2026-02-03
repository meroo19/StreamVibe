import {FaFacebookF,FaTwitter,FaLinkedinIn} from "react-icons/fa"

export default function Footer(){
 return(
<footer className="bg-[#0F0F0F] text-gray-300">
 <div className="max-w-6xl mx-auto px-6 py-8">

<div className="grid grid-cols-2 md:grid-cols-5 gap-6 border-b border-[#333] pb-6">

 <div>
  <h4 className="font-semibold text-white mb-3">Home</h4>
   <ul className="space-y-2 text-sm">
    <li>Categories</li><li>Devices</li><li>Pricing</li><li>FAQ</li>
   </ul>
 </div>

 <div>
  <h4 className="font-semibold text-white mb-3">Movies</h4>
   <ul className="space-y-2 text-sm">
    <li>Genres</li><li>Trending</li><li>New Release</li><li>Popular</li>
   </ul>
 </div>

 <div>
  <h4 className="font-semibold text-white mb-3">Shows</h4>
   <ul className="space-y-2 text-sm">
    <li>Genres</li><li>Trending</li><li>New Release</li><li>Popular</li>
   </ul>
 </div>

 <div>
  <h4 className="font-semibold text-white mb-3">Support</h4>
   <ul className="space-y-2 text-sm">
    <li>Contact Us</li>
   </ul>
 </div>

 <div>
  <h4 className="font-semibold text-white mb-3">Connect With Us</h4>
   <div className="flex gap-3">
    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#333] hover:bg-red-600 transition"><FaFacebookF className="w-4 h-4"/></a>
    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#333] hover:bg-red-600 transition"><FaTwitter className="w-4 h-4"/></a>
    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#333] hover:bg-red-600 transition"><FaLinkedinIn className="w-4 h-4"/></a>
   </div>
 </div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 mt-4">
 <p>©2023 StreamVibe, All Rights Reserved</p>
 <div className="flex gap-4 mt-2 md:mt-0">
  <a href="#" className="hover:text-white">Terms of Use</a>
  <a href="#" className="hover:text-white">Privacy Policy</a>
  <a href="#" className="hover:text-white">Cookie Policy</a>
 </div>
</div>

 </div>
</footer>
 )
}