import { ArrowUpRight, MapPin, Instagram, Linkedin, Dribbble, Ambulance as BehanceLogo } from 'lucide-react';

export const Footer=()=>{
  return (
    <div className="bg-gray-100 border-t-1 h-1/2">
      {/* Main content area */}
      <div className="flex items-center bg-white  h-[250px] p-8">
        <p className='text-9xl font-bold font-poppins'>Contact Us!!</p>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Top section */}
          <div className="flex justify-between items-center mb-20">
            <div className="flex items-center space-x-2">
              <span className="text-sm">HEARD ENOUGH?</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          
            <div className="bg-yellow-300 rounded-full p-8">
              <ArrowUpRight className="h-8 w-8 text-black" />
            </div>
          </div>

          {/* Bottom section */}
          <div className="grid grid-cols-4 gap-8">
            {/* Agency info */}
            <div>
              <h3 className="text-2xl uppercase font-bold mb-4">
            Food<br />
                Redistribution
              </h3>
            </div>

            {/* London office */}
            <div>
              <h4 className="text-lg font-semibold mb-4">LONDON</h4>
              <a href="mailto:london@agency.com" className="text-gray-400 hover:text-white block mb-2">
                london@agency.com
              </a>
              <p className="text-gray-400 mb-4">+44 20 7998 7571</p>
              <p className="text-gray-400 mb-4">
                Unit 306, Metropolitan Wharf,<br />
                70 Wapping Wall, London E1W 3SS
              </p>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
                <span>SEE ON MAP</span>
                <MapPin className="h-4 w-4" />
              </button>
            </div>

            {/* Buenos Aires office */}
            <div>
              <h4 className="text-lg font-semibold mb-4">BUENOS AIRES</h4>
              <a href="mailto:buenosaires@agency.com" className="text-gray-400 hover:text-white block mb-2">
                buenosaires@agency.com
              </a>
              <p className="text-gray-400 mb-4">+54 11 6799 7949</p>
              <p className="text-gray-400 mb-4">
                Cabildo 1458 1st floor,<br />
                Buenos Aires
              </p>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
                <span>SEE ON MAP</span>
                <MapPin className="h-4 w-4" />
              </button>
            </div>

            {/* Newsletter and social */}
            <div>
              <div className="mb-8">
                <h4 className="text-sm mb-2">WANT TO BE THE SMARTEST IN YOUR OFFICE?</h4>
                <button className="flex items-center space-x-2 text-white hover:text-gray-200">
                  <span>SIGN UP FOR OUR NEWSLETTER</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
              
              <div>
                <h4 className="text-sm mb-4">FOLLOW US</h4>
                <div className="flex space-x-6">
                  <BehanceLogo className="h-6 w-6 hover:text-gray-300 cursor-pointer" />
                  <Dribbble className="h-6 w-6 hover:text-gray-300 cursor-pointer" />
                  <Instagram className="h-6 w-6 hover:text-gray-300 cursor-pointer" />
                  <Linkedin className="h-6 w-6 hover:text-gray-300 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}