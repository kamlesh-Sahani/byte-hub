import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
const Header = () => {
    return (
        <div className="p-7 justify-around items-center  flex h-20 border-b border-b-gray-260 w-[80%]">
            <Link href={"/"} className="flex gap-2 items-center">
                <Image src={logo} alt="logo" className="w-[50px] object-contain " />
                <h1 className="font-semibold">ByteHub</h1>
            </Link>
            <div className="h-[40px] w-[400px] flex relative">
                <input type="text" placeholder="Nextjs, Reactjs, Operting System " className="pl-5 w-full h-full  rounded-md outline-none border border-gray" />
                <IoIosSearch className=" absolute top-[20%] right-5 text-2xl text-gray-400" />
            </div>

        </div>
    )
}

export default Header
