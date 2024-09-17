import hero from "../assets/hero1.jpg";
import kitchenImage from "../assets/workspace.jpg";
import bathroomImage from "../assets/resturant.jpg";
import livingRoomImage from "../assets/hero.jpg";

import portfolio1 from "../assets/portfolio1.webp";
import portfolio2 from "../assets/portfolio2.webp";
import portfolio3 from "../assets/portfolio3.webp";
import portfolio4 from "../assets/portfolio4.webp";
import portfolio5 from "../assets/portfolio5.webp";
import portfolio6 from "../assets/portfolio6.webp";

import user1 from "../assets/user1.webp";
import user2 from "../assets/user2.webp";
import user3 from "../assets/user3.webp";
import user4 from "../assets/user4.webp";
import user5 from "../assets/user5.webp";
import user6 from "../assets/user6.webp";

export const LINKS = [
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Reviews",
    link: "#reviews",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export const HERO_CONTENT = {
  title: "Transforming Your Space with Elegance and Timeless Creativity.",
  subtitle: "Elevate your space into a modern masterpieces, with our team of exesigners' functional and aesthetic design and space planning",
  image: hero,
};

export const SERVICES_CONTENT = [
  {
    title: "Workspaces Interior Design",
    description:
      "We provide conducsive environment that stirs creativity and productivity with our intuitive and innovative design process both startups and big-tech companies",
    image: kitchenImage,
    alt: "Workspaces interior design",
  },
  {
    title: "Commercial Interior Design",
    description:
      "We offer aestheically appealing interior designs that improves the uniqueness of businesses and brands from Resturants, Hotels, Salons, Gym to other commercial buildings.",
    image: bathroomImage,
    alt: "Commercial interior design",
  },
  {
    title: "Home Interior Design",
    description:
      "Our attention to details, makes us stands out when designing comfortable family living space with obsession to other area of the home such as the kitchen, bathroom, lounge and bedroom, fostering companionship ",
    image: livingRoomImage,
    alt: "Home interior design",
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    name: "Modern Kitchen Renovation",
    description:
      "A complete overhaul of a traditional kitchen, featuring custom cabinetry, granite countertops, and state-of-the-art appliances.",
    image: portfolio1,
    link: "#",
  },
  {
    id: 2,
    name: "Luxurious Bathroom Remodel",
    description:
      "Transformed an outdated bathroom into a spa-like retreat with marble tiling, a glass shower, and modern fixtures.",
    image: portfolio2,
    link: "#",
  },
  {
    id: 3,
    name: "Outdoor Living Space",
    description:
      "Designed a beautiful outdoor living area, complete with a pergola, fire pit, and cozy seating for entertainment.",
    image: portfolio3,
    link: "#",
  },
  {
    id: 4,
    name: "Elegant Living Room Update",
    description:
      "Updated a living room with new flooring, stylish lighting, and custom-built shelving units.",
    image: portfolio4,
    link: "#",
  },
  {
    id: 5,
    name: "Basement Conversion",
    description:
      "Converted an unused basement into a modern, multi-functional space including a home theater, gym, and guest bedroom.",
    image: portfolio5,
    link: "#",
  },
  {
    id: 6,
    name: "Home Office Transformation",
    description:
      "Created a sleek and functional home office, optimizing space with ergonomic furniture, ample storage, and modern decor.",
    image: portfolio6,
    link: "#",
  },
];

export const REVIEWS = {
  text: "Hear what our clients have to say about their experiences with VastuSpaze. We take pride in our work and are committed to delivering top-notch home renovation services.",
  reviews: [
    {
      name: "Mia Johnson",
      title: "Homeowner",
      review:
        "VastuSpaze transformed our outdated kitchen into a modern masterpiece. The team was professional, attentive to our needs, and delivered beyond our expectations. We couldn't be happier with the results!",
      image: user1,
    },
    {
      name: "Bob Jones",
      title: "Homeowner",
      review:
        "Our bathroom renovation was seamless, thanks to VastuSpaze. They took care of everything from design to execution, and the attention to detail was impeccable. Highly recommended!",
      image: user2,
    },
    {
      name: "Carlos Mendes",
      title: "Homeowner",
      review:
        "Lorenzo helped us create the perfect outdoor living space. Their creativity and craftsmanship turned our backyard into a beautiful oasis. It's now our favorite place to relax and entertain guests.",
      image: user3,
    },
    {
      name: "David Yu",
      title: "Homeowner",
      review:
        "The living room update exceeded our expectations. Lorenzo's team was skilled and communicative, ensuring a smooth renovation process. The new design has brought a fresh, modern look to our home.",
      image: user4,
    },
    {
      name: "Ella Anderson",
      title: "Homeowner",
      review:
        "From start to finish, Lorenzo was a pleasure to work with. They listened to our vision and brought it to life with expert craftsmanship. Our home office is now a stylish and functional space.",
      image: user5,
    },
    {
      name: "John Simson",
      title: "Homeowner",
      review:
        "Lorenzo did an amazing job on our basement conversion. They created a cozy, multi-functional space that our family loves. The team was professional and delivered on time and within budget.",
      image: user6,
    },
  ],
};

export const CONTACT_INFO = {
  text: "Have questions or need more information? Get in touch with us, and we ll be happy to assist you.",
  phone: {
    label: "Phone",
    value: "(99) 456-7890",
  },
  email: {
    label: "Email",
    value: "info@lorenzo.com",
  },
  address: {
    label: "Address",
    value: "45 Hoston Ave, Suite 100, Delaware,US",
  },
};
