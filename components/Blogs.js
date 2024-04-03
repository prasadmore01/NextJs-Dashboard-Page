import useSWR from "swr"
import Link from "next/link";
import Image from 'next/image'


const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Blogs() {

    const { data, error } = useSWR("http://localhost:3000/blogs.json", fetcher)


    return (
        <div>
            {data &&
                <div>
                    <div className="flex flex-wrap gap-8 justify-center mt-7 mb-7">
                        {data.map((d)=>{
                            let str = d.title
                            let arr = str.split(" ")
                            let urlTitle = arr.join("_")
                            return(
                                
                                <div className="w-[450px] bg-gray-200 shadow-lg p-5 rounded-lg ">
                                    <Image src="https://source.unsplash.com/1600x1000/?blogs" width={500}
                                    height={500} className="mb-3"/>
                                    <h1 className="font-bold text-[26px] mb-4">{d.title}</h1>
                                    <h4 className="text-[17px] mb-4">{d.blog}</h4>
                                    <p className="text-[15px] font-semibold mb-4">Published Date : {d.date}</p>
                                    <Link href={`/${urlTitle}`}><button className="p-4 bg-blue-400 text-white rounded-md  hover:bg-blue-500">Read More</button></Link>
                                </div>
                                
                            )
                        })}
                    </div>
                
                </div>}
        </div>
    )
}