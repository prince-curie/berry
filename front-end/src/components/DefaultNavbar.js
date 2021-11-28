import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import Icon from '@material-tailwind/react/Icon';
import Button from '@material-tailwind/react/Button';
import Logo from '../assets/img/logo.png';
import Algo from '../assets/img/algo.png';
import Meta from '../assets/img/metamask.png'
import CardImage from '@material-tailwind/react/CardImage';

export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar color="transparent" navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <a
                        href="/"
                        target="_blank"
                        className="items-center inline-flex space-x-4 md:w-40"
                        rel="noreferrer"
                    >
                          <img className="md:w-18 md:h-16 " alt="logo" src={Logo} />
                        <NavbarBrand >
                           <span className="text-xl" > Berry </span>
                            </NavbarBrand>
                    </a>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <div className="flex flex-col z-50 lg:flex-row lg:items-center">
                            <NavLink
                                href="/lending"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                               
                                &nbsp;Lending Pool
                            </NavLink>
                            <NavLink
                                href="/"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                               
                                &nbsp;Market
                            </NavLink>
                            <div className="text-white">
                                <Dropdown
                                    color="transparent"
                                    size="sm"
                                    buttonType="link"
                                    buttonText={
                                        <div className="py-2.5 font-medium flex items-center">
                                            <span className="ml-2">
                                                Assets
                                            </span>
                                        </div>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/">
                                        <DropdownItem color="lightGreen">
                                            ETH
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/">
                                        <DropdownItem color="lightGreen">
                                            BNB
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/">
                                        <DropdownItem color="lightGreen">
                                            ADA
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/">
                                        <DropdownItem color="lightGreen">
                                            BUSD
                                        </DropdownItem>
                                    </Link>
                                </Dropdown>
                            </div>
                           
                            <div className="text-white bg-new-gray-100 rounded-lg">
                                    <Dropdown
                                    color="transparent"
                                    size="sm"
                                    buttonType="link"
                                    
                                    buttonText={
                                        <span className="text-green-400 normal-case text-sm" >
                                    Connect to a wallet
                                    </span>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/">
                                        <DropdownItem color="lightGreen">
                                           <div className="space-x-4" >
                                           <span className="inline-block text-md" >
                                                Algo wallet
                                            </span>
                                           <img className="inline-block" alt="dai" src={Algo} />
                                           
                                           </div>
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/">
                                        <DropdownItem color="lightGreen">
                                        <div className="space-x-4" >
                                           <span className="inline-block text-md" >
                                                Metamask wallet
                                            </span>
                                           <img className="inline-block" alt="dai" src={Meta} />
                                           
                                           </div>
                                        </DropdownItem>
                                    </Link>
                                   
                                </Dropdown>
                                </div>
                                    
                              
                            
                            <NavLink
                                href="/"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon
                                    family="font-awesome"
                                    name="fa fa-bell"
                                    size="xl"
                                />
                            </NavLink>
                            <NavLink
                                href="/"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon
                                    family="font-awesome"
                                    name="fa fa-cog"
                                    size="xl"
                                />
                            </NavLink>
                            <NavLink
                                href="/"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon
                                    family="font-awesome"
                                    name="fa fa-question-circle"
                                    size="xl"
                                />
                            </NavLink>
                           
                        </div>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}