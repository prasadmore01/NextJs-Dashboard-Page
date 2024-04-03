import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="w-[100%] h-[250px] bg-blue-400 flex flex-wrap pt-8 mt-5">
                <div className="w-[33%] text-[27px] p-3 font-bold text-white text-center">
                    <h1>About</h1>
                    <p className="text-[17px] font-semibold">This is a Sample Website!</p>
                </div>

                <div className="w-[33%] text-[27px] p-3 font-bold text-white text-center">
                    <h1>Services</h1>
                    <ul className="list-none text-[17px]">
                    <Link href="/"><li className="mb-2">Home</li></Link>
                    <Link href="about"><li className="mb-2">About</li></Link>
                    <Link href="contact"><li className="mb-2">Contact</li></Link>
                    </ul>
                </div>

                <div className="w-[33%] text-[27px] p-3 font-bold text-white text-center">
                    <h1>Contact</h1>
                    <p className="text-[17px] font-semibold mb-2">sampleDemo@gmail.company</p>
                    <p className="text-[17px] font-semibold">123456789</p>

                </div>
            </div>
        </>

    )
}