import { Metadata } from "next";
import HeaderSection from "@/component/header-section";
import {
    IoMailOutline,
    IoCallOutline,
    IoLocationOutline
    
} from "react-icons/io5";
import ContactForm from "@/component/contact-form";

export const metadata: Metadata = {
  title: "Contact",
    description: "Contact page description",
};

const ContactPage = () => {
  return (
    <div>
        <HeaderSection title="Contact Us" subTitle="Lorem ipsum dolor sit amet."/>
        <div className="max-w-screen-xl mx-auto py-20 px-4">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h1 className="text-lg text-gray-500 mb-3">Contact Information</h1>
                    <h1 className="text-5xl font-semibold text-gray-900 mb-4">Get in touch with us</h1>
                    <p className="text-gray-700 py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <ul className="list-item space-y-6 pt-8">
                        <li className="flex gap-5">
                            <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                                <IoMailOutline className="size-7"/>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold mb-1">Email : </h4>
                                <p>Email-us@example.com</p>
                            </div>
                        </li>

                        <li className="flex gap-5">
                            <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                                <IoCallOutline className="size-7"/>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold mb-1">Phone Number : </h4>
                                <p>+1 234 567 890, +1 987 654 3210</p>
                            </div>
                        </li>

                        <li className="flex gap-5">
                            <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                                <IoLocationOutline className="size-7"/>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold mb-1">Location : </h4>
                                <p>123 Main St, Anytown, USA</p>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* Contact Form */}
                <ContactForm />

            </div>
        </div>
    </div>
  )
}

export default ContactPage
