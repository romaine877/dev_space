import Layout from "../Components/Layout";

export default function AboutPage() {
    return (
        <Layout title='About Page'>
            <h1 className="text-5xl  pb-5 font-bold">
                About Us
            </h1>
            <div className="p-8 shadow-xl rounded-lg">
                <h3 className="font-bold text-xl mb-3">DevSpace</h3>
                <p className="mb-3">Blog for practice</p>
                <p className="mb-3 font-bold">Copyright 2022 all wrongs reserved</p>
            </div>
        </Layout>
    )
}
