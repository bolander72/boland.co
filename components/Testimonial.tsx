interface Props {
   quote: string;
   name: string;
   title: string | JSX.Element;
}

export default function Testimonial({ quote, name, title }: Props) {
   return (
      <li className="list-item rounded-xl decoration-none bg-easyWhite">
         <figure className="relative isolate rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-1000 hover:scale-[1.0125] ring-1 ring-slate-900/5">
            <svg
               viewBox="0 0 162 128"
               fill="none"
               aria-hidden="true"
               className="absolute left-5 top-5 -z-10 h-32 stroke-[#BE9C6F]/60"
            >
               <path
                  id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                  d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
               />
               <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86" />
            </svg>
            <blockquote className="text-xl font-semibold leading-8 text-black sm:text-2xl sm:leading-9 mt-6">
               <p>
                  {quote}
               </p>
            </blockquote>
            <figcaption className="mt-8 text-base">
               <div className="font-semibold text-black">{name}</div>
               <div className="mt-1 text-gray-400">{title}</div>
            </figcaption>
         </figure>
      </li>
      // <aside id="testimonial-from-tommy-stroman" aria-label="Testimonial from Tommy Stroman" class="relative bg-slate-100 py-16 sm:py-32"><div class="text-slate-900/10"><svg aria-hidden="true" class="absolute inset-0 h-full w-full"><defs><pattern id=":Rb6:" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" patternTransform="translate(0 80)"><path d="M0 128V.5H128" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#:Rb6:)"></rect></svg></div><div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-2 relative"><figure><div class="flex text-slate-900 sm:justify-center"><div class="flex gap-1"><svg aria-hidden="true" viewBox="0 0 20 20" class="h-5 w-5 fill-current"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg aria-hidden="true" viewBox="0 0 20 20" class="h-5 w-5 fill-current"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg aria-hidden="true" viewBox="0 0 20 20" class="h-5 w-5 fill-current"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg aria-hidden="true" viewBox="0 0 20 20" class="h-5 w-5 fill-current"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg aria-hidden="true" viewBox="0 0 20 20" class="h-5 w-5 fill-current"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div></div><blockquote class="mt-10 font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-center"><p>“I didn’t know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!”</p></blockquote><figcaption class="mt-10 flex items-center sm:justify-center"><div class="overflow-hidden rounded-full bg-slate-200"><img alt="" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" class="h-12 w-12 object-cover" style="color:transparent" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.fe0baac2.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.fe0baac2.png&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.fe0baac2.png&amp;w=96&amp;q=75"></div><div class="ml-4"><div class="text-base font-medium leading-6 tracking-tight text-slate-900">Tommy Stroman</div><div class="mt-1 text-sm text-slate-600">Front-end developer</div></div></figcaption></figure></div></aside>
   )
}