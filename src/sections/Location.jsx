import SectionTitle from "../components/Section/SectionTitle";

export default function Location() {
  return (
    <div className="my-20 flex justify-between flex-col items-center w-[80%] sm:flex-col gap-4 " id="location">
      <SectionTitle title={"Where Are We Located?"} />
      <div className="flex justify-evenly w-full">
        <iframe
          title="Google Map"
          height="450"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224043.37582279915!2d-122.4194!3d37.7749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDknMTYuOSJOIDEyMjLCsDQxJzIwLjQiRQ!5e0!3m2!1sen!2sus!4v1620163857739!5m2!1sen!2sus"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          className="rounded-md shadow-xl w-full"
        ></iframe>

        <div className="flex flex-col gap-2 bg-green-300 rounded-md p-4 absolute mt-[150px] mr-[850px] sm:mt-[260px] sm:mr-0 sm:w-[250px] md:mt-[260px] md:mr-0 md:w-[250px]
 shadow-2xl">
          <div className="text-[30px] font-bold sm:text-[20px] md:text-[22px]">We are very close to you!</div>
          <div>
            <div className="text-[18px] sm:text-[12px] md:text-[14px]">Our locations are based in the following cities:</div>
            <ul className="list-disc ml-8 text-[18px] sm:text-[12px] md:text-[14px] ">
              <li>London</li>
              <li>Manchester</li>
              <li>Cambridge</li>
              <li>Oxford</li>
            </ul>
          </div>
          <div className="sm:text-[12px] md:text-[14px]">You can also email as at <span className="italic">somesushishopwebiste@gmail.com</span> for any enquiries.</div>
        </div>

      </div>

    </div>
  );
}
