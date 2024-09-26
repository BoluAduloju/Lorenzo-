import hero from "../assets/hero1.jpg";
import workspaceImage from "../assets/workspace.jpg";
import resturantImage from "../assets/resturant.jpg";
import livingRoomImage from "../assets/hero.jpg";

import project1 from "../assets/pro1.jpg";
import project2 from "../assets/pro2.jpg";
import project3 from "../assets/pro3.jpg";
import project4 from "../assets/pro4.jpg";
import project5 from "../assets/pro5.jpg";
import project6 from "../assets/pro6.jpg";

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
  subtitle: "Elevate your space into a modern masterpieces, with our team of designers' functional and aesthetic designs and space planning",
  image: hero,
};

export const SERVICES_CONTENT = [
  {
    title: "Workspaces Interior Design",
    description:
      "We provide conducsive environment that stirs creativity and productivity with our intuitive and innovative design process both startups and big-tech companies",
    image: workspaceImage,
    alt: "Workspaces interior design",
  },
  {
    title: "Commercial Interior Design",
    description:
      "We offer aestheically appealing interior designs that improves the uniqueness of businesses and brands from Resturants, Hotels, Salons, Gym to other commercial buildings.",
    image: resturantImage,
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

export const PROJECTS_CONTENT = [
  {
    id: 1,
    name: "Cravings Eatery",
    description:
      "Complete interior design project done with great focus on customer-friendly design as well as visually appealing,increasing their recurring customers percentage by 200%.",
    image: project1,
    link: "#",
  },
  {
    id: 2,
    name: "GetFit Gym",
    description:
      "Renovated a gym center completely into modern masterpiece, increasing their subscription revenue 5x",
    image: project2,
    link: "#",
  },
  {
    id: 3,
    name: "SynergyHub",
    description:
      "Designed a beautiful co-working space for our client, including conference rooms, offices and also recreation spots.",
    image: project3,
    link: "#",
  },
  {
    id: 4,
    name: "Hair by Eve",
    description:
      "Worked with a solo-founder to rebrand her Salon into a beauty center that her brand represent",
    image: project4,
    link: "#",
  },
  {
    id: 5,
    name: "Bar 1809",
    description:
      "Transformed a small relaxation center for our client into a space that severs multiple purpose through our quality space planning and modern decor  .",
    image: project5,
    link: "#",
  },
  {
    id: 6,
    name: "Julian Estate",
    description:
      "Created a sleek and functional interior design, for a 34 unit bungalow for our client, which she sold out before completion for other units due to how much people love our work.",
    image: project6,
    link: "#",
  },
];

export const REVIEWS = {
  text: "Hear what our clients have to say about their experiences with Lorenzo. We take pride in our work and are committed to delivering top-notch interior design services.",
  reviews: [
    {
      name: "Bob Jones",
      title: "Homeowner",
      review:
        "Lorenzo transformed our outdated home interior into a modern masterpiece. The team was professional, attentive to our needs, and delivered beyond our expectations. We couldn't be happier with the results!",
      image: user1,
    },
    {
      name: "Mia Johnson",
      title: "COO at travelWise",
      review:
        "Our Office renovation was seamless, thanks to Lorenzo. They took care of everything from design to execution, and the attention to detail was impeccable. Highly recommended!",
      image: user2,
    },
    {
      name: "Carlos Mendes",
      title: "Gym Instructor and Owner",
      review:
        "Lorenzo helped us create the perfect Gym space. Their creativity and craftsmanship turned our fitness hub into a beautiful oasis. We are now a go-to place for many in our neighbourhood.",
      image: user3,
    },
    {
      name: "David Yu",
      title: "Real Estate Developer",
      review:
        "The interior design for our units of apartments exceeded our expectations. Lorenzo's team were skilled and communicative, ensuring a smooth design process.",
      image: user4,
    },
    {
      name: "John Simson",
      title: "CEO at Vanguard",
      review:
        "From start to finish, Lorenzo was a pleasure to work with. They listened to our vision and brought it to life with expert craftsmanship. Our office is now a stylish and functional space.",
      image: user5,
    },
    {
      name: "Ella Anderson",
      title: "Stage-Play Director",
      review:
        "Lorenzo did an amazing job on our recent project. They created a cozy, multi-functional space that communicated our story. The team was professional and delivered on time and within budget.",
      image: user6,
    },
  ],
};

export const CONTACT_INFO = {
  text: "Have questions or need more information? Get in touch with us, and we ll be happy to assist you.",
  phone: {
    label: "Phone",
    value: "(99) 456-789-850",
  },
  email: {
    label: "Email",
    value: "info@lorenzo.com",
  },
  address: {
    label: "Address",
    value: "45 Hoston Ave, Delaware, United State",
  },
};
