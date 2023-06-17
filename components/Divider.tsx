interface Props {
   strokeClass?: string
}

export default function Divider({ strokeClass = 'stroke-black/10' }: Props) {
   return (
      <svg className="h-20 w-screen" aria-hidden="true">
         <defs>
            <pattern id=":R1t6:" width="6" height="8" patternUnits="userSpaceOnUse">
               <path d="M0 0H6M0 8H6" className={strokeClass} fill="none">
               </path>
            </pattern>
         </defs>
         <rect width="100%" height="100%" fill="url(#:R1t6:)"></rect>
      </svg>
   )
}