import React,{useEffect,useState} from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text, RatingBar, GoogleMap} from "../../components"; 
import { useParams,Link } from "react-router-dom";

export default function PropertyDetailsPage() {
  const { id } = useParams(); 
  // console.log(" id from parameter ", id);
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
  const[kitchen , setkitchen] = useState(false);
  const[hotwater , sethotwater] = useState(false);
  const[guestRoom , setguestRoom] = useState(false);
  const[PropertyAmmenities,setPropertyAmmenities] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const baseUrl = process.env.REACT_APP_BASE_URL; 
        const propertyDetails = await fetch(`${baseUrl}/property/`+id);
        const { property, agent } = await propertyDetails.json();
        await setPropertydata(property);
        await setAgent(agent);
        // console.log('data is fetched');
      } catch (error) {
        console.error('Error fetching data:', error);
      }    
    };
    fetchData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[id]);
  useEffect(()=>{
    // console.log("gonna print the values now bleopw");
    // console.log(agent);
    // console.log(propertydata);

    setagentUsername(agent.Username);
    setAgentname(agent.name);
    setAgentnumber(agent.phone);
    setpropertyname(propertydata.name);
    setPropertyAmmenities(propertydata.amenities);
    setPropertyImages(propertydata.images);
    setpropertyPrice(propertydata.price);
    setPropertyLocation(propertydata.location);
    setPropertyRoomDetails(propertydata.roomDetails);

    // console.log(PropertyRoomDetails);
    // console.log(PropertyAmmenities)


  },[agent,propertydata,PropertyAmmenities,PropertyRoomDetails,])

  useEffect(() => {
    setroms(propertydata.roomDetails?.numberOfRooms);
    setkitchen(propertydata.roomDetails?.kitchen);
    sethotwater(propertydata.roomDetails?.hotwater);
    setguestRoom(propertydata.roomDetails?.guestRoom);
  }, [propertydata]);

  const [formData, setFormData] = useState({
    fullname: '',
    emailaddress: '',
    phonenumber: '',
    date: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can access formData here and perform actions like sending it to the server
    // console.log(formData);
    // Reset form data after submission
    setFormData({
      fullname: '',
      emailaddress: '',
      phonenumber: '',
      date: '',
      message: ''
    });
  };
  return (
    <>
      <Helmet>
        <title>Ashutosh's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[60px]">
          <div className="flex flex-col items-center justify-start w-full gap-10">
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
                      // <div className="w-full object-cover rounded-[10px]">no image</div>
                  <Img
                  src="/images/no-image-svgrepo-com.svg"
                    alt="no image"
                    className="w-full object-cover rounded-[10px]"
                  />
                 )}
                  <div className="h-[200px] w-full relative">
                  {PropertyImages && PropertyImages.length > 2 ? (
                  <Img src={PropertyImages[2]} alt="image" className="w-full object-cover rounded-[10px]" />
                      ) : (
                      // <div>no image</div>
                  <Img
                    src="/images/no-image-svgrepo-com.svg"
                    alt="no image"
                    className="justify-center h-[263px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[10px]"
                  />
                 )}
                 <Link to="/propertyimages">
                    <Button
                      color="white_A700"
                      size="lg"
                      leftIcon={<Img src="/images/img_icon_image.svg" alt="icon - image" />}
                      className="gap-1.5 bottom-[6%] right-[4%] m-auto text-gray-900 font-bold min-w-[122px] absolute"
                    >
                      more images
                    </Button></Link>
                  </div>
                </div>
              </div>
            </div>
{/*  PROPERTY IMAGES */}




            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col sm:flex-row justify-start items-start w-full gap-6 max-w-[1200px]">


                
                <div className="flex flex-col items-center justify-start w-[98%] sm:w-[66%] gap-6">
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
                      <GoogleMap showMarker={false} className="h-[400px] w-full" />
                    </div>
                  </div>
                  {/*  PROPERTY DETAILS */}




                  {/* AMMENITIES AND ROOM DETAILS , HOME HIGHLIGHTS */}
                  <div className="flex flex-col items-start justify-center w-full gap-[19px] p-[10px] sm:p-[39px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                    <Heading size="2xl" as="h3" className="mt-[3px] tracking-[-0.56px]">
                      Home Highlights
                    </Heading>
                    <div className="flex flex-row w-full gap-[1px] sm:gap-[150px]">
                      <div className="flex flex-col items-center justify-start gap-2.5">
                        <div className="flex flex-row justify-start items-center w-[100%] sm:w-full">
                          <div className="flex flex-row justify-start items-center w-auto gap-2.5 sm:gap-2.5">
                            {/* /} */}
                            <Text as="p" className="mt-[5px]">Rooms</Text>
                            
                          </div>
                          <Heading size="md" as="h6" className="text-right">
                            {roomss} rooms
                          </Heading>
                          
                        </div>
                        <div className="flex flex-row justify-start items-center w-[100%] sm:w-full">
                          <div className="flex flex-row justify-start items-center w-auto gap-2.5 py-0.5">
                            {/**/}
                            <Text as="p" className="mt-px">
                              Kitchen
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right">
                            {kitchen ? "YES" : "NO"}
                          </Heading>
                        </div>

                        <div className="flex flex-row justify-start items-center w-[100%] sm:w-full">
                          <div className="flex flex-row justify-start mr-1 w-auto">
                            <Text as="p" className="mt-px"> GuestRoom</Text>
                          </div>
                          <div className="flex flex-row justify-end ml-1 w-auto">
                          <Heading size="md" as="h6" className="text-right">{guestRoom ? "Yes" : "NO"}</Heading>
                          </div>
                        </div>
                        <div className="flex flex-row justify-start items-center w-[100%] sm:w-full">
                          <div className="flex flex-row justify-start items-center w-[43%] gap-2.5 py-0.5">
                            {/**/}
                            <Text as="p" className="mt-px">
                              Hot water
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right">
                            {hotwater ? "Yes" : "NO"}
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-2/5 mb-[42px] gap-2.5">
                        <div className="flex flex-row justify-between items-center w-[80%] sm:w-full">
                          <div className="flex flex-row justify-start items-center w-[36%] gap-2.5 py-0.5">
                            {/**/}
                            <Text as="p" className="mt-px">
                              HOA
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right">
                            None
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-between items-center w-[80%] sm:w-full">
                          <div className="flex flex-row justify-start items-center w-auto gap-2.5">
                            {/**/}
                            <Text as="p" className="mt-[5px]">
                              Price/Sqft
                            </Text>
                          </div>
                          <Heading size="md" as="h6" className="text-right">
                            N/A
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-between items-center w-[80%] sm:w-full">
                          <div className="flex flex-row justify-start items-center w-auto gap-2.5 py-0.5">
                            {/**/}
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

                      <Link to={'/agentprofile/' + agent._id}><Img
                        src="/images/img_rectangle_5599.png"
                        alt="image_three"
                        className="w-[150px] object-cover rounded-[10px]"
                      /></Link>
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
                <form onSubmit={handleSubmit} className="w-80">
                  <div className="flex flex-col items-center justify-start w-full lg:w-[32%] gap-10 p-[23px] border border-solid border-gray-700 rounded-[10px] bg-white-A700">
                    <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[19px]">
                      <h3 className="text-2xl font-semibold tracking-[-0.56px]">Request for Visit</h3>
                      <div className="flex flex-col items-center justify-start w-full gap-3">
                        {/* Change input types to 'text' */}
                        <div className=" mb-3 w-full pl-2 py-2 text-gray-600_02 font-semibold rounded border border-gray-700 focus:outline-none focus:ring-blue-gray-500 focus:border-blue-gray-500">  {/* Add margin-bottom for spacing */}
                          <input
                            name="fullname"
                            type="text"
                            placeholder="Full Name"
                            className="w-full "
                            onChange={(e) => handleInputChange(e)}
                          />
                        </div>
                        <div className="mb-3 w-full pl-2 py-2 text-gray-600_02 font-semibold rounded border border-gray-700 focus:outline-none focus:ring-blue-gray-500 focus:border-blue-gray-500">
                          <input
                            name="emailaddress"
                            type="text"
                            placeholder="Email Address"
                            className="w-full "
                            value={formData.emailaddress}
                            onChange={(e) => handleInputChange(e)}
                          />
                        </div>
                        <div className="mb-3 w-full pl-2 py-2 text-gray-600_02 font-semibold rounded border border-gray-700 focus:outline-none focus:ring-blue-gray-500 focus:border-blue-gray-500">
                          <input
                            type="text"
                            name="phonenumber"
                            placeholder="Phone Number"
                            className="w-full "
                            value={formData.phonenumber}
                            onChange={(e) => handleInputChange(e)}
                          />
                        </div>
                        <div className="mb-3 w-full pl-2 py-2 text-gray-600_02 font-semibold rounded border border-gray-700 focus:outline-none focus:ring-blue-gray-500 focus:border-blue-gray-500">
                          <input
                            name="date"
                            type="text"
                            placeholder="Date"
                            className="w-full "
                            value={formData.date}
                            onChange={(e) => handleInputChange(e)}
                          />
                        </div>
                      </div>
                      {/* TextArea remains the same */}
                      <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={(e) => handleInputChange(e)}
                        className="w-full h-32 pl-2 py-[12px] text-gray-600_02 font-semibold rounded border border-solid border-gray-700 focus:outline-none"
                      />
                    </div>
                    <button type="submit" className="w-full py-3 text-white font-semibold bg-blue-gray-900 rounded rounded border border-solid hover:bg-blue-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-gray-500">
                      Send Request
                    </button>
                  </div>
                </form>
{/* request visit form */}



              </div>
            </div>
          </div>

{/* Property Recomendations */}
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[39px] max-w-[1200px]">
            </div>
          </div>
{/* Property Recomendations */}


        </div>
        {/* <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] bg-white-A700" /> */}
      </div>
    </>
  );
}
