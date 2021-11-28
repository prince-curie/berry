import React from 'react';
import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import DefaultFooter from '../components/DefaultFooter';
import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';

import DefaultNavbar from '../components/DefaultNavbar';
import USDC from '../assets/img/USDC.png'
import Tether from '../assets/img/tether.png';

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
                                        <span className="bg-clip-text text-transparent font-bold bg-gradient-to-b from-light-color-500  to-green-500" > $ {'6,745,637,488.18'} </span>
                                    </h1>
                                </div>

                                <div className="m-8" >
                                    <h1 class="my-4 tracking-wider md:text-md font-semibold text-white opacity-75  leading-tight text-center md:text-center">
                                        Total Borrow Volume
                                    </h1>
                                    <h1 className=" tracking-wider font-bold md:mb-8  md:text-2xl">
                                        <span className="bg-clip-text text-transparent font-bold bg-gradient-to-b from-light-color-500  to-green-500" > $ {'14,745,637,488.18'} </span>
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
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                        <div className="flex">
                                                            <div className="w-10 h-10 rounded-full border-2 border-white">
                                                                <Image
                                                                    src={USDC}
                                                                    rounded
                                                                    alt="..."
                                                                />
                                                            </div>
                                                            <div className="w-13 h-10 -ml-2">
                                                                <span className="text-sm" >
                                                                    USDC
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                        $2,500 USD
                                                    </th>
                                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                        <span className="text-new-green" >
                                                            3.6%
                                                        </span>
                                                    </th>
                                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                        $2,500 USD
                                                    </th>

                                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                        <span className="text-new-purple" >
                                                            3.6%
                                                        </span>
                                                    </th>
                                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                        <div className="flex">
                                                            <div className="w-20 h-20">
                                                                <Button
                                                                    color="transparent"
                                                                    className=" flex-1 border border-solid border-green-500 py-4  ml-4 rounded-full"
                                                                    ripple="dark"
                                                                >
                                                                    <span className="text-new-green normal-case text-sm" >
                                                                        Supply
                                                                    </span>
                                                                </Button>
                                                            </div>
                                                            <div className="w-20 h-20 ml-4">
                                                                <Button
                                                                    color="transparent"
                                                                    className="flex-1 border border-solid border-purple-500 py-4  ml-8 rounded-full"
                                                                    ripple="dark"
                                                                >
                                                                    <span className="text-new-purple normal-case text-sm" >
                                                                        Borrow
                                                                    </span>
                                                                </Button>
                                                            </div>

                                                        </div>
                                                    </th>
                                                </tr>


                                                <tr>
                                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                        <div className="flex">
                                                            <div className="w-10 h-10 rounded-full border-2 border-white">
                                                                <Image
                                                                    src={Tether}
                                                                    rounded
                                                                    alt="..."
                                                                />
                                                            </div>
                                                            <div className="w-13 h-10 -ml-2">
                                                                <span className="text-sm" >
                                                                    ALGO
                                                                </span>
                                                            </div>

                                                        </div>
                                                    </th>
                                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                        $1,800 USD
                                                    </th>
                                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                        <span className="text-new-green" >
                                                            5.3%
                                                        </span>
                                                    </th>
                                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                        $1,800 USD
                                                    </th>

                                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                        <span className="text-new-purple" >
                                                            3.6%
                                                        </span>
                                                    </th>

                                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                        <div className="flex">
                                                            <div className="w-20 h-20">
                                                                <Button
                                                                    color="transparent"
                                                                    className=" flex-1 py-4  border border-solid border-green-500 ml-4 rounded-full"
                                                                    ripple="dark"
                                                                >
                                                                    <span className="text-new-green normal-case text-sm" >
                                                                        Supply
                                                                    </span>
                                                                </Button>
                                                            </div>
                                                            {/* <div className="w-20 h-20 ml-4">
                                                                <Button
                                                                    color="transparent"
                                                                    className="flex-1 py-4 border border-solid border-purple-500 ml-8 rounded-full"
                                                                    ripple="dark"
                                                                >
                                                                    <span className="text-new-purple normal-case text-sm" >
                                                                        Borrow
                                                                    </span>
                                                                </Button>
                                                            </div> */}

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