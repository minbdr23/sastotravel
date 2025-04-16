import Link from "next/link"
import {
  Home,
  Palmtree,
  BirdIcon as Helicopter,
  DollarSign,
  Shield,
  Mountain,
  Bike,
  Calendar,
  Car,
  GraduationCap,
  Gift,
} from "lucide-react"

export default function SidebarNav() {
  return (
    <div className="bg-white shadow-md">
      <div className="flex flex-col">
        <Link
          href="#"
          className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 border-b border-gray-200"
        >
          <Home className="text-red-600 mb-1" size={20} />
          <span className="text-xs">Rooms</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 border-b border-gray-200"
        >
          <Palmtree className="text-red-600 mb-1" size={20} />
          <span className="text-xs">Holidays</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 border-b border-gray-200"
        >
          <Helicopter className="text-red-600 mb-1" size={20} />
          <span className="text-xs">Chopper</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 border-b border-gray-200"
        >
          <DollarSign className="text-red-600 mb-1" size={20} />
          <span className="text-xs">Forex</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 border-b border-gray-200"
        >
          <Shield className="text-red-600 mb-1" size={20} />
          <span className="text-xs">Insurance</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 border-b border-gray-200"
        >
          <Mountain className="text-red-600 mb-1" size={20} />
          <span className="text-xs">Trekking</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 border-b border-gray-200"
        >
          <Bike className="text-red-600 mb-1" size={20} />
          <span className="text-xs">Adventure</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 border-b border-gray-200"
        >
          <Calendar className="text-red-600 mb-1" size={20} />
          <span className="text-xs">Events</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 border-b border-gray-200"
        >
          <Car className="text-red-600 mb-1" size={20} />
          <span className="text-xs">Vehicles</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 border-b border-gray-200"
        >
          <GraduationCap className="text-red-600 mb-1" size={20} />
          <span className="text-xs">Education</span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center p-3 hover:bg-gray-100">
          <Gift className="text-red-600 mb-1" size={20} />
          <span className="text-xs">Offers</span>
        </Link>
      </div>
    </div>
  )
}
