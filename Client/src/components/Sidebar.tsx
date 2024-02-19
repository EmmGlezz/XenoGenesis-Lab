import React, { useState } from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md'


const menus = [{
    title: 'Life Form Generator',
    icon: '/src/assets/lab.png'
},
{
    title: 'My Creations',
    icon: '/src/assets/creations.png'
},
{
    title: 'Gallery',
    icon: '/src/assets/gallery.png',
    gap: true
},
{
    title: 'Educational Resources',
    icon: '/src/assets/educational.png'
},
{
    title: 'Community Forum',
    icon: '/src/assets/forum.png'
},
{
    title: 'About',
    icon: '/src/assets/about.png',
    gap: true
},
{
    title: 'Contact',
    icon: '/src/assets/contact.png'
},]


const Sidebar: React.FC = () => {
    const [open, setOpen] = useState(true)

    return (
        <div className={`${open ? 'w-72' : 'w-20'} p-5 pt-8 duration-300 h-screen relative`}
        style={{backgroundColor:'#19212a'}}>
        
        {/* Arrow Icon to close and open menu  */}
        <MdOutlineArrowBackIosNew 
        onClick={() => setOpen(!open)}
        className={`absolute cursor-pointer -right-3 top-9 ${open ? '' : 'rotate-180'} 
        w-7 border-2 p-1 border-sky-900 rounded-full bg-slate-50 text-sky-900`} 
        style={{height: '30px', width: '30px'}}
        />

        {/* Logo and title */}
        <div className='flex gap-x-4 items-center'>
            <img src="/src/assets/aliens.png" alt="" 
            className={`cursor-pointer duration-500 rounded-full ${open && 'rotate-[360deg]'}`}
            style={{width: '40px', filter: 'invert(100%) sepia(100%) saturate(1%) hue-rotate(5deg) brightness(105%) contrast(101%)'}}
            />
            <h1 className={`text-white origin-left font-medium text-xl 
            duration-300 ${!open && 'scale-0'}`}>XenoGenesis Lab</h1>
        </div>

        {/* Menu Items */}
        <ul className='pt-6'>   
            {menus.map((menu, idx) => (
                <li key={idx} className={`text-gray-300 text-sm flex items-center 
                gap-x-4 cursor-pointer p-2 hover:bg-slate-500 rounded-md font-bold
                ${menu.gap ? 'mt-9' : 'mt-2'}`}>
                    <img width={'24px'} src={menu.icon} style={{filter: 'invert(100%) sepia(100%) saturate(1%) hue-rotate(5deg) brightness(105%) contrast(101%)'}} alt="" />
                    <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                </li>
            ))}
        </ul>
    </div>
    );
};

export default Sidebar;
