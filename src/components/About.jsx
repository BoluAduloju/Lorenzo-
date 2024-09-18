import aboutImage from "../assets/about.jpg"

const About = () => {
  return (
    <section className="max-w-7xl mx-auto mt-20" id="about">
       <h2 className="text-2xl lg:text-[40px] tracking-tight text-center mt-20 mb-12 font-medium"> About Us</h2>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center lg:space-x-8 mx-4 mb-20 ">
         <div className="mb-8 lg:mb-0">
            <img src={aboutImage} alt="about lorenzo" className="w-full h-auto rounded-3xl"/>
         </div>
         <p className="text-lg lg:text-xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8 ">At Lorenzo, we believe in transforming buildings and homes int cozy and visually inviting spaces. With our craftmaship and obsession to delivering the best of the best quality design. Our team of experts having decade experience with exceptional abilities in modern interior design thinking. Our interests spans across different type of buildings, from commercial centers,residential spaces,public places to offices workspace. With one mission of transfroming spaces into a modern  masterpiece in mind</p>
       </div>
    </section>
  )
}

export default About    