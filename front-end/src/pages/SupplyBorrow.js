import React, { useState } from 'react';
import DefaultFooter from '../components/DefaultFooter';
import Button from '@material-tailwind/react/Button';
import DefaultNavbar from '../components/DefaultNavbar';

import TableCard from '../components/TableCard';

export default function LendingPool() {

    const [mode, setMode] = useState('borrow')
    console.log(mode)

    return (

        <main>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>

            <div className="items-center">

                <div className="bg-contract pt-14 pb-28 px-3 md:px-8 h-auto">
                    <div className="container mx-auto max-w-full">
                        <div className="w-full p-12 px-4 ml-auto mr-auto text-center">
                            <h1 class="my-4 tracking-wider md:text-sm mb-8 font-semibold text-white opacity-75  leading-tight text-left md:text-center">
                                Lending Pool - {mode}
                            </h1>
                            {
                                mode === 'supply' ?
                                <div className="inline-flex float-left " >
                                <Button
                                    color="transparent"
                                    className=" flex-1 bg-new-green py-4 h-10 rounded-full"
                                    ripple="dark"
                                    
                                >
                                    <span className="text-white normal-case text-sm" >
                                        Supply
                                    </span>
                                </Button>

                                <Button
                                    color="transparent"
                                    className="flex-1 bg-new-purple opacity-25 py-4 h-10 ml-4 rounded-full"
                                    ripple="dark"
                                    onClick={() => setMode('borrow')}
                                >
                                    <span className="text-white  normal-case text-sm" >
                                        Borrow
                                    </span>
                                </Button>
                            </div>
                            :
                            <div className="inline-flex float-left " >
                                <Button
                                    color="transparent"
                                    className=" flex-1 bg-new-green opacity-25 py-4 h-10 rounded-full"
                                    ripple="dark"
                                    onClick={() => setMode('supply')}
                                >
                                    <span className="text-white  normal-case text-sm" >
                                        Supply
                                    </span>
                                </Button>

                                <Button
                                    color="transparent"
                                    className="flex-1 bg-new-purple py-4 h-10 ml-4 rounded-full"
                                    ripple="dark"
                                >
                                    <span className="text-white  normal-case text-sm" >
                                        Borrow
                                    </span>
                                </Button>
                            </div>
                            }
                            <div className="grid grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mb-4">
                                <div className="m-8" >
                                    <h1 class="my-4 tracking-wider md:text-md font-semibold text-white opacity-50  leading-tight text-center md:text-center">
                                        Wallet Balance
                                    </h1>
                                    <h1 className=" tracking-wider font-bold md:mb-8  md:text-xl">
                                        <span className="bg-clip-text text-white opacity-75" > $ {'6,745,637,488.18'} </span>
                                    </h1>
                                </div>

                                <div className="m-8" >
                                    <h1 class="my-4 tracking-wider md:text-md font-semibold text-white opacity-50  leading-tight text-center md:text-center">
                                        Available Deposit
                                    </h1>
                                    <h1 className=" tracking-wider font-bold md:mb-8  md:text-xl">
                                        <span className="bg-clip-text text-white  opacity-75" > $ {'14,745,637,488.18'} </span>
                                    </h1>
                                </div>

                                <div className="m-8" >
                                    <h1 class="my-4 tracking-wider md:text-md font-semibold text-white opacity-50  leading-tight text-center md:text-center">
                                        Total Supplied
                                    </h1>
                                    <h1 className=" tracking-wider font-bold md:mb-8  md:text-xl">
                                        <span className="bg-clip-text text-white  opacity-75" > $ {'14,745,637,488.18'} </span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-3 md:px-8 h-auto -mt-24">
                    <div className="container mx-auto max-w-full">
                        <div className="grid grid-cols-1 px-4 mb-16">

                         {
                             mode === 'supply' ?
                             <>
                             <TableCard header={'Your Deposit'} double={true} mode={mode} name={['Supply', 'Withdraw']} />

                             <TableCard header={'Your Supply'} double={false} mode={mode} name={['Withdraw']} />
                             </>
                             :
                             <>
                             <TableCard header={'Your Borrow'} double={false} mode={mode} name={['Repay']} />

                             <TableCard header={'Borrow Pool'} double={false} mode={mode} name={['Borrow']} />
                             </>
                         }


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