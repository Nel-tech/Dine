const result = new Date().getFullYear();

function BaseFooter() {
  return (
    <div>
      <footer className="mt-[7rem]">
        <section className="w-full bg-[#2b2b2b]">
          <p className="mt-[1rem] text-center text-white">
            &copy; {result} Dine Restaurant
          </p>
        </section>
      </footer>
    </div>
  );
}

export default BaseFooter;
