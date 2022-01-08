import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gray-900 text-gray-100 shadow w-full">
           <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
               <Link href='/'>
                     <a className="flex md:w-1/5 text-tit font-medium items-center md:justify-start mb-4 md:mb-0">
                         <Image src='/images/logo.png' width={40} height={40}/>
                         <span className="text-xl ml-3">DevSpace</span>
                        </a>
               </Link>
               <nav className="flex flex-wrap flex-col md:flex-row md:w-4/5 items-center justify-end text-base md:ml-auto">
                    
                        <Link href='/blog'>
                            <a className="mx-5 uppercase hover:text-cyan-500">Blog</a>
                        </Link>
                        <Link href='/about'>
                            <a className="mx-5 uppercase hover:text-cyan-500">About</a>
                        </Link>
                        
                        

               </nav>
            </div> 
        </header>
    )
}
