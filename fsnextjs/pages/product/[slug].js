import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import InfiniteScroll from 'react-infinite-scroll-component';
const Products = ({ data }) => {
    const [datas, setDatas] = useState(data?.products)
    const [count, setCount] = useState(5)
    const [currDatas, setCurrDatas] = useState(data?.products?.slice(0, count));

    const [filteredData, setFilteredData] = useState();
    const [remainingData, setRemainingData] = useState()
    const [loader, setLoader] = useState(true)
    const router = useRouter()
    const { slug } = router.query


    const fetchData = () => {
        setTimeout(() => {
            const infiniteScroll = datas.slice(count, count + 5)
            setCurrDatas([...currDatas, ...infiniteScroll]);
            setCount(count + 5);
        }, 1000);
    }

    const matchProducts = (id) => {
        setFilteredData(data.products?.filter(e => e.id == id)[0])
        setRemainingData(data.products?.filter(e => e.id !== id))
        setLoader(false)
    }
    useEffect(() => {
        matchProducts(slug);
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 1000);
    }, [slug])
    if (loader) {
        return (
            <div className='mt-10'>
                <div className="loader text-black">
                </div>
            </div>
        )
    }
    return (
        <>

            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">



                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={filteredData.thumbnail} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{filteredData.brand}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{filteredData.title}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>

                                    <span className="text-gray-600 ml-3">{filteredData.rating}</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>




                            <p className="leading-relaxed">{filteredData.description}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex">
                                    <span className="mr-3">{filteredData.category}</span>
                                    <button className="border-2 border-gray-300 rounded-full w-8 h-8 focus:outline-none" title='In Stock'>{filteredData.stock}</button>
                                </div>
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">DicountPercentage</span>
                                    <div className="relative">
                                        <p className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                            {filteredData.discountPercentage}%
                                        </p>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">${filteredData.price}</span>
                                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 xl:px-6 md:px-4 sm:px-2 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        {filteredData?.images?.map(e => {
                            return (
                                <div key={e} className="lg:w-1/3 sm:w-1/2 p-4">
                                    <div className="flex relative">
                                        <img alt="gallery" className="w-96 h-auto object-cover object-center" src={e} />

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>



            <h3 style={{ textAlign: "center" }}>Remaining Products</h3>



            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">

                    <InfiniteScroll
                        dataLength={currDatas.length} //This is important field to render the next data
                        next={fetchData}
                        hasMore={count < data.products.length}
                        loader={<div style={{ textAlign: "center", margin: "2rem 2rem" }}>loading...</div>}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    ><div className="flex flex-wrap w-full">
                            {currDatas && currDatas?.map((e, index) => {
                                return (
                                    <div key={index} className="xl:w-1/4 md:w-1/2 border border-red-100">
                                        <div className="bg-gray-100 p-6 rounded-lg">
                                            <img className="h-40 rounded w-full object-cover object-center mb-6" src={e.images[0]} alt="content" />
                                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">${e.price}</h3>
                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{e.title}</h2>
                                            <p className="leading-relaxed text-base">{e.description}</p>
                                            <Link key={index} href={`/product/${e.id}`}>
                                                <button className='bg-indigo-500 text-white w-full text-center p-2 rounded-md mt-3'>View More</button>
                                            </Link>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </InfiniteScroll>
                </div>

            </section>
        </>
    )
}

export default Products

export async function getStaticPaths() {
    const getUsers = await fetch('https://dummyjson.com/products?limit=0')
    const data = await getUsers.json();
    const paths = data.products.map(e => {
        return {
            params: {
                slug: e.id.toString(),
            }
        }
    });
    return {

        paths,
        fallback: true,
    }
}


export const getStaticProps = async () => {
    const getUsers = await fetch('https://dummyjson.com/products?limit=0')
    const data = await getUsers.json();
    return {
        props: {
            data: data
        }
    }
}