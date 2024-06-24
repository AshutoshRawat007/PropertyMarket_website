import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text, Button } from "../../components";
import { useForm } from "react-hook-form";
import {Link } from "react-router-dom";


export default function LandingPagePage() {
  const {
    register,
    handleSubmit,
  } = useForm()

  const [selectedOption, setSelectedOption] = React.useState('buy');
  const onSubmit = (data) => {

    const formData = { ...data, transactionType: selectedOption };
    if(selectedOption==="sell")
      alert('Go to profile and create property there to sell it')
    else{

      // extract room number and location from the from data and then go to '/listing' and serch properties there with room number and location
      
    }

    console.log(formData);
    console.log(data);

  };
  return (
    <>
      <Helmet>
        <title>Property Market</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[99px] overflow-auto bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row justify-end w-full py-[50px] bg-yellow-50">
            <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1396px]">
              <div className="flex flex-col items-center justify-start w-[70%] gap-10 pl-5 ml-5">
                <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                  <Heading size="4xl" as="h1" className="tracking-[-0.92px]">
                    Find a perfect property
                    <br />
                    {`Where you'll love to live`}
                  </Heading>
                  <Text as="p" className="!text-gray-700">
                    We helps businesses customize, automate and scale up their ad production and delivery.
                  </Text>
                </div>

{/* property find option card and buy sell rent form   */}
                <div className="flex justify-center w-[150%] sm:w-[100%] ml-12 mr-2.5 max-w-3xl p-6 bg-white-A700 rounded-lg">
                  <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    {/* Add the select element for Buy, Sell, Rent option */}
                    <div className="flex justify-center w-full gap-4">
                      <button
                        type="button"
                        className={`border ${selectedOption === 'buy' ? 'border-black' : 'border-transparent'} px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300`}
                        onClick={() => setSelectedOption('buy')}
                      >
                        BUY
                      </button>
                      <button
                        type="button"
                        className={`border ${selectedOption === 'sell' ? 'border-black' : 'border-transparent'} px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300`}
                        onClick={() => setSelectedOption('sell')}
                      >
                        SELL
                      </button>
                      <button
                        type="button"
                        className={`border ${selectedOption === 'rent' ? 'border-black' : 'border-transparent'} px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300`}
                        onClick={() => setSelectedOption('rent')}
                      >
                        RENT
                      </button>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full mt-6">
                      <div className="flex flex-col items-center justify-start w-full gap-6">
                        <div className="flex flex-col items-center justify-start w-full gap-5">
                          <input
                            {...register('city')}
                            placeholder="City/Street"
                            className="w-full px-4 py-2 font-semibold border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          />
                          <input
                            {...register('RoomsNo')}
                            placeholder="Number of rooms looking for"
                            className="w-full px-4 py-2 font-semibold border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          />
                          <input
                            {...register('priceRange')}
                            placeholder="Price Range"
                            className="w-full px-4 py-2 font-semibold border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">Search</button>
                      </div>
                    </div>
                  </form>
                </div>

              </div>



              <div className="flex flex-row justify-end">
                <Img src="/images/img_image.png" alt="image_one" className="w-[80%] object-cover" />
              </div>
            </div>
          </div>
        </div>


        <div className="w-[95%]">
          <div className=" justify-start w-full gap-6 max-w-[1500px]">
            <div className="flex flex-col items-start justify-center w-[100%] gap-[49px] p-[50px] bg-red-100 rounded-[20px]">
              <div className="flex flex-col items-center justify-start mt-[23px] gap-[15px]">
                <Heading size="3xl" as="h2" className="tracking-[-0.72px]">
                Easy way to find the perfect property for you
                </Heading>
                <Text size="xs" as="p" className="!text-gray-900">
                  Connecting you to agents and Clients, One Place to find properties for you{" "}
                </Text>
              </div>
              <Link to="/listing">
              <Button className="mb-[23px] font-semibold min-w-[138px]">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>

       <div className="flex flex-row justify-center w-full">
        </div>




        <div className="flex flex-col items-center justify-start w-full gap-6">
         
         
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-center w-full max-w-[1010px]">
              <div className="flex flex-row">
                <Img
                  src="images/profile.png"
                  alt="image_seven"
                  className="sm:w-[46%] sm:h-[100%] object-cover rounded-lg w-[30%] h-[50%] m-4 sm:mb-4 sm:m-0"
                />
                <div className="flex flex-row justify-center w-[46%] pl-10">
                  <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-col items-start justify-center gap-[5px]">
                        <p size="2xl" as="h2" className="mt-0.5 tracking-[-0.56px] text-xl font-bold  sm:text-3xl ">
                          Ashutosh Rawat
                        </p>
                        <Heading size="md" as="h3" className="!font-semibold">
                          Web Developer 
                        </Heading>
                      </div>
                      <Img src="images/img_shape.svg" alt="shape_one" className="sm:h-[51px] h-5" />
                    </div>
                    <p className="!text-gray-700 !font-semibold !leading-[165%] text-base sm:text-2xl ">
                      Created this website using React, node, Express, Mongo-DB aka MERN stack. {" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>
    </>
  );
}
