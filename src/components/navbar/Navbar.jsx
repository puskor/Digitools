import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className='container mx-auto flex justify-between items-center'>
                <h1 className='text-2xl font-bold bg-linear-to-bl from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h1>
                <div className='text-[16px] font-semibold space-x-3 hidden md:block'>
                    <a href="">Products</a>
                    <a href="">Features</a>
                    <a href="">Pricing</a>
                    <a href="">Testimonials</a>
                    <a href="">FAQ</a>
                </div>
                <div className='flex space-x-4 items-center '>
                    <div className='relative'>
                        <FaShoppingCart />
                        <h2 className='absolute -top-2 left-3 bg-red-500 text-[10px] text-white rounded-full px-1'>2</h2>
                    </div>
                    <h2 className='text-[16px] font-semibold'>Login</h2>
                    <button className='rounded-2xl text-white px-3 py-1 text-[16px] font-semibold bg-linear-to-bl from-[#4F39F6] to-[#9514FA]'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;