import NavBar from "@/components/navBar";
import {
  faCartShopping,
  faFingerprint,
  faGear,
  faHeartBroken,
  faHeartCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function About() {
  return (
    <div className="w-full py-4 ">
      <ToastContainer />
      <NavBar />
      <div className="w-full bg-white flex flex-row justify-between items-center ">
        <div className="w-1/2 px-16 py-8">
            <div className="bg-tertiary flex justify-center items-center rounded-full w-4/5 h p-24">
                <FontAwesomeIcon icon={faCartShopping} className="text-[300px] text-gray-800" />
            </div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/2 text-black gap-4 py-8 px-16 text-center">
          <h1 className="font-bold text-primary text-5xl mb-4">About Us</h1>
          <p className="mb-4 text-lg">
            Welcome to our e-commerce haven, where convenience meets quality.
            Browse our curated selection of top-notch products from trusted
            brands. With secure transactions and swift delivery, shopping has
            never been easier. Join our community of satisfied customers and
            experience the joy of seamless online shopping. Elevate your
            lifestyle with us today.
          </p>
          <h3 className="text-primary text-2xl font-bold mb-2">Our Commitment</h3>
          <div className="flex flex-row justify-between items-center gap-2">
            <div className="flex flex-col justify-center items-center text-center">
              <FontAwesomeIcon icon={faGear} className="text-8xl text-black mb-2" />
              <p className="font-bold">Quality</p>
              <p>
                We source our products from trusted suppliers to ensure
                top-notch quality.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <FontAwesomeIcon
                icon={faFingerprint}
                className="text-8xl text-black mb-2"
              />
              <p className="font-bold">Variaty</p>
              <p>
                From delicate baby blankets to invigorating herbal teas, our
                selection caters to all your needs.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <FontAwesomeIcon
                icon={faHeartBroken}
                className="text-8xl text-black mb-2"
              />
              <p className="font-bold">WellNess</p>
              <p>
                We prioritize your well-being by offering health and beauty
                products that promote selfcare.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-8xl text-black mb-2"
              />
              <p className="font-bold">Convenience</p>
              <p>
                Shop with ease, knowing that Barki Neneh is here to simplify
                your daily routines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
