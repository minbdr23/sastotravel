import type { FC } from "react"

interface LogoProps {
  className?: string
  textColor?: string
}

export const Logo: FC<LogoProps> = ({ className = "", textColor = "text-red-600" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="font-bold text-2xl">
        <span className={textColor}>SASTO</span>
        <span className="text-red-600"> TRAVEL</span>
        <span className="text-red-600"> &TOURS</span>
      </div>
    </div>
  )
}
