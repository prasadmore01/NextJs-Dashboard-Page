import Link from "next/link";

export default function Header(){



    return(
        <>
            <div className="flex flex-wrap justify-between pl-9 pr-9 w-[100%] h-[80px] items-center sticky top-0 bg-blue-400">
                <div>
                    <img src="http://localhost:3000/logo.png" className="w-[180px] h-[80px] p-1" />
                </div>

                <div>
                    <ul className="flex flex-wrap justify-evenly gap-7 font-bold text-white hover:">
                        <Link href="/"><li>Home</li></Link>
                        <Link href="about"><li>About</li></Link>
                        <Link href="contact"><li>Contact</li></Link>

                    </ul>
                </div>
            </div>
        </>
    )


}