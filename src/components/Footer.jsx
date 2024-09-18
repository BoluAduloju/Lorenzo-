import RiFacebookIcon from'remixicon-react/FacebookFillIcon'
import RiInstagramIcon from'remixicon-react/InstagramFillIcon'
import RiLinkedinIcon from'remixicon-react/LinkedinFillIcon'


const Footer = () => {
  return (
   <footer className="max-w-7xl mx-auto">
     <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
        <p className="text-sm">&copy; 2024 Lorenzo. All right reserved.</p>
        <div className="flex space-x-6 mb-2">
            <a href="#">
                <RiFacebookIcon />
            </a>
            <a href="#">
                <RiInstagramIcon />
            </a>
            <a href="#">
                <RiLinkedinIcon />
            </a>
        </div>  
     </div>
   </footer>
  )
}

export default Footer