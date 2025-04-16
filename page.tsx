import Image from "next/image"
import Link from "next/link"
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Phone,
  MessageSquare,
  Mail,
  Search,
  Calendar,
  User,
  Send,
} from "lucide-react"
import DestinationCard from "@/components/destination-card"
import SidebarNav from "@/components/sidebar-nav"
import { Logo } from "@/components/logo"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-black text-white py-2 px-4 flex items-center justify-between text-sm">
        <div className="flex items-center space-x-4">
          <Link href="#" className="hover:text-gray-300">
            <Facebook size={16} />
          </Link>
          <Link href="#" className="hover:text-gray-300">
            <Instagram size={16} />
          </Link>
          <Link href="#" className="hover:text-gray-300">
            <Youtube size={16} />
          </Link>
          <Link href="#" className="hover:text-gray-300">
            <Twitter size={16} />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="tel:+9779741810250" className="hover:text-gray-300 flex items-center">
            <Phone size={14} className="mr-1" /> 9741810250
          </Link>
          <Link href="tel:+9778010790954" className="hover:text-gray-300 flex items-center">
            <Phone size={14} className="mr-1" /> FOR KOREA 01076586860
          </Link>
          <Link href="#" className="hover:text-gray-300 flex items-center">
            <MessageSquare size={14} className="mr-1" /> Chat with us
          </Link>
          <Link href="mailto:csd@sastotickets.com" className="hover:text-gray-300 flex items-center">
            <Mail size={14} className="mr-1" /> sastotravel301@gmail.com
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/login" className="hover:text-gray-300">
            Log In
          </Link>
          <Link href="/signup" className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded">
            Sign Up
          </Link>
        </div>
      </div>

      {/* Logo and Stats Bar */}
      <div className="bg-white py-4 px-6 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Logo className="mr-4" />
          <Image src="/placeholder.svg?height=50&width=120" alt="Connect IPS" width={120} height={50} />
        </div>
        <div className="flex items-center">
          <div className="text-center px-4 border-r border-gray-300">
            <div className="text-gray-700">TRANSACTION</div>
            <div className="font-bold">
              SUCCESS RATE <span className="text-red-600">99%</span>
            </div>
          </div>
          <div className="text-center px-4">
            <div className="text-gray-700">HIGH TRANSACTION</div>
            <div className="font-bold">
              VALUE <span className="text-red-600">NPR 2,000,000</span>
            </div>
          </div>
        </div>
        <div className="text-center text-blue-600">
          <div className="text-2xl font-bold">SCAN - PAY - FLY</div>
          <div className="text-sm">Pay with connect IPS - QR Scan</div>
        </div>
      </div>

      {/* Hero Section with Search */}
      <div className="relative">
        {/* Sidebar Navigation */}
        <div className="absolute left-0 top-0 h-full z-10">
          <SidebarNav />
        </div>

        {/* Hero Content */}
        <div
          className="min-h-[500px] bg-cover bg-center relative flex flex-col items-center justify-center px-4 py-16"
          style={{
            backgroundImage: "url('/placeholder.svg?height=500&width=1200')",
            backgroundSize: "cover",
          }}
        >
          <div className="text-white text-center z-10 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">WELCOME TO SASTO TRAVEL</h1>
            <p className="text-xl">Home of Domestic & International Tickets</p>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-md shadow-lg w-full max-w-4xl z-10">
            <div className="flex border-b">
              <button className="px-6 py-3 bg-red-600 text-white font-medium rounded-tl-md">One Way</button>
              <button className="px-6 py-3 text-gray-700 font-medium hover:bg-gray-100">Round Trip</button>
              <button className="px-6 py-3 text-gray-700 font-medium hover:bg-gray-100">Multi City</button>
              <button className="px-6 py-3 text-gray-700 font-medium hover:bg-gray-100">Mountain Flight</button>
            </div>
            <div className="p-4 flex flex-col md:flex-row gap-2">
              <div className="flex-1">
                <div className="relative">
                  <input type="text" placeholder="Enter Origin" className="w-full p-3 border rounded-md pl-10" />
                  <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                </div>
              </div>
              <div className="flex gap-2">
                <button className="bg-blue-700 text-white p-3 rounded-md">
                  <Search size={20} />
                </button>
                <button className="bg-blue-700 text-white p-3 rounded-md">
                  <Calendar size={20} />
                </button>
                <button className="bg-blue-700 text-white p-3 rounded-md">
                  <User size={20} />
                </button>
                <button className="bg-red-600 text-white p-3 rounded-md">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Carousel */}
      <div className="py-8 px-4 relative">
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 text-red-600">
          &laquo;
        </button>
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 text-red-600">
          &raquo;
        </button>

        <div className="flex gap-4 overflow-x-auto pb-4 px-8">
          <DestinationCard
            name="Baku"
            image="/placeholder.svg?height=200&width=300"
            days="5 days"
            price="Rs. 75,000"
            label="NEW"
          />
          <DestinationCard
            name="Bali"
            image="/placeholder.svg?height=200&width=300"
            days="6 days"
            price="Rs. 85,000"
            label="NEW"
          />
          <DestinationCard
            name="Cambodia"
            image="/placeholder.svg?height=200&width=300"
            days="7 days"
            price="Rs. 90,000"
            label="NEW"
          />
          <DestinationCard
            name="China"
            image="/placeholder.svg?height=200&width=300"
            days="8 days"
            price="Rs. 95,000"
            label="NEW"
          />
          <DestinationCard
            name="Dubai"
            image="/placeholder.svg?height=200&width=300"
            days="5 days"
            price="Rs. 80,000"
            label="NEW"
          />
        </div>
      </div>

      {/* Service Icons */}
      <div className="py-8 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Hotel"
                width={60}
                height={60}
                className="mx-auto mb-2"
              />
              <span className="text-sm">Hotels</span>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Helicopter"
                width={60}
                height={60}
                className="mx-auto mb-2"
              />
              <span className="text-sm">Helicopter</span>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Car"
                width={60}
                height={60}
                className="mx-auto mb-2"
              />
              <span className="text-sm">Car Rental</span>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Insurance"
                width={60}
                height={60}
                className="mx-auto mb-2"
              />
              <span className="text-sm">Insurance</span>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Tickets"
                width={60}
                height={60}
                className="mx-auto mb-2"
              />
              <span className="text-sm">Tickets</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-blue-700 text-white rounded-full p-4 shadow-lg">
          <MessageSquare size={24} />
        </button>
      </div>
    </main>
  )
}
