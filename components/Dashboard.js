
import { useEffect, useState } from "react"
import useSWR from "swr"
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Dashboard() {

    // const[user,setUser] = useState([])

    const { data, error } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher)
   



    return (
        <>
            {data &&
                <div className="w-[100%] h-[auto]  flex flex-wrap gap-4 justify-center p-6">
                    {data.map((d) => {
                        return (
                            <div className="w-[300px] bg-gray-200 p-6 rounded-lg shadow-lg text-[20px]">
                                <h1>Name : {d.name}</h1>
                                <h1>Company Name : {d.company.name}</h1>
                                <h1>Email Id : {d.email}</h1>
                                <h1>Address : {d.address.city}</h1>
                            </div>
                        )
                    })}
                </div>}
        </>
    )

}