import React from 'react';
import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import DefaultFooter from '../components/DefaultFooter';
import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import { Link } from "react-router-dom";

import DefaultNavbar from '../components/DefaultNavbar';
import USDC from '../assets/img/USDC.png'

export default function LendingPool() {

    return (

        <main>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>

            <div className="items-center">

                <div className="bg-contract pt-14 pb-28 px-3 md:px-8 h-auto">
                    <div className="container mx-auto max-w-full">
                        <div className="w-full p-12 px-4 ml-auto mr-auto text-center">
                            <h1 class="my-4 tracking-wider md:text-xl font-semibold text-white opacity-75  leading-tight text-center md:text-center">
                                LIQUIDITY POOL
                            </h1>
                            <h1 className=" tracking-wider font-bold md:mb-8  md:text-2xl">
                                <span className="bg-clip-text text-transparent font-bold bg-gradient-to-b from-light-color-500  to-green-500" > $ {'27,745,637,488.18'} </span>
                            </h1>
                            <div className="inline-flex" >
                                <div className="m-8" >
                                    <h1 class="my-4 tracking-wider md:text-md font-semibold text-white opacity-75  leading-tight text-center md:text-center">
                                        Total Supply Volume
                                    </h1>
                                    <h1 className=" tracking-wider font-bold md:mb-8  md:text-2xl">
                                        <span className=" text-gray-400 font-bold " > $ {'6,745,637,488.18'} </span>
                                    </h1>
                                </div>

                                <div className="m-8" >
                                    <h1 class="my-4 tracking-wider md:text-md font-semibold text-white opacity-75  leading-tight text-center md:text-center">
                                        Total Borrow Volume
                                    </h1>
                                    <h1 className=" tracking-wider font-bold md:mb-8  md:text-2xl">
                                        <span className=" text-gray-400 font-bold " > $ {'14,745,637,488.18'} </span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-3 md:px-8 h-auto -mt-24">
                    <div className="container mx-auto max-w-full">
                        <div className="grid grid-cols-1 px-4 mb-16">

                            <Card>
                                <CardBody>
                                    <div className="overflow-x-auto">
                                        <table className="items-center w-full bg-transparent border-collapse">
                                            <thead>
                                                <tr>
                                                    <th className="px-2  align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                                        Assets
                                                    </th>
                                                    <th className="px-2  align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                                        Total Supplied
                                                    </th>
                                                    <th className="px-2 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                                        Supply APY
                                                    </th>
                                                    <th className="px-2 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                                        Totally Borrowed
                                                    </th>
                                                    <th className="px-2 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                                        Borrow APY
                                                    </th>
                                                    <th className="px-2 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                                     
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                        <div className="flex">
                                                            <div className="w-10 h-10 rounded-full border-2 border-white">
                                                                <Image
                                                                    src={USDC}
                                                                    rounded
                                                                    alt="..."
                                                                />
                                                            </div>
                                                            <div className="w-13 h-10  mt-1">
                                                                <span className="text-sm" >
                                                                    USDC
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <th className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                        $2,500.06M
                                                    </th>
                                                    <th className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                        <span className="text-new-green" >
                                                            5.0%
                                                        </span>
                                                    </th>
                                                    <th className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                        $8,500.06M
                                                    </th>

                                                    <th className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                        <span className="text-new-purple" >
                                                            7.0%
                                                        </span>
                                                    </th>
                                                    <th className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                        <div className="flex">
                                                            <div className="w-20 h-20">
                                                            <Link to='/mode/supply' >
                                                                <Button
                                                                    color="transparent"
                                                                    className=" flex-1 border border-solid border-green-500 py-4  ml-4 rounded-full"
                                                                    ripple="dark"
                                                                >
                                                                    <span className="text-new-green normal-case text-sm" >
                                                                        Supply
                                                                    </span>
                                                                </Button>
                                                                </Link>
                                                            </div>
                                                            <div className="w-20 h-20 ml-4">
                                                                <Link to='/mode/borrow' >
                                                                <Button
                                                                    color="transparent"
                                                                    className="flex-1 border border-solid border-purple-500 py-4  ml-8 rounded-full"
                                                                    ripple="dark"
                                                                    href="/mode/borrow"
                                                                >
                                                                    <span className="text-new-purple normal-case text-sm" >
                                                                        Borrow
                                                                    </span>
                                                                </Button>
                                                                </Link>
                                                            </div>

                                                        </div>
                                                    </th>
                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                </CardBody>
                            </Card>


                        </div>
                    </div>
                </div>

            </div>

            <div className="bg-contract">
            <DefaultFooter />
            </div>

        </main>

    )

}