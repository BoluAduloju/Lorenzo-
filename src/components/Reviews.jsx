import { REVIEWS } from "../constants"

const Reviews = () => {
  return (
    <section className="max-w-7xl mx-auto mt-20" id="reviews">
      <div className="my-20">
        <h2 className="text-2xl lg:text-[40px] tracking-tight text-center mt-20 mb-12 font-medium">What People are Saying</h2>
        <p className="max-w-2xl text-lg lg:text-xl mb-12 text-center mx-auto">{REVIEWS.text}</p>
        <div className="flex flex-wrap justify-center">
            {REVIEWS.reviews.map((review, index) => (
                <div  key={index} className=" flex flex-col mt-10 justify-center items-center rounded-2xl border border-neutral-300 p-10 mx-2 max-w-xs ">
                    <p className="mb-4">{review.review}</p>
                    <div className="flex items-center mt-4 ">
                        <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <p className="text-sm font-bold">{review.name}</p>
                            <p className="text-sm text-neutral-500">{review.title}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div> 
      </div>
    </section>


  )
}

export default Reviews