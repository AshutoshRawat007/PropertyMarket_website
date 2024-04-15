import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text, Button, Input } from "../../components";
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
    console.log(formData);
    console.log(data);

  };
  return (
    <>
      <Helmet>
        <title>Property Market</title>
        <meta name="description" content="Web site created using create-react-app" />
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
                <div className="flex justify-center w-[100%]  max-w-3xl p-6 bg-white-A700 rounded-lg">
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
                            {...register('propertyType')}
                            placeholder="Property Type"
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


        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-start w-full gap-6 max-w-[1200px]">
            <div className="flex flex-col items-start justify-center w-[49%] gap-[49px] p-[50px] bg-red-100 rounded-[20px]">
              <div className="flex flex-col items-center justify-start mt-[23px] gap-[15px]">
                <Heading size="3xl" as="h2" className="tracking-[-0.72px]">
                Easy way to find the perfect property for you
                </Heading>
                <Text size="xs" as="p" className="!text-gray-900">
                  Choose property which meets your need{" "}
                </Text>
              </div>
              <Link to="/listing">
              <Button className="mb-[23px] font-semibold min-w-[138px]">Get Started</Button>
              </Link>
            </div>
            <div className="w-[49%] gap-6 grid-cols-2 grid min-h-[auto]">
              <div className="flex flex-col items-start justify-center w-full gap-5 p-[30px] bg-deep_orange-50 rounded-[20px]">
                <Img src="images/img_search_status.svg" alt="image" className="h-[30px] w-[30px] mt-[7px]" />
                <Heading size="2xl" as="h3" className="mb-[7px] tracking-[-0.56px]">
                  Search <br />
                  your location
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center w-full gap-5 p-[30px] bg-deep_orange-50 rounded-[20px]">
                <Img src="images/img_eye.svg" alt="eye_one" className="h-[30px] w-[30px] mt-[7px]" />
                <Heading size="2xl" as="h4" className="mb-[7px] tracking-[-0.56px]">
                  Visit <br />
                  Appointment
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center w-full gap-5 p-[30px] bg-deep_orange-50 rounded-[20px]">
                <Img src="images/img_wallet.svg" alt="wallet_one" className="h-[30px] w-[30px] mt-[7px]" />
                <Heading size="2xl" as="h5" className="mb-[7px] tracking-[-0.56px]">
                  Get your <br />
                  dream house
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center w-full gap-5 p-[30px] bg-deep_orange-50 rounded-[20px]">
                <Img src="images/img_emoji_happy.svg" alt="emojihappy_one" className="h-[30px] w-[30px] mt-[7px]" />
                <Heading size="2xl" as="h6" className="mb-[7px] tracking-[-0.56px]">
                  Enjoy your <br />
                  Appointment
                </Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full p-[50px] bg-gray-50">
          <div className="flex flex-row justify-center w-full mx-[70px] max-w-[1200px]">
            <div className="flex flex-row w-full gap-[100px]">
              <div className="flex flex-col items-start justify-start w-[19%] gap-[18px]">
                <Button color="white_A700" size="3xl" shape="circle" className="w-[60px]">
                  <Img src="images/img_frame.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                  <Heading size="4xl" as="h2" className="tracking-[-0.92px]">
                    $15.4M
                  </Heading>
                  <Heading size="lg" as="h3" className="!text-blue_gray-600 tracking-[-0.40px]">
                    Owned from
                    <br />
                    Properties transactions
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[19%] gap-[18px]">
                <Button color="white_A700" size="3xl" shape="circle" className="w-[60px]">
                  <Img src="images/img_frame_orange_a700.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                  <Heading size="4xl" as="h4" className="tracking-[-0.92px]">
                    25K+
                  </Heading>
                  <Heading size="lg" as="h5" className="!text-blue_gray-600 tracking-[-0.40px]">
                    Properties for Buy & sell Successfully
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[19%] gap-[18px]">
                <Button color="white_A700" size="3xl" shape="circle" className="w-[60px]">
                  <Img src="images/img_icon.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                  <Heading size="4xl" as="h6" className="tracking-[-0.92px]">
                    500
                  </Heading>
                  <Heading size="lg" as="h5" className="!text-blue_gray-600 tracking-[-0.40px]">
                    Daily completed <br />
                    transactions
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[19%] mb-[26px] gap-[18px]">
                <Button color="white_A700" size="3xl" shape="circle" className="w-[60px]">
                  <Img src="images/img_icon_orange_a700.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-full gap-4">
                  <Heading size="4xl" as="h1" className="tracking-[-0.92px]">
                    600+
                  </Heading>
                  <Heading size="lg" as="h5" className="!text-blue_gray-600 tracking-[-0.40px]">
                    Reagular Clients
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">

        </div>
        <div className="flex flex-col items-center justify-start w-full gap-6">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-center w-full max-w-[1010px]">
              <div className="flex flex-row justify-between w-full">
                <Img
                  src="images/profile.png"
                  alt="image_seven"
                  className="w-[46%] object-cover rounded-lg"
                />
                <div className="flex flex-row justify-center w-[46%]">
                  <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-col items-start justify-center gap-[5px]">
                        <Heading size="2xl" as="h2" className="mt-0.5 tracking-[-0.56px]">
                          Ashutosh Rawat
                        </Heading>
                        <Heading size="md" as="h3" className="!font-semibold">
                          Web Developer 
                        </Heading>
                      </div>
                      <Img src="images/img_shape.svg" alt="shape_one" className="h-[51px]" />
                    </div>
                    <Heading size="xl" as="h4" className="!text-gray-700 !font-semibold !leading-[165%]">
                      Created this website using React, node, Express, Mongo-DB for this website. {" "}
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full px-14 py-[120px] bg-gray-900">
          <div className="flex flex-col items-center justify-start w-full gap-[118px] max-w-[1200px]">
            <div className="flex flex-col items-center justify-start w-full gap-[60px]">
              <div className="flex flex-row justify-between items-center w-full">
                <Heading size="3xl" as="h2" className="!text-white-A700 tracking-[-0.72px]">
                  News & Consult
                </Heading>
                <div className="flex flex-row justify-start items-center gap-2">
                  <Heading size="md" as="h3" className="mt-0.5 !text-orange-A700">
                    Explore All
                  </Heading>
                  <Img src="images/img_icon_24px_v.svg" alt="icon24pxv_seven" className="h-6 w-6" />
                </div>
              </div>
              <div className="flex flex-row w-full gap-6">
                <div className="flex flex-col items-center justify-start w-[32%] gap-6">
                  <Img src="images/img_image_350x384.png" alt="image" className="w-full object-cover rounded-[10px]" />
                  <div className="flex flex-col items-center justify-start w-full gap-[23px]">
                    <Heading size="xl" as="h4" className="!text-white-A700 tracking-[-0.48px]">
                      9 Easy-to-Ambitious DIY Projects to Improve Your Home
                    </Heading>
                    <div className="flex flex-row justify-start items-center w-full gap-2">
                      <Heading size="md" as="h5" className="mt-px !text-deep_orange-400">
                        Read the Article
                      </Heading>
                      <Img src="images/img_icon_24px_v_deep_orange_400.svg" alt="read_the" className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] gap-6">
                  <Img src="images/img_image_6.png" alt="image_one" className="w-full object-cover rounded-[10px]" />
                  <div className="flex flex-col items-center justify-start w-full gap-[23px]">
                    <Heading size="xl" as="h6" className="!text-white-A700 tracking-[-0.48px]">
                      Serie Shophouse Launch In July, Opportunity For Investors
                    </Heading>
                    <div className="flex flex-row justify-start items-center w-full gap-2">
                      <Heading size="md" as="h6" className="mt-px !text-deep_orange-400">
                        Read the Article
                      </Heading>
                      <Img src="images/img_icon_24px_v_deep_orange_400.svg" alt="icon24pxv_one" className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] gap-6">
                  <Img src="images/img_image_7.png" alt="image_one" className="w-full object-cover rounded-[10px]" />
                  <div className="flex flex-col items-center justify-start w-full gap-[23px]">
                    <Heading size="xl" as="h4" className="!text-white-A700 tracking-[-0.48px]">
                      Looking for a New Place? Use This Time to Create Your Wishlist
                    </Heading>
                    <div className="flex flex-row justify-start items-center w-full gap-2">
                      <Heading size="md" as="h6" className="mt-px !text-deep_orange-400">
                        Read the Article
                      </Heading>
                      <Img src="images/img_icon_24px_v_deep_orange_400.svg" alt="icon24pxv_one" className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-[30px] p-10 bg-gray-400_01 rounded-[10px]">
              <div className="flex flex-col items-center justify-start w-[54%] pt-[3px] gap-[5px]">
                <Heading size="2xl" as="h3" className="tracking-[-0.56px] text-center">
                  For Recent Update, News.
                </Heading>
                <Text size="xs" as="p" className="!text-gray-900 text-center">
                  We helps businesses customize, automate and scale up their ad production and delivery.
                </Text>
              </div>
              <div className="flex flex-row justify-start w-[54%] gap-2">
                <Input
                  color="gray_50_02"
                  size="sm"
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="w-[78%] font-semibold"
                />
                <Button className="font-semibold min-w-[126px]">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
