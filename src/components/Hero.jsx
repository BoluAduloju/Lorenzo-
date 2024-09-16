import { HERO_CONTENT } from "../constants"

const Hero = () => {
  return (
   <section className="max-w-7xl mx-auto pt-1 border-b-2">
     <div className="flex flex-col items-center my-8">
        <h1 className="text-4xl lg:text-7xl sm:text-6xl p-2 text-center tracking-wide">
            {HERO_CONTENT.title}
        </h1>
        <p className="mt-5 text-lg text-center text-black-500 max-w-4xl">
            {HERO_CONTENT.subtitle}
        </p>
        <div className="flex justify-center my-10">
         <a href="#" className="py-3 px-6 mx-3 rounded-md bg-black text-white cursor-pointer">Get a Quotation</a>
        </div>
        <img src={HERO_CONTENT.image} className="w-full h-[90vh] object-cover rounded-2xl p-2" alt="" />
     </div>
   </section>
  )
}

export default Hero