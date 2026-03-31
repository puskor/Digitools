import React from 'react';
import { SlSocialInstagram } from 'react-icons/sl';
import { TiSocialFacebookCircular, TiSocialTwitter } from 'react-icons/ti';

const DownFooter = () => {
    return (
        <div className='bg-[#101727]  text-white grid items-center text-center lg:text-left'>
            <div className='py-10 container mx-auto '>
                <div className=' grid md:grid-cols-2 lg:grid-cols-5 gap-10'>
                    <div className='space-y-5'>
                        <h1 className='text-3xl font-bold'>DigiTools</h1>
                        <p className='text-[#627382]'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className='space-y-2 text-[#627382]'>
                        <h2 className='text-xl text-white'>Product</h2>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Templates</p>
                        <p>Integrations</p>
                    </div>
                    <div className='space-y-2 text-[#627382]'>
                        <h2 className='text-xl text-white'>Company</h2>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Careers</p>
                        <p>Press</p>
                    </div>
                    <div className='space-y-2 text-[#627382]'>
                        <h2 className='text-xl text-white'>Resources</h2>
                        <p>Documentation</p>
                        <p>Help Center</p>
                        <p>Community</p>
                        <p>Contact</p>
                    </div>
                    <div className='space-y-2 text-[#627382]'>
                        <h2 className='text-xl text-white'>Social Links</h2>
                        <div className='flex gap-4 items-center justify-center'>
                            <div className='bg-white p-2 rounded-full'>
                                <SlSocialInstagram className='text-black' />
                            </div>
                            <div className='bg-white p-2 rounded-full'>
                                <TiSocialTwitter className='text-black' />
                            </div><div className='bg-white p-2 rounded-full'>
                                <TiSocialFacebookCircular className='text-black' />
                            </div>

                        </div>
                    </div>
                </div>

                <hr className='py-10 mt-10'/>

                <div className='flex justify-between text-[#627382] px-5'>
                    <h1>© 2026 Digitools. All rights reserved.</h1>
                    <div className='flex gap-5'>
                        <h2>Privacy Policy  </h2>
                        <h2> Terms of Service </h2>
                        <h2>Cookies</h2>
                    </div>
                </div>
                
            </div>

        </div>

    );
};

export default DownFooter;