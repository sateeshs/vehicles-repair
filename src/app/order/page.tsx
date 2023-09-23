'use client'
import { Fragment } from 'react'

import { Meta } from "@/components/layouts/meta";
import { Main } from "@/components/templates/main";
import { BaseNextPage } from "@/types/base-next-page";
import { useSearchParams } from 'next/navigation';
interface OrderProps {
  orderId: string
}
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}
const OrderPage = () => {
  const searchParams = useSearchParams()
  const queryString = searchParams.get('q');
  const locations = [
    {
      name: 'Order#1',
      repair: [
        { key:'1', TSK_COMPONENT_DESC: 'WIPER BLADE ASSEMBLY', TSK_ASSEMBLY_DESC: 'WINDSHIELD WIPER & W', technician: 'lindsay.walton@example.com', role: 'Member' },
        { key:'1', TSK_COMPONENT_DESC: 'PILOT-CA DRY B PM - HD', TSK_ASSEMBLY_DESC: 'INSPECT-HEAVY DUTY', technician: 'courtney.henry@example.com', role: 'Admin' },
      ],
    },]
    return(   <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
   <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">{queryString}</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the tasks in your order.
          </p>
        </div>
        {/* <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div> */}
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full">
              <thead className="bg-white">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                    Component
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Assembly
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Technician
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Role
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {locations.map((location) => (
                  <Fragment key={location.name}>
                    <tr className="border-t border-gray-200">
                      <th
                        colSpan={5}
                        scope="colgroup"
                        className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                      >
                        {location.name}
                      </th>
                    </tr>
                    {location.repair.map((repair, personIdx) => (
                      <tr
                        key={repair.key}
                        className={classNames(personIdx === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t')}
                      >
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                          {repair.TSK_COMPONENT_DESC}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{repair.TSK_ASSEMBLY_DESC}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{repair.technician}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{repair.role}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                          <a href="#" className="text-indigo-600 hover:text-indigo-900">
                            Edit<span className="sr-only"></span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </Main>  );
}
OrderPage.auth= false;
export default OrderPage; 