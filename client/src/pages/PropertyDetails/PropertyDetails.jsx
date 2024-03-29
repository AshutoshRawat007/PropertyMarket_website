import React,{useEffect,useState} from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text, RatingBar, GoogleMap } from "../../components";
import { TextArea } from '../../components/TextArea';  
import { Radio } from '../../components/Radio';  
import { RadioGroup } from '../../components/RadioGroup';  
import { useParams } from "react-router-dom";

import LandingPageCard from "../../components/LandingPageCard";

export default function PropertyDetailsPage() {
  const { id } = useParams(); 
  console.log(" id from parameter ", id);
  const[propertydata,setPropertydata] = useState([]);
  const[agent , setAgent] = useState([]);
  const[agnetname , setAgentname] = useState('');
  const[agentUsername,setagentUsername] =useState('');
  const[agentnumber , setAgentnumber] = useState('');
  const[propertyname , setpropertyname] = useState('');
  const[PropertyLocation , setPropertyLocation] = useState('');
  const[propertyPrice , setpropertyPrice] = useState('');
  const[PropertyImages , setPropertyImages] = useState([]);
  const[PropertyRoomDetails , setPropertyRoomDetails] = useState();
  const[roomss , setroms] = useState();
  const[PropertyAmmenities,setPropertyAmmenities] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const baseUrl = process.env.REACT_APP_BASE_URL; 
        const propertyDetails = await fetch(`${baseUrl}/property/`+id);
        const { property, agent } = await propertyDetails.json();
        await setPropertydata(property);
        await setAgent(agent);
        console.log('data is fetched');
      } catch (error) {
        console.error('Error fetching data:', error);
      }    
    };
    fetchData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[id]);
  useEffect(()=>{
    console.log("gonna print the values now bleopw");
    console.log(agent);
    console.log(propertydata);

    setagentUsername(agent.Username);
    setAgentname(agent.name);
    setAgentnumber(agent.phone);
    setpropertyname(propertydata.name);
    setPropertyAmmenities(propertydata.amenities);
    setPropertyImages(propertydata.images);
    setpropertyPrice(propertydata.price);
    setPropertyLocation(propertydata.location);
    setPropertyRoomDetails(propertydata.roomDetails);

    setroms(22);
    // const { numberOfRooms, kitchen, guestRoom } = PropertyRoomDetails;
    // console.log(" below os property room details",numberOfRooms,kitchen,guestRoom);
    console.log(PropertyRoomDetails);
    console.log(PropertyAmmenities)


  },[agent,propertydata,PropertyAmmenities,PropertyRoomDetails])
  return (
    <>
      <Helmet>
        <title>Ashutosh's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[60px]">
          <div className="flex flex-col items-center justify-start w-full gap-10">
            {/* <Header className="flex justify-center items-center w-full p-[19px] bg-white-A700" /> */}
{/*  PROPERTY IMAGES */}
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row justify-start w-full gap-6 max-w-[1200px]">
                <div className="flex flex-row justify-start w-[66%]">
                {PropertyImages && PropertyImages.length > 0 ? (
                  <Img src={PropertyImages[0]} alt="image" className="w-full object-cover rounded-[10px]" />
                      ) : (
                  <Img
                    src="/images/img_rectangle_5611.png"
                    alt="image_one"
                    className="w-full object-cover rounded-[10px]"
                  />
                 )}
                 </div>
                <div className="flex flex-col items-center justify-start w-[32%] gap-6">
                {PropertyImages && PropertyImages.length > 1 ? (
                  <Img src={PropertyImages[1]} alt="image" className="w-full object-cover rounded-[10px]" />
                      ) : (
                  <Img
                    src="/images/img_rectangle_5611.png"
                    alt="image_one"
                    className="w-full object-cover rounded-[10px]"
                  />
                 )}
                  <div className="h-[263px] w-full relative">
                  {PropertyImages && PropertyImages.length > 2 ? (
                  <Img src={PropertyImages[2]} alt="image" className="w-full object-cover rounded-[10px]" />
                      ) : (
                  <Img
                    src="/images/img_rectangle_5611.png"
                    alt="image_one"
                    className="justify-center h-[263px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[10px]"
                  />
                 )}
                    <Button
                      color="white_A700"
                      size="lg"
                      leftIcon={<Img src="images/img_icon_image.svg" alt="icon - image" />}
                      className="gap-1.5 bottom-[6%] right-[4%] m-auto text-gray-900 font-bold min-w-[122px] absolute"
                    >
                      3 more
                    </Button>
                  </div>
                </div>
              </div>
            </div>
{/*  PROPERTY IMAGES */}




            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row justify-start items-start w-full gap-6 max-w-[1200px]">
                <div className="flex flex-col items-center justify-start w-[66%] gap-6">
{/* PROPERTY DETAILS */}
                  <div className="flex flex-col items-center justify-start w-full gap-11 p-[39px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                    <div className="flex flex-col items-start justify-start w-full gap-[22px]">
                      <div className="flex flex-col items-start justify-start w-full gap-[17px]">
                        <Heading size="2xl" as="h1" className="tracking-[-0.56px]">
                          {propertyname}
                        </Heading>
                        <Heading size="lg" as="h2" className="tracking-[-0.40px]">
                          {PropertyLocation}
                        </Heading>
                      </div>
                      <div className="flex flex-row w-3/4 gap-4">
                        <div className="flex flex-col items-start justify-start gap-[5px] p-[5px] border-gray-600_02 border border-solid bg-white-A700 rounded-[10px]">
                          <Heading size="xl" as="h3" className="ml-[17px] tracking-[-0.48px]">
                            {propertyPrice}
                          </Heading>
                          <Heading size="xs" as="h4" className="ml-[17px] !text-gray-600_02">
                            Online / Cash Payment
                          </Heading>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-1 p-[5px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                          <Heading size="xl" as="h5" className="ml-[17px] tracking-[-0.48px]">
                            $850 / month
                          </Heading>
                          <Heading size="xs" as="h6" className="ml-[17px] !text-gray-600_02">
                            0% EMI for 6 Months
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full pt-[3px] gap-3">
                      <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                        Well-constructed 1562 Sq Ft Home Is Now Offering To You In Uttara For Sale
                      </Heading>
                      <Text as="p">
                        A slider is great way to display a slideshow featuring images or videos, usually on your
                        homepage.
                        <br />
                        Adding sliders to your site is no longer difficult. You don’t have to know coding anymore. Just
                        use a slider widget and it will automatically insert the slider on your web page.
                        <br />
                        So, the Elementor slider would be a great tool to work with when building a WordPress site.
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-6">
                      <div className="flex flex-col items-start justify-start w-full gap-[22px]">
                        <Heading size="2xl" as="h3" className="tracking-[-0.56px]">
                          Local Information
                        </Heading>
                        <div className="flex flex-row justify-start gap-3">
                          <Button
                            color="blue_gray_100_01"
                            size="lg"
                            variant="outline"
                            className="font-semibold min-w-[119px]"
                          >
                            Map
                          </Button>
                          <Button size="lg" className="font-semibold min-w-[119px]">
                            Schools
                          </Button>
                          <Button
                            color="blue_gray_100_01"
                            size="lg"
                            variant="outline"
                            className="font-semibold min-w-[119px]"
                          >
                            Crime
                          </Button>
                          <Button
                            color="blue_gray_100_01"
                            size="lg"
                            variant="outline"
                            className="font-semibold min-w-[119px]"
                          >
                            Shop & Eat
                          </Button>
                        </div>
                   </div>
                      <GoogleMap showMarker={false} className="h-[400px] w-full" />
                    </div>
                  </div>
{/*  PROPERTY DETAILS */}




 {/* AMMENITIES AND ROOM DETAILS , HOME HIGHLIGHTS */}
                  <div className="flex flex-col items-start justify-center w-full gap-[19px] p-[39px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                    <Heading size="2xl" as="h3" className="mt-[3px] tracking-[-0.56px]">
                      Home Highlights
                    </Heading>
                    <div className="flex flex-row w-full gap-[150px]">
                      <div className="flex flex-col items-center justify-start w-2/5 gap-2.5">
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[41%] gap-2.5">
                            <div className="h-2 w-2 bg-gray-600_02 rounded-[50%]" />
                            <Text as="p" className="mt-[5px]">
                              Rooms
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right">
                           {roomss} rooms
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[42%] gap-2.5 py-0.5">
                            <div className="h-2 w-2 bg-gray-600_02 rounded-[50%]" />
                            <Text as="p" className="mt-px">
                              Kitchen
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right">
                          {/* {PropertyRoomDetails.kitchen?"YES":"NO"}  */}
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[35%] gap-2.5 py-0.5">
                            <div className="h-2 w-2 bg-gray-600_02 rounded-[50%]" />
                            <Text as="p" className="mt-px">
                              GuestRoom
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right">
                          {/* {PropertyRoomDetails.guestRoom ? "Yes":"NO"}  */}
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[43%] gap-2.5 py-0.5">
                            <div className="h-2 w-2 bg-gray-600_02 rounded-[50%]" />
                            <Text as="p" className="mt-px">
                              Hot water
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right">
                          {/* {PropertyRoomDetails.hotwater ? "Yes":"NO"}  */}
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-2/5 mb-[42px] gap-2.5">
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[36%] gap-2.5 py-0.5">
                            <div className="h-2 w-2 bg-gray-600_02 rounded-[50%]" />
                            <Text as="p" className="mt-px">
                              HOA
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right">
                            None
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[45%] gap-2.5">
                            <div className="h-2 w-2 bg-gray-600_02 rounded-[50%]" />
                            <Text as="p" className="mt-[5px]">
                              Price/Sqft
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right">
                            $560
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[39%] gap-2.5 py-0.5">
                            <div className="h-2 w-2 bg-gray-600_02 rounded-[50%]" />
                            <Text as="p" className="mt-px">
                              Listed
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right">
                            No Info
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
 {/* AMMENITIES AND ROOM DETAILS , HOME HIGHLIGHTS */}


{/* Agent Informantion */}
                  <div className="flex flex-col items-start justify-center w-full gap-[21px] p-[39px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                    <Heading size="2xl" as="h3" className="mt-[3px] tracking-[-0.56px]">
                      Agent Information
                    </Heading>
                    <div className="flex flex-row justify-start items-center w-full gap-6">
                      <Img
                        src="/images/img_rectangle_5599.png"
                        alt="image_three"
                        className="w-[150px] object-cover rounded-[10px]"
                      />
                      <div className="flex flex-col items-start justify-start w-[26%] gap-0.5">
                        <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                          {agnetname}
                        </Heading>
                        <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
                          <RatingBar value={1} isEditable={true} size={16} className="flex justify-between w-24" />
                          <Heading as="h6" className="mr-1.5">
                            4 review
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-2.5 py-0.5">
                          <Img src="/images/img_icon_20px_email.svg" alt="icon20pxemail" className="h-5 w-5" />
                          <Text size="xs" as="p" className="mt-0.5">
                          {agentUsername}
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-2.5 py-0.5">
                          <Img src="/images/img_icon_20px_call.svg" alt="icon20pxcall" className="h-5 w-5" />
                          <Text size="xs" as="p">
                          {agentnumber}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
{/* Agent Informantion */}

                </div>

{/* request visit form */}
                <div className="flex flex-col items-center justify-start w-[32%] gap-10 p-[23px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[19px]">
                    <Heading size="2xl" as="h3" className="tracking-[-0.56px]">
                      Request for Visit
                    </Heading>
                    <div className="flex flex-col items-center justify-start w-full gap-3">
                      <RadioGroup name="requestfor" className="flex flex-col">
                        <Radio
                          key = "234"
                          value="fullname"
                          label="Full Name"
                          className="pl-3.5 pr-[35px] gap-3.5 py-[17px] text-gray-600_02 font-semibold"
                        />
                        <Radio
                        key = "44"
                          value="emailaddress"
                          label="Email Address"
                          className="mt-3 pl-3.5 pr-[35px] gap-3.5 py-[17px] text-gray-600_02 font-semibold"
                        />
                        <Radio
                        key = "888"
                          value="phonenumber"
                          label="Phone Number"
                          className="mt-3 pl-3.5 pr-[35px] gap-3.5 py-[17px] text-gray-600_02 font-semibold"
                        />
                        <Radio
                        key = "01223"
                          value="date"
                          label="Date"
                          className="mt-3 pl-3.5 pr-[35px] gap-3.5 py-[17px] text-gray-600_02 font-semibold"
                        />
                      </RadioGroup>
                      <TextArea
                        name="inputbox_one"
                        placeholder="Message"
                        className="w-full text-gray-600_02 font-semibold"
                      />
                    </div>
                  </div>
                  <Button size="2xl" className="w-full font-semibold">
                    Send Request
                  </Button>
                </div>
{/* request visit form */}


              </div>
            </div>
          </div>

{/* Property Recomendations */}
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[39px] max-w-[1200px]">
              <div className="flex flex-row justify-between items-start w-full pt-[3px]">
                <Heading size="2xl" as="h2" className="tracking-[-0.56px]">
                  Latest Property Listings
                </Heading>
                <div className="flex flex-row justify-start items-center mt-[3px] gap-2">
                  <Heading size="md" as="h3" className="mt-0.5 !text-orange-A700 !font-bold">
                    Explore All
                  </Heading>
                  <Img src="/images/img_icon_24px_v.svg" alt="iconarrow_one" className="h-6 w-6" />
                </div>
              </div>
              <div className="flex flex-row w-full gap-6">
                <LandingPageCard className="flex flex-col items-center justify-start w-[32%]" />
                <LandingPageCard
                  image="/images/img_image_1.png"
                  className="flex flex-col items-center justify-start w-[32%]"
                />
                <LandingPageCard
                  image="/images/img_image_2.png"
                  className="flex flex-col items-center justify-start w-[32%]"
                />
              </div>
            </div>
          </div>
{/* Property Recomendations */}


        </div>
        {/* <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] bg-white-A700" /> */}
      </div>
    </>
  );
}
