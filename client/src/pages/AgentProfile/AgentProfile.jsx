import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Heading, RatingBar, Text } from "../../components";
// import Footer from "../../components/Footer/Footer";
// import Header from "../../components/Header/Header";
import LandingPageCard from "../../components/LandingPageCard";

export default function AgentProfilePage() {
  return (
    <>
      <Helmet>
        <title>Ansum's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full">
          {/* <Header className="flex justify-center items-center w-full p-[19px] bg-white-A700" /> */}
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row justify-center w-full">
                <Img src="images/img_cover_image.png" alt="coverimage_one" className="w-full object-cover" />
              </div>
              <div className="flex flex-col items-center justify-start w-full mt-[-46px] gap-[58px]">
                <div className="flex flex-row justify-start items-center w-full gap-[30px] max-w-[1160px]">
                  <Img
                    src="images/img_rectangle_5599_150x150.png"
                    alt="image"
                    className="w-[150px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-row justify-between items-center w-[85%]">
                    <div className="flex flex-row justify-start items-center w-[83%] gap-8">
                      <div className="flex flex-col items-start justify-start w-[49%] gap-1.5">
                        <Heading size="xl" as="h1" className="tracking-[-0.48px]">
                          Bruno Fernandes
                        </Heading>
                        <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
                          <RatingBar value={1} isEditable={true} size={16} className="flex justify-between w-24" />
                          <Heading as="h2">4.5 review</Heading>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[49%] gap-2">
                        <div className="flex flex-row justify-start items-center w-full gap-[13px] py-0.5">
                          <Img src="images/img_icon_24px_call.svg" alt="icon24pxcall" className="h-6 w-6" />
                          <Heading size="md" as="h3" className="!font-semibold">
                            (123) 456-7890
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-start items-center w-full gap-3 py-0.5">
                          <Img src="images/img_icon_24px_email_gray_900.svg" alt="icon24pxemail" className="h-6 w-6" />
                          <Heading size="md" as="h4" className="mt-0.5 !font-semibold">
                            bruno@relasto .com
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <Button className="font-semibold min-w-[112px]">Contact</Button>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-col items-center justify-start w-full gap-12 max-w-[1200px]">
                    <div className="flex flex-row justify-start w-full gap-3">
                      <Button size="lg" className="font-semibold min-w-[291px]">
                        For rent
                      </Button>
                      <Button color="gray_600_02" size="lg" variant="outline" className="font-semibold min-w-[291px]">
                        For sale
                      </Button>
                      <Button color="gray_600_02" size="lg" variant="outline" className="font-semibold min-w-[291px]">
                        About
                      </Button>
                      <Button color="gray_600_02" size="lg" variant="outline" className="font-semibold min-w-[291px]">
                        Review
                      </Button>
                    </div>
                    <div className="justify-center w-full gap-6 grid-cols-3 grid min-h-[auto]">
                      <LandingPageCard className="flex flex-col items-center justify-start w-full" />
                      <LandingPageCard
                        imageOne="images/img_image_1.png"
                        className="flex flex-col items-center justify-start w-full"
                      />
                      <LandingPageCard
                        imageOne="images/img_image_2.png"
                        className="flex flex-col items-center justify-start w-full"
                      />
                      <LandingPageCard
                        imageOne="images/img_image_3.png"
                        className="flex flex-col items-center justify-start w-full"
                      />
                      <LandingPageCard
                        imageOne="images/img_image_4.png"
                        className="flex flex-col items-center justify-start w-full"
                      />
                      <LandingPageCard
                        imageOne="images/img_image_5.png"
                        className="flex flex-col items-center justify-start w-full"
                      />
                    </div>
                    <div className="flex flex-row justify-between w-full">
                      <div className="flex flex-row justify-start gap-[5px]">
                        <Button color="gray_700" variant="outline" className="font-semibold min-w-[48px]">
                          1
                        </Button>
                        <Button color="blue_gray_100_02" variant="outline" className="font-semibold min-w-[48px]">
                          2
                        </Button>
                        <Button color="blue_gray_100_02" variant="outline" className="font-semibold min-w-[48px]">
                          3
                        </Button>
                        <Button color="blue_gray_100_02" variant="outline" className="font-semibold min-w-[48px]">
                          4
                        </Button>
                        <Button color="blue_gray_100_02" variant="outline" className="font-semibold min-w-[48px]">
                          5
                        </Button>
                      </div>
                      <Button
                        color="blue_gray_100_02"
                        variant="outline"
                        rightIcon={<Img src="images/img_icon_16px_arrow_right.svg" alt="icon / 16px / arrow - right" />}
                        className="gap-1 font-semibold min-w-[134px]"
                      >
                        Next Page
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-start w-full p-[41px] border-blue_gray-100_01 border border-solid bg-white-A700 max-w-[1200px] rounded-[10px]">
          <div className="flex flex-col items-center justify-start w-[47%] gap-[57px]">
            <div className="flex flex-col items-center justify-start w-full gap-6">
              <div className="flex flex-row justify-start items-center w-full gap-[30px]">
                <Img
                  src="images/img_rectangle_5599.png"
                  alt="image_one"
                  className="w-[182px] object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-start justify-start w-3/5 gap-1.5">
                  <Heading size="xl" as="h2" className="tracking-[-0.48px]">
                    Bruno Fernandes
                  </Heading>
                  <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
                    <RatingBar value={1} isEditable={true} size={16} className="flex justify-between w-24" />
                    <Heading as="h3">4.5 review</Heading>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-[13px] py-0.5">
                    <Img src="images/img_icon_24px_call.svg" alt="icon24pxcall" className="h-6 w-6" />
                    <Heading size="md" as="h4" className="!font-semibold">
                      (123) 456-7890
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-3 py-0.5">
                    <Img src="images/img_icon_24px_email_gray_900.svg" alt="icon24pxemail" className="h-6 w-6" />
                    <Heading size="md" as="h5" className="mt-0.5 !font-semibold">
                      bruno@relasto .com
                    </Heading>
                  </div>
                </div>
              </div>
              <Text size="xs" as="p" className="!text-gray-600_02">
                A slider is great way to display a slideshow featuring images or videos, usually on your homepage.
                <br />
                Adding sliders to your site is no longer difficult. You don’t have to know coding anymore. Just use a
                slider widget and it will automatically insert the slider on your web page.
                <br />
                One of the best ways to add beautiful sliders with excellent responsiveness and advanced options.{" "}
              </Text>
            </div>
            <Button className="w-full font-semibold">Contact</Button>
          </div>
          <div className="flex flex-col items-center justify-start w-[47%] gap-6">
            <div className="flex flex-col items-start justify-center w-full gap-1.5">
              <Heading size="lg" as="h2" className="mt-0.5 tracking-[-0.40px]">
                Experiences
              </Heading>
              <Heading size="md" as="h3" className="!text-gray-600_02 !font-semibold">
                15+ years experience
              </Heading>
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-1.5">
              <Heading size="lg" as="h4" className="mt-0.5 tracking-[-0.40px]">
                Property Types
              </Heading>
              <Heading size="md" as="h5" className="!text-gray-600_02 !font-semibold">
                Private House, Villa, Townhouse, Apartment
              </Heading>
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-2">
              <Heading size="lg" as="h6" className="tracking-[-0.40px]">
                Area
              </Heading>
              <Heading size="md" as="h6" className="mb-px !font-semibold">
                California, San Jose, Miami
              </Heading>
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-2">
              <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                Address
              </Heading>
              <Heading size="md" as="h6" className="mb-px !text-gray-600_02 !font-semibold">
                59 Orchard, NY 5005, US
              </Heading>
            </div>
            <div className="flex flex-row justify-between w-full gap-[60px]">
              <div className="flex flex-col items-start justify-center gap-[7px]">
                <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                  License No
                </Heading>
                <Heading size="md" as="h6" className="mb-0.5 !text-gray-600_02 !font-semibold">
                  BF-0535
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center gap-[7px]">
                <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                  Website
                </Heading>
                <a href="www.abc.com" target="_blank" rel="noreferrer" className="mb-px">
                  <Heading size="md" as="h6" className="!text-gray-600_02 !font-semibold underline">
                    www.abc.com
                  </Heading>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-3">
              <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                Social
              </Heading>
              <div className="flex flex-row justify-start gap-4">
                <Img src="images/img_social_icon_facebook.svg" alt="socialicon_one" className="h-[30px] w-[30px]" />
                <Img src="images/img_social_icon_linkedin.svg" alt="socialicon" className="h-[30px] w-[30px]" />
                <Img src="images/img_social_icon_twitter.svg" alt="socialicon_five" className="h-[30px] w-[30px]" />
                <Img src="images/img_social_icon_youtube.svg" alt="socialicon" className="h-[30px] w-[30px]" />
                <Img src="images/img_social_icon_rss.svg" alt="socialiconrss" className="h-[30px] w-[30px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-[39px] py-[29px] border-blue_gray-100_01 border border-solid bg-white-A700 max-w-[1200px] rounded-[10px]">
          <div className="flex flex-col items-center justify-start w-full gap-[22px]">
            <div className="flex flex-row justify-between items-center w-full px-[42px]">
              <Heading size="2xl" as="h2" className="tracking-[-0.56px]">
                Clients Review
              </Heading>
              <Button
                size="4xl"
                rightIcon={<Img src="images/img_icon_24px_plus_white_a700.svg" alt="icon / 24px / plus" />}
                className="gap-2.5 font-bold min-w-[190px]"
              >
                Write a Reveiw
              </Button>
            </div>
            <div className="h-px w-full bg-blue_gray-100_01" />
          </div>
          <div className="flex flex-col items-start justify-start w-full gap-[25px] px-[25px]">
            <div className="flex flex-col w-full gap-[25px]">
              <div className="flex flex-col items-center justify-center w-full gap-10 p-[29px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[20px]">
                <Heading size="xl" as="h2" className="mt-[9px] !text-gray-600_02 !font-semibold !leading-[165%]">
                  Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam
                  porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last.{" "}
                </Heading>
                <div className="flex flex-col items-center justify-start w-full mb-[9px] gap-6">
                  <div className="flex flex-row justify-start w-full gap-[50px]">
                    <div className="flex flex-row justify-start items-center w-[23%] gap-2.5">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        size={24}
                        starCount={4}
                        className="flex justify-between w-[120px]"
                      />
                      <Heading size="lg" as="h3" className="!text-gray-600_02 tracking-[-0.40px]">
                        4.5 review
                      </Heading>
                    </div>
                    <Heading size="lg" as="h4" className="!text-gray-600_02 tracking-[-0.40px]">
                      02 June 2022
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-4">
                    <Img src="images/img_ellipse_2695.png" alt="taylor_wilson" className="h-20 w-20 rounded-[50%]" />
                    <div className="flex flex-col items-start justify-center w-[92%] gap-[5px]">
                      <Heading size="2xl" as="h5" className="mt-0.5 tracking-[-0.56px]">
                        Taylor Wilson
                      </Heading>
                      <Heading size="md" as="h6" className="!font-semibold">
                        Product Manager - Static Mania
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-10 p-[29px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[20px]">
                <Heading size="xl" as="h4" className="mt-[9px] !text-gray-600_02 !font-semibold !leading-[165%]">
                  Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam
                  porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last.{" "}
                </Heading>
                <div className="flex flex-col items-center justify-start w-full mb-[9px] gap-6">
                  <div className="flex flex-row justify-start w-full gap-[50px]">
                    <div className="flex flex-row justify-start items-center w-[23%] gap-2.5">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        size={24}
                        starCount={4}
                        className="flex justify-between w-[120px]"
                      />
                      <Heading size="lg" as="h5" className="!text-gray-600_02 tracking-[-0.40px]">
                        4.5 review
                      </Heading>
                    </div>
                    <Heading size="lg" as="h5" className="!text-gray-600_02 tracking-[-0.40px]">
                      02 June 2022
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-4">
                    <Img src="images/img_ellipse_2695.png" alt="circleimage" className="h-20 w-20 rounded-[50%]" />
                    <div className="flex flex-col items-start justify-center w-[92%] gap-[5px]">
                      <Heading size="2xl" as="h3" className="mt-0.5 tracking-[-0.56px]">
                        Taylor Wilson
                      </Heading>
                      <Heading size="md" as="h6" className="!font-semibold">
                        Product Manager - Static Mania
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-10 p-[29px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[20px]">
                <Heading size="xl" as="h4" className="mt-[9px] !text-gray-600_02 !font-semibold !leading-[165%]">
                  Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam
                  porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last.{" "}
                </Heading>
                <div className="flex flex-col items-center justify-start w-full mb-[9px] gap-6">
                  <div className="flex flex-row justify-start w-full gap-[50px]">
                    <div className="flex flex-row justify-start items-center w-[23%] gap-2.5">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        size={24}
                        starCount={4}
                        className="flex justify-between w-[120px]"
                      />
                      <Heading size="lg" as="h5" className="!text-gray-600_02 tracking-[-0.40px]">
                        4.5 review
                      </Heading>
                    </div>
                    <Heading size="lg" as="h5" className="!text-gray-600_02 tracking-[-0.40px]">
                      02 June 2022
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-4">
                    <Img src="images/img_ellipse_2695.png" alt="circleimage" className="h-20 w-20 rounded-[50%]" />
                    <div className="flex flex-col items-start justify-center w-[92%] gap-[5px]">
                      <Heading size="2xl" as="h3" className="mt-0.5 tracking-[-0.56px]">
                        Taylor Wilson
                      </Heading>
                      <Heading size="md" as="h6" className="!font-semibold">
                        Product Manager - Static Mania
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              color="gray_600_02"
              variant="outline"
              rightIcon={<Img src="images/img_arrowdown_gray_900.svg" alt="arrow_down" />}
              className="gap-1 font-semibold min-w-[128px]"
            >
              See more
            </Button>
          </div>
        </div>
        {/* <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] bg-white-A700" /> */}
      </div>
    </>
  );
}
