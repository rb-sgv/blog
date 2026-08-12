import Welcome from "./_components/welcome";
import Header from "./_components/header";
import Spinsmile from "./_components/spinsmile";

export default function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <div className="animate-pulse">
              <h2 className='font-light opacity-50 text-[#ff9f1c] text-center'>
          ^ click one of the links in the navigation ^
        </h2>
        </div>
      <Spinsmile />
    </>
  );
}
