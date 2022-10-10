
import {FaLinkedin} from  'react-icons/fa'
import {FaGithub} from  'react-icons/fa'
import {FaInstagram} from  'react-icons/fa'
export default function Footer() {
    return (
        <div className = "bg-black h-24 text-slate-200 flex justify-center items-center gap-5 text-4xl">
            
            <FaGithub />
            <FaLinkedin />
            <FaInstagram />
    
        </div>

    )
}