import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Card from "./components/card.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <section class="bg-center bg-no-repeat bg-white bg-blend-multiply">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 class="mb-6 text-4xl font-bold tracking-tighter text-black md:text-5xl lg:text-6xl">
            Kopi Emass 123
          </h1>
          <p class="mb-8 text-base font-normal text-black md:text-xl sm:px-16 lg:px-48">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
      </section>
      <section class="bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
