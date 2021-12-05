import React, { useState } from 'react';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Image from '@material-tailwind/react/Image';
import USDC from '../assets/img/USDC.png'
import Algo from '../assets/img/algo_logo.png';
import Button from '@material-tailwind/react/Button';
import ToggleButton from 'react-toggle-button';

export default function TableCard({ returnInput, collat, returnCollat, header, double, name, mode }) {

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
                                        Balance
                                    </th>
                                    <th className="px-2 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                        APY
                                    </th>
                                    <th className="px-2 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                        Collateral
                                    </th>
                                    <th className="align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">

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
                                            <div className="w-13 h-10 mt-1">
                                                <span className="text-sm" >
                                                    USDC
                                                </span>
                                            </div>
                                        </div>
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap  py-4 text-left">
                                        1,400.00 USDC
                                        <p className="text-xs">($1,400.00)</p>
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap  py-4 text-left">
                                        <span className="text-new-green" >
                                            5.0%
                                        </span>
                                    </th>
                                    
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        --
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap  py-4 text-left">
                                        {
                                            mode === 'supply' ?
                                                double ?
                                                    <div className="flex">
                                                        <div className="w-20 h-20">
                                                            <Button
                                                                color="transparent"
                                                                className=" flex-1 bg-new-green border border-solid border-green-500 py-4  ml-4 rounded-full"
                                                                ripple="dark"
                                                                onClick={() => returnInput(name[0])}
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
                                                                onClick={() => returnInput(name[1])}
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
                                                                onClick={() => returnInput(name[0])}
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
                                                            onClick={() => returnInput(name[0])}
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
                                    <th className=" align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <div className="flex">
                                            <div className="w-10 h-10 rounded-full border-2 border-white">
                                                <Image
                                                    src={Algo}
                                                    rounded
                                                    alt="..."
                                                />
                                            </div>
                                            <div className="w-13 h-10 mt-1">
                                                <span className="text-sm" >
                                                    ALGO
                                                </span>
                                            </div>

                                        </div>
                                    </th>
                                    <th className=" align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        1,800 ALGO
                                        <p className="text-xs">($2,880.00)</p>
                                    </th>
                                    <th className=" align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <span className="" >
                                          
                                        </span>
                                    </th>
                                   

                                    <th className=" align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <ToggleButton
                                            value={collat || false}
                                            onToggle={(value) => {
                                                returnCollat(!value)
                                            }} />
                                    </th>

                                    <th className=" align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        {
                                            mode === 'supply' ?
                                                double ?
                                                    <div className="flex">
                                                        <div className="w-20 h-20">
                                                            <Button
                                                                color="transparent"
                                                                className=" flex-1 bg-new-green border border-solid border-green-500 py-4  ml-4 rounded-full"
                                                                ripple="dark"
                                                                onClick={() => returnInput(name[0])}
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
                                                                onClick={() => returnInput(name[1])}
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
                                                                onClick={() => returnInput(name[0])}
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
                                                            onClick={() => returnInput(name[0])}
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