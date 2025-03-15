import React from "react";
import logo from '../assets/ingla-logo.png'
const Footer = () => {
    return (
        <footer className="footer footer-center  mt-10 p-10">
            <hr className="border-t border-gray-400 my-4 w-full" style={{ borderWidth: '1px' }} />



            <aside>
                <img alt="" src={logo} className="inline-block h-16 lg:h-20" />
                <p className="font-bold">
                    Ingla School Baku
                    <br />
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="tel:+994103107117" className="flex items-center gap-2 text-primary hover:text-primary-focus">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </a>
                    <a href="https://www.google.com/maps/place/Ingla+School+Baku/@40.3946953,49.8134815,17z/data=!4m14!1m7!3m6!1s0x40307d75a9deb407:0xdc4f778a264000c9!2sIngla+School+Baku!8m2!3d40.3946953!4d49.8160564!16s%2Fg%2F11w4tl1zvp!3m5!1s0x40307d75a9deb407:0xdc4f778a264000c9!8m2!3d40.3946953!4d49.8160564!16s%2Fg%2F11w4tl1zvp?entry=ttu&g_ep=EgoyMDI1MDMxMS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-primary-focus">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3" /><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" /></svg>
                    </a>
                    <a href="mailto:info@inglaschool.az"
                        className="flex items-center gap-2 text-primary hover:text-primary-focus">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
