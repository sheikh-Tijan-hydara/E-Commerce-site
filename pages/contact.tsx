import { Icon } from "@iconify/react";
import NavBar from "@/components/navBar";

export default function Contact() {
  return (
    <div
      className="flex flex-col w-full lg:h-screen bg-white text-gray-900 "
      
    >
      <NavBar />

     
      <div className="w-full flex flex-row justify-between items-center p-8 lg:p-16">
        <div className="flex flex-col w-full lg:w-1/2 items-center text-center lg:px-8">
          <h1 className=" text-4xl lg:text-6xl font-bold text-primary mb-4">
            Get in touch
          </h1>
          <p className="lg:text-2xl text-lg mb-8">
            Feel free to reach out to us for any inquiries or assistance. We’re
            here to serve you!
          </p>

          <div className="flex flex-col px-1 py-2 lg:p-6 gap-4 border-8 border-primary rounded-lg">
            <div className="flex flex-row items-center gap-3">
              <Icon
                icon="bx:bx-mail-send"
                className="text-6xl bg-primary text-white rounded-full p-2"
              />
              <p className="font-bold lg:text-3xl text-black">
                
                solul@gmail.com
              </p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <Icon
                icon="teenyicons:phone-solid"
                className="text-6xl bg-primary text-white rounded-full p-2"
              />
              <p className="font-bold lg:text-3xl text-black">
                (+220) 307 6463/707 1851
              </p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <Icon
                icon="zondicons:location"
                className="text-6xl bg-primary text-white rounded-full p-2"
              />
              <p className="font-bold  lg:text-3xl text-black">
               
                Kololi, Serekunda - The Gambia.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 lg:flex items-center justify-center hidden">
          <div className="flex justify-center items-center rounded-full w-[550px] h-[550px] bg-gray-600">
            <Icon
              icon="fluent:person-call-24-filled"
              className="text-[500px]  text-white "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
