import Zach from "/src/zach.jpeg"
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'


export default function Info() {
    return (
    <div className = "rounded-t-xl">
        <img src = {Zach} className = "rounded-t-xl"/> 
        <p className = "pt-3 text-3xl font-bold">Zach Thomas</p>
        <p className = "text-lg text-amber-300">FullStack Devloper</p>
        <p className = "text-m">zachthomas.dev</p>
        <div className = "pt-3 flex justify-center">
            <button className = "w-36 mr-2 flex items-center gap-2 justify-center">Email<AiOutlineMail /></button>
            <button className = "w-36 ml-2 bg-neutral-300 text-black flex items-center gap-2 justify-center">Linkedin<AiFillLinkedin /></button>
        </div>
    </div>
    )
}