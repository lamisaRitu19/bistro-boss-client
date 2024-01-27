import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../../components/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    
    return (
        <section className='mb-20'>
            <SectionTitle heading="From Our Menu" subheading="Check It Out" textColor={"text-black"}></SectionTitle>
            <div className='grid md:grid-cols-2 gap-12 mt-12'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to='/menu'><button className='text-black font-medium uppercase rounded-lg border-b-2 border-black px-6 py-2'>View Full Menu</button></Link>
        </section>
    );
};

export default PopularMenu;