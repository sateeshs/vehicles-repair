'use client'
// import ChatButton from "@/components/chat-wrapper/chat-button";
// import ChatWrapper from "@/components/chat-wrapper/chat-wrapper-test";
//import ChatWrapper from "@/components/chat-wrapper/chat-wrapper";
import { Meta } from "@/components/layouts/meta";
import SlideOver from "@/components/slide-over";
import { Main } from "@/components/templates/main";
import { Order } from "@/interfaces/order";
import { BaseNextPage } from "@/types/base-next-page";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HomePage: BaseNextPage<{}> = () => {
  const [openSlideOver, setOpenSlideOver] = useState(false);
  const [ordersData, setOrdersData] = useState<Order[]>();
  const router = useRouter();

  const handleAddOrder = (e: any) => {
  e.preventDefault();
  setOpenSlideOver(!openSlideOver);
  }

  const handleOrderDetails = (e: any, orderId: string) => {
    e.preventDefault();

    //router.push(`/order?q=${orderId}`);
    redirect(`/order?q=${orderId}`)
  }

  useEffect(() => {
    getOrders().catch(console.error);
  },[])
  const getOrders = async () => {
    const resp = await fetch("/api/orders");
    const data = await resp.json();
    setOrdersData(data);
  }
    const people = [
        {
          name: 'Lindsay Walton',
          title: 'Front-end Developer',
          department: 'Optimization',
          email: 'lindsay.walton@example.com',
          role: 'Member',
          image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        }, {
            name: 'Lindsay Walton',
            title: 'Front-end Developer',
            department: 'Optimization',
            email: 's.walton@example.com',
            role: 'Member',
            image:
              'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },]
    return(<Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
        
        <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Orders</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of orders for login user.
            </p>
          </div>
          {/* <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
            onClick={(e) => handleAddOrder(e)}
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add order
            </button>
          </div> */}
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Order
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      VIN
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Progress
                    </th>
                    {/* <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Edit</span>
                    </th> */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {ordersData?.map((order: Order) => (
                    <tr key={order.key} onClick={(e) => handleOrderDetails(e, order.key)}>
                      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                        <div className="flex items-center">
                          <div className="h-11 w-11 flex-shrink-0">
                            <img className="h-11 w-11 rounded-full"  alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">{order.key}</div>
                            <div className="mt-1 text-gray-500">{order.status}</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-900">{order.vin}</div>
                        <div className="mt-1 text-gray-500">{order.description}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                          {order.status}
                        </span>
                      </td>
                      {/* <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{order.role}</td> */}
                     
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                          <a href="#" className="text-indigo-600 hover:text-indigo-900">
                            Click<span className="sr-only"></span>
                          </a>
                        </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {openSlideOver &&
      <SlideOver isSlideOver ={openSlideOver}/>
}
        {/* <ChatButton></ChatButton> */}
        {/* <ChatWrapper></ChatWrapper> */}
    </Main>)
}
HomePage.auth = false;
export default HomePage;