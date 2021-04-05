import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { BiGroup } from "react-icons/bi";
import * as RiIcons from 'react-icons/ri';


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'users',
                path: '/home/users',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'rename',
                path: '/home/rename',
                icon: <IoIcons.IoIosPaper />,
            }
        ]
    },

    {
        title: 'LeadUser',
        path: '/Leaduser',
        icon: <BiGroup />,
        cName: 'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Leadmasterview',
                path: '/Leadmasterview',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Leadmaster',
                path: '/leadmaster',
                icon: <IoIcons.IoIosPaper />,
            }
        ]

    },
    // {
    //     title: 'LeadmasterView',
    //     path: '/leadmasterview',
    //     icon: <BiGroup />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'LeadmasterUpdate',
    //     path: '/leadmasterUpdate',
    //     icon: <BiGroup />,
    //     cName: 'nav-text'
    // },

    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'ProductsUser',
        path: '/productUser',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Productsmaster',
                path: '/Productsmaster',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'ProductView',
                path: '/ProductView',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'ProductItem',
                path: '/ProductItem',
                icon: <IoIcons.IoIosPaper />,
            }
        ]


    },
    {
        title: 'New Inquiry',
        path: '/newinquiry',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'InquiryList',
                path: '/inquirtlist',
                icon: <IoIcons.IoIosPaper />,
            },
            // {
            //     title: '',
            //     path: '/ProductView',
            //     icon: <IoIcons.IoIosPaper />,
            // },
        ]

    },


    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    }
];