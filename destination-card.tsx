import Image from "next/image"
import Link from "next/link"
import { Bed, Utensils, Plane, Car } from "lucide-react"

interface DestinationCardProps {
  name: string
  image: string
  days: string
  price: string
  label?: string
}

export default function DestinationCard({ name, image, days, price, label }: DestinationCardProps) {
  return (
    <div className="min-w-[250px] max-w-[250px] bg-white rounded-md shadow-md overflow-hidden">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={250}
          height={150}
          className="w-full h-[150px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full p-3">
          <h3 className="text-white text-xl font-bold">{name}</h3>
          <p className="text-white text-sm">{days}</p>
        </div>
        {label && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-xs font-bold px-2 py-1 rounded">{label}</div>
        )}
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium">Starting from</span>
          <span className="text-red-600 font-bold">{price}</span>
        </div>
        <div className="flex justify-between">
          <Link href="#" className="flex flex-col items-center">
            <div className="bg-blue-100 p-2 rounded-full mb-1">
              <Bed size={16} className="text-blue-600" />
            </div>
            <span className="text-xs">Hotel</span>
          </Link>
          <Link href="#" className="flex flex-col items-center">
            <div className="bg-blue-100 p-2 rounded-full mb-1">
              <Utensils size={16} className="text-blue-600" />
            </div>
            <span className="text-xs">Meals</span>
          </Link>
          <Link href="#" className="flex flex-col items-center">
            <div className="bg-blue-100 p-2 rounded-full mb-1">
              <Plane size={16} className="text-blue-600" />
            </div>
            <span className="text-xs">Flight</span>
          </Link>
          <Link href="#" className="flex flex-col items-center">
            <div className="bg-blue-100 p-2 rounded-full mb-1">
              <Car size={16} className="text-blue-600" />
            </div>
            <span className="text-xs">Transfer</span>
          </Link>
        </div>
        <Link href="#" className="block text-center bg-blue-600 text-white text-sm py-1 rounded mt-3 hover:bg-blue-700">
          BOOK NOW
        </Link>
      </div>
    </div>
  )
}
