import Image from "next/image";
import Layout from "../Components/Layout";

export default function NotFound() {
    return (
        <Layout>
            <div className="flex flex-col items-center">
                <Image src='/images/logo.png' width={70} height={70} className="bg-gray-900 rounded-2xl"/>
                <h2 className="text-6xl font-bold my-4">Uh Oh</h2>
                <h4 className="text-xl text-gray-400">Page does not exist</h4>
            </div>
        </Layout>
    )
}
