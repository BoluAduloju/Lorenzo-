import { SERVICES_CONTENT } from "../constants"

const Services = () => {
  return (
   <section className="max-w-7xl mx-auto mt-20" id="services">
    <div className="my=20">
        <h2 className="text-2xl lg:text-[40px] tracking-tight text-center mb-20 font-medium">What Services We Offer</h2>
        {SERVICES_CONTENT.map((service, index) => (
            <div key={index} className=" mb-12 mx-4 flex flex-col lg:flex-row">
                <div className={`lg:w-1/2 mb-4 lg:mb-0 ${ index % 2 === 0 ? " " : "lg:order-2"}  `}>
                      <img src={service.image} alt={service.title}  className=" w-full h-[60vh] object-cover rounded-lg"/>
                </div>
                <div className={` lg:w-1/2 flex flex-col self-center ${ index % 2 === 0 ? "lg:pl-12" : "lg:pr-12"}`}>
                     <h3 className=" text-xl lg:text-2xl font-medium mb-2">{service.title}</h3>
                     <p className="mb-4 lg:tracking-wide text-lg lg:text-xl lg:leading-7">{service.description}</p>
                </div>
            </div>
        ))}
    </div>
   </section>
  )
}

export default Services