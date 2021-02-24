import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData =
[
    {
     title: "Omborxona Boshqaruvi-WMS",
     path:"/omborxona",
      icon:<AiIcons.AiFillHome/>,
     iconClosed: <RiIcons.RiArrowDownSFill/>,
     iconOpened: <RiIcons.RiArrowUpSFill/>,
     subMenu:[
        {
            title: "Xomashyo",
            path:"/omborxona/xomashyo",
            icon:<IoIcons.IoIosPaper/>,
        },
        {
            title: "Maxsulotlar",
            path:"/omborxona/maxsulotlar",
            icon:<IoIcons.IoIosPaper/>,
        },]
    },
    {
     title: "Ishlab Chiqarishni Boshqarish-ERP",
     path:"/plan",
     icon:<AiIcons.AiFillHome/>,
     iconClosed: <RiIcons.RiArrowDownSFill/>,
     iconOpened: <RiIcons.RiArrowUpSFill/>,
     subMenu:[
        {
            title: "Tarixi",
            path:"/plan/tarixi",
            icon:<IoIcons.IoIosPaper/>,
        }]
    },
    {
     title: "Marketing Boshqaruvi",
     path:"/marketing",
     icon:<AiIcons.AiFillHome/>,
     iconClosed: <RiIcons.RiArrowDownSFill/>,
     iconOpened: <RiIcons.RiArrowUpSFill/>,
     subMenu:[
        {
            title: "CRM",
            path:"/marketing/crm",
            icon:<IoIcons.IoIosPaper/>,
        },
        {
            title: "Call Center",
            path:"/marketing/call_center",
            icon:<IoIcons.IoIosPaper/>,
        },
        {
            title: "Savdo",
            path:"/marketing/savdo",
            icon:<IoIcons.IoIosPaper/>,
            subNav:[
               { title: "Savdo Analitikasi",
                path:"/marketing/savdo/analitika",
                icon:<IoIcons.IoIosPaper/>,
            },
               { title: "Oylik Grafikasi",
                path:"/marketing/savdo/oylik_grafika",
                icon:<IoIcons.IoIosPaper/>,
            },
               { title: "To'lov Turi",
                path:"/marketing/savdo/tolov_turi",
                icon:<IoIcons.IoIosPaper/>,
            }
            ]
        }]
    },
    {
        title: "Maxsulot Boshqaruvi-PMS",
        path:"/maxsulot_boshqaruvi",
         icon:<AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subMenu:[
           {
               title: "Maxsulot Tannarxi",
               path:"/maxsulot_boshqaruvi/tannarxi",
               icon:<IoIcons.IoIosPaper/>,
           },
           {
               title: "Maxsulot Soni",
               path:"/omborxona/maxsulot_soni",
               icon:<IoIcons.IoIosPaper/>,
           },]
     },
     {
        title: "Moliyaviy Resurslarni Boshqarish",
        path:"/moliyaviy_resurslar",
        icon:<AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subMenu:[
           {
               title: "Cash Flow",
               path:"/moliyaviy_resurslar/cash_flow",
               icon:<IoIcons.IoIosPaper/>,
           },
           {
               title: "Ajratilgan Bujed",
               path:"/moliyaviy_resurslar/ajratilgan_bujed",
               icon:<IoIcons.IoIosPaper/>,
               subNav:[
                { title: "Savdo",
                 path:"/moliyaviy_resurslar/ajratilgan_bujed/savdo",
                 icon:<IoIcons.IoIosPaper/>,
                 },
                { title: "Kunlik Chiqimlar",
                 path:"/moliyaviy_resurslar/ajratilgan_bujed/kunlik_chiqimlar",
                 icon:<IoIcons.IoIosPaper/>,
                },
                { title: "Marketing",
                 path:"/moliyaviy_resurslar/ajratilgan_bujed/marketing",
                 icon:<IoIcons.IoIosPaper/>,
                },
                { title: "IT",
                path:"/moliyaviy_resurslar/ajratilgan_bujed/it",
                icon:<IoIcons.IoIosPaper/>,
               }
                 ]
           },
        ]
     },
     {
        title: "HRM",
        path:"/hrm",
        icon:<AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subMenu:[
           {
               title: "KPI",
               path:"/hrm/kpi",
               icon:<IoIcons.IoIosPaper/>,
           },
           {
               title: "Xodimlar ....",
               path:"/hrm/xodimlar",
               icon:<IoIcons.IoIosPaper/>,
           },
           {
               title: "Oylik Belgilash",
               path:"/hrm/oylik_belgilash",
               icon:<IoIcons.IoIosPaper/>,
           }
        ]
     },
]