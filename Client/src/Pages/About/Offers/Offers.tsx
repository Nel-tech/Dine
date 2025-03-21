import Timer from '../../../assets/timer 1.svg'
import Menu from '../../../assets/restaurant-menu.svg'
import Icon from '../../../assets/Icon.svg'
function Offers() {
  return (
    <main className=" container flex justify-between content-center self-center mt-[5rem] xs:flex-col mobile:flex-col">
      <section className="flex justify-center content-center self-center gap-[1rem] xs:pb-[1rem] mobile:pb-[1rem]">
        <figure>
          <img src={Menu} className="w-[2rem]" alt="restaurant-menu" />
        </figure>
        <figure>
          <h1 className="font-bold text-[1rem]">A World of Delights</h1>
          <p className="max-w-[15rem] text-[.8rem]">Explore diverse dishes crafted to delight every palate.</p>
        </figure>

      </section>

      <section className="flex justify-center content-center self-center gap-[1rem]  xs:pb-[1rem] mobile:pb-[1rem]">
        <figure>
          <img src={Icon} className="w-[2rem]" alt="Reservation-Icon" />
        </figure>
        <figure>
          <h1 className="font-bold text-[1rem]">Effortless Reservations</h1>
          <p className="max-w-[15rem] text-[.8rem]">Book your table and order online in just a few clicks.</p>
        </figure>

      </section>

      <section className="flex justify-center content-center self-center gap-[1rem]  xs:pb-[1rem] mobile:pb-[1rem]">
        <figure>
          <img src={Timer}  className="w-[2rem]" alt="Timer" />
        </figure>
        <figure>
          <h1 className="font-bold text-[1rem]">Swift and Fresh</h1>
          <p className="max-w-[15rem] text-[.8rem]">Get your favorite meals delivered hot and on time.</p>
        </figure>

      </section>
    </main>
  );
}

export default Offers;
