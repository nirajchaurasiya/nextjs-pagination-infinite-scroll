import Link from 'next/link'
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
export default function Home({ data }) {
  const [datas, setDatas] = useState(data?.products)
  const [count, setCount] = useState(5)
  const [currDatas, setCurrDatas] = useState(datas?.slice(0, count));
  const fetchData = () => {
    setTimeout(() => {
      const infiniteScroll = datas?.slice(count, count + 5)
      setCurrDatas([...currDatas, ...infiniteScroll]);
      setCount(count + 5);
    }, 1000);
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">


        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Welcome to Product<span className='text-pink-700'>K</span>ino!</h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Looking for high-quality products, whether online or offline? Look no further! Our store offers A1 quality on all of our products, ensuring that you receive the best possible value for your money. From electronics to clothing to household items, we&apos;ve got you covered. With our commitment to quality and customer satisfaction, you can trust us to provide you with products that meet or exceed your expectations. Shop with us today and experience the difference that A1 quality can make!</p>
        </div>

        <InfiniteScroll
          dataLength={currDatas?.length || 1} //This is important field to render the next data
          next={fetchData}
          hasMore={count < data?.products.length}
          loader={<div style={{ textAlign: "center", margin: "2rem 2rem" }}>loading...</div>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        ><div className="flex flex-wrap w-full">
            {currDatas !== [] && currDatas?.map((e, index) => {
              return (
                <div key={index} className="xl:w-1/4 md:w-1/2 sm:w-full border border-red-100">
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


  )
}
export async function getServerSideProps() {

  const requestOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  }

  const getUsers = await fetch('https://dummyjson.com/products?limit=0', requestOptions)

  if (!getUsers.ok) {
    throw new Error(`Error! status: ${getUsers.status}`);
  }
  const data = await getUsers.json();
  return {
    props: {
      data: data
    }
  }
}