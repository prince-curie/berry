import React from 'react';
import StatusCard from '../components/table/StatusCard';
import TableCard from '../components/table/TableCard';
import Sidebar from '../components/table/Sidebar';
import './Tables.css'

export const Tables = () => {

    return(

        <>
         <Sidebar /> 
             <div className="md:ml-64">
        <div className="bg-gray-900 pt-14 pb-28 px-3 md:px-8 h-auto">
            <div className="container mx-auto max-w-full">
                <div  className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                    <StatusCard
                        color="pink"
                        icon="trending_up"
                        title="Traffic"
                        amount="350,897"
                        percentage="3.48"
                        percentageIcon="arrow_upward"
                        percentageColor="green"
                        date="Since last month"
                    />
                    <StatusCard
                        color="orange"
                        icon="groups"
                        title="New Users"
                        amount="2,356"
                        percentage="3.48"
                        percentageIcon="arrow_downward"
                        percentageColor="red"
                        date="Since last week"
                    />
                    <StatusCard
                        color="purple"
                        icon="paid"
                        title="Sales"
                        amount="924"
                        percentage="1.10"
                        percentageIcon="arrow_downward"
                        percentageColor="orange"
                        date="Since yesterday"
                    />
                    <StatusCard
                        color="blue"
                        icon="poll"
                        title="Performance"
                        amount="49,65%"
                        percentage="12"
                        percentageIcon="arrow_upward"
                        percentageColor="green"
                        date="Since last month"
                    />
                </div>
            </div>
        </div>

        <div className="px-3 bg-gray-900 md:px-8 h-auto -mt-19">
            <div className="container mx-auto max-w-full">
                <div className="grid grid-cols-1 px-4">
                    <TableCard />
                </div>
            </div>
        </div>
        </div>
    </>

    )

}