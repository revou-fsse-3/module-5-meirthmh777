import Clock from "@/components/Clock";

export default function Home() {
  return (
    <div className="text-center">
      <div
        className="bg-gray-500 bg-opacity-30 py-4 px-8 w-5/12 text-xl text-white font-bold mx-auto rounded-lg text-center"
        role="clock component"
      >
        <Clock timezone={0} />
      </div>
      <div className="m-5">
        <h2 className="text-2xl font-bold">Home Page</h2>
        <h3 className="text-xl">
          Explore current weather by navigating to the Weather page.
        </h3>
      </div>
    </div>
  );
}
