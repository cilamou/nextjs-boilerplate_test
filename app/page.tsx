// import Image from "next/image";

export default function Home() {
  return (

// {/* <div>
//   <h1 className="text-4xl font-bold text-center font-serif">
//     welcome to horror club
//   </h1>
//   <p>
//     boooooo
//   </p>
// </div> */}

<main className="h-screen snap-y snap-mandatory overflow-y-scroll">
  {/* header/intro */}
  <section className="h-screen snap-start flex flex-col items-center justify-center bg-black text-white">
    <h1 className="text-4xl font-bold font-lucida">
      horror club 👻
    </h1>
  </section>

  {/* movies we've watched */}
  <section className="h-screen snap-start bg-gray-900 text-white p-8">
    <h2 className="text-2xl mb-4">
      movies we've watched
    </h2>
  </section>

  {/* top ten horror recs */}
  <section className="h-screen snap-start bg-red-900 text-white p-8">
    <h2 className="text-2xl mb-4">
      top 10 horror recs
    </h2>
  </section>

  {/* about us */}
  <section className="h-screen snap-start bg-gray-900 text-white p-8">
    <h2 className="text-2xl mb-4"> ahsdokl
      <a href="mailto:hi@gmail.com"
      className="inline-block mt-4 px-6 py-2 bg-red-600 hover:big-red-700">email us</a>
    </h2>
  </section>
</main>
  );
}
