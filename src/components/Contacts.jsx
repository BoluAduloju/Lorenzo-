import { CONTACT_INFO } from "../constants"
import RiPhoneLine from 'remixicon-react/PhoneLineIcon'
import RiEmailLine from 'remixicon-react/MailLineIcon'
import RiMapPinLine from 'remixicon-react/MapPinLineIcon'

const Contacts = () => {
  return (
   <section className="max-w-7xl mx-auto" id="contact">
     <div className="my-20">
        <h2 className="text-2xl lg:text-[40px] tracking-tight text-center mt-20 mb-12 font-medium">Contact Us</h2>
        <p className="max-w-2xl text-lg mb-12 text-center mx-auto">{CONTACT_INFO.text}</p>
        <div className="flex flex-col lg:flex-row justify-around mx-4">
            <div className=" flex mb-8 lg:mb-0">
                <RiPhoneLine className="text-3xl mr-4"/>
                <div>
                    <p className="text-lg font-semibold">{CONTACT_INFO.phone.label}</p>
                    <p className="text-neutral-600">{CONTACT_INFO.phone.value}</p>
                </div>
            </div>
            <div className=" flex mb-8 lg:mb-0">
                <RiEmailLine className="text-3xl mr-4"/>
                <div>
                    <p className="text-lg font-semibold">{CONTACT_INFO.email.label}</p>
                    <p className="text-neutral-600">{CONTACT_INFO.email.value}</p>
                </div>
            </div>
            <div className=" flex ">
                <RiMapPinLine className="text-3xl mr-4"/>
                <div>
                    <p className="text-lg font-semibold">{CONTACT_INFO.address.label}</p>
                    <p className="text-neutral-600">{CONTACT_INFO.address.value}</p>
                </div>
            </div>
        </div>
     </div>

   </section>
  )
}

export default Contacts