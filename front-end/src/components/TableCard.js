import React from 'react';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Image from '@material-tailwind/react/Image';
import USDC from '../assets/img/USDC.png'
import Tether from '../assets/img/tether.png';
import Button from '@material-tailwind/react/Button';

export default function TableCard({ header, double, name, mode }) {

    return (
        <>
            
            <Card className="mb-8" >
            <h2 className="text-black text-md">{header}</h2>
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
                                        {
                                            mode === 'supply' ? 
                                            double ?
                                            <div className="flex">
                                            <div className="w-20 h-20">
                                                <Button
                                                    color="transparent"
                                                    className=" flex-1 bg-new-green border border-solid border-green-500 py-4  ml-4 rounded-full"
                                                    ripple="dark"
                                                >
                                                    <span className="text-white normal-case text-sm" >
                                                        {name[0]}
                                                    </span>
                                                </Button>
                                            </div>
                                            <div className="w-20 h-20 ml-4">
                                                <Button
                                                    color="transparent"
                                                    className="flex-1 border border-solid border-green-500 py-4  ml-8 rounded-full"
                                                    ripple="dark"
                                                >
                                                    <span className="text-new-green normal-case text-sm" >
                                                    {name[1]}
                                                    </span>
                                                </Button>
                                            </div>

                                        </div>
                                        :
                                         <div className="flex">
                                         <div className="w-20 h-20 ml-4">
                                             <Button
                                                 color="transparent"
                                                 className="flex-1 border border-solid border-green-500 py-4  ml-8 rounded-full"
                                                 ripple="dark"
                                             >
                                                 <span className="text-new-green normal-case text-sm" >
                                                     {name[0]}
                                                 </span>
                                             </Button>
                                         </div>

                                     </div>
                                        :
                                        <div className="flex">
                                          
                                            <div className="w-20 h-20 ml-4">
                                                <Button
                                                    color="transparent"
                                                    className="flex-1 border border-solid border-purple-500 py-4  ml-8 rounded-full"
                                                    ripple="dark"
                                                >
                                                    <span className="text-new-purple normal-case text-sm" >
                                                    {name[0]}
                                                    </span>
                                                </Button>
                                            </div>

                                        </div>
                                        }
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
                                    {
                                            mode === 'supply' ? 
                                            double ?
                                            <div className="flex">
                                            <div className="w-20 h-20">
                                                <Button
                                                    color="transparent"
                                                    className=" flex-1 bg-new-green border border-solid border-green-500 py-4  ml-4 rounded-full"
                                                    ripple="dark"
                                                >
                                                    <span className="text-white normal-case text-sm" >
                                                        {name[0]}
                                                    </span>
                                                </Button>
                                            </div>
                                            <div className="w-20 h-20 ml-4">
                                                <Button
                                                    color="transparent"
                                                    className="flex-1 border border-solid border-green-500 py-4  ml-8 rounded-full"
                                                    ripple="dark"
                                                >
                                                    <span className="text-new-green normal-case text-sm" >
                                                    {name[1]}
                                                    </span>
                                                </Button>
                                            </div>

                                        </div>
                                        :
                                         <div className="flex">
                                         <div className="w-20 h-20 ml-4">
                                             <Button
                                                 color="transparent"
                                                 className="flex-1 border border-solid border-green-500 py-4  ml-8 rounded-full"
                                                 ripple="dark"
                                             >
                                                 <span className="text-new-green normal-case text-sm" >
                                                     {name[0]}
                                                 </span>
                                             </Button>
                                         </div>

                                     </div>
                                        :
                                        <div className="flex">
                                          
                                            <div className="w-20 h-20 ml-4">
                                                <Button
                                                    color="transparent"
                                                    className="flex-1 border border-solid border-purple-500 py-4  ml-8 rounded-full"
                                                    ripple="dark"
                                                >
                                                    <span className="text-new-purple normal-case text-sm" >
                                                    {name[0]}
                                                    </span>
                                                </Button>
                                            </div>

                                        </div>
                                        }
                                    </th>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </CardBody>
            </Card>
        </>
    )

}