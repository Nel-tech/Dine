import '../../../index.css';
// import Button from '../../../Components/Button';
function FoodAds() {
    return (
        <section>
            <h1 className='text-center mt-[3rem] text-[1.6rem]'>Perfect Place For An Exceptional Expereince</h1>

            <main className="flex justify-evenly container mt-[3rem]">
                
                <article>
                    <h2 className="font-bold text-[2rem] max-w-[12rem] mt-[2rem]">Great Food Steak & Great Restaurant</h2>
                </article>
    
                <figure>
                    <img src="/Assests/food1.png" className="w-[18rem]" alt="Delicious food presentation" />
                </figure>
                
                <article className='mt-[3rem]'>
                    <ul className="flex justify-center items-center gap-1 pb-[1.4rem]">
                        <li>
                            <img src="/Assests/Symbol.png" alt="Check symbol for quality" />
                        </li>
                        <li>
                            <p>Quality foods ingredient assurances</p>
                        </li>
                    </ul>
    
                    <ul className="flex items-center gap-1 pb-[1.4rem]">
                        <li>
                            <img src="/Assests/Symbol.png" alt="Check symbol for awards" />
                        </li>
                        <li>
                            <p>Award-Winning Restaurant</p>
                        </li>
                    </ul>
    
                    <ul className="flex items-center gap-1 pb-[1.4rem]">
                        <li>
                            <img src="/Assests/Symbol.png" alt="Check symbol for health" />
                        </li>
                        <li>
                            <p>Healthy Food</p>
                        </li>
                    </ul>
    
                    {/* <Button name='Reserve a Table' textColor='text-white' radius='rounded' padding='p-4' backgroundColor='bg-orange-500'  /> */}
                </article>
            </main>
        </section>
    );
}

export default FoodAds;
