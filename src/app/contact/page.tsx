import { BentoGrid } from "@/components/ui/bento-grid";
import { WavyBackground } from "@/components/ui/footer";
import { SparklesCore } from "@/components/ui/sparkles";
import {TypewriterEffect} from "@/components/ui/typewritter-effect"

export default function Contact() {
  return (

    <div className="px-6 py-12 bg-dark-400 h-screen">
      
      <div className="m-auto shadow-lg rounded-lg w-[90vw] bg-gray-300 p-6 mb-12">
        {/* Main Grid for Contact and Two Cards */}
        <div className="grid grid-cols-2 gap-6">
          {/* Contact Us Card */}
          
            <div className="bento-card p-6 bg-white rounded-lg shadow-md">
               
                  <h2 className="text-xl font-bold mb-4 text-black">Get in Touch!</h2>
                  <h4 className="text-gray-600 mb-4 font-bold">Have questions or need support? Contact us today, and our team will be happy to assist you.</h4>
                  <form className="space-y-4">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        phoneNo
                      </label>
                      <input
                        type="number"
                        id="phone"
                        name="phone"
                        placeholder="Enter your number"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>

                    {/* Message Input */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Write your message"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                        required
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                
              
            </div>
            


          {/* Nested Grid for Two Cards */}
          <div className="grid grid-rows-2 gap-6">
            <div className="bento-card relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
              <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                  background="transparent" 
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={100}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />
              </div>
              <h4 className="text-center relative z-20 font-bold">With decades of expertise, strategic partnerships, and a NABL-certified lab, the company delivers precision engineering to empower industries worldwide.</h4>
              
              </div>
            
            <div className="bento-card p-6 bg-white rounded-lg shadow-md space-y-3">
              <h3 className="text-lg font-semibold mb-3 text-black pb-6">Additional Details</h3>
              <p className="text-black pb-1 text-[1.3vw]">📞 +91-9999270670</p>
              <p className="text-black pb-1 text-[1.3vw]">✉️  info@rigilgeny.com</p>
              <p className="text-black font-bold text-[1.3vw]">📍
              G-282, Sector-63, Noida, Uttar Pradesh, India - 201301</p>
            </div>
          </div>
        </div>
      </div>
        <div className="relative bottom-0 w-[100vw] h-[50vh]">
            <WavyBackground />
        </div>
    </div>
  );
}
