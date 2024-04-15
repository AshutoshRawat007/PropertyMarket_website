import React ,{useState,useEffect} from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text } from "../../components";
import BlogPageColumnactive from "../../components/BlogPageColumnactive";
import { useParams } from "react-router-dom";

export default function BlogDetailsPage() {

  const { id } = useParams(); 
  const [blog, setBlog] =useState('');
  useEffect(()=>{
    console.log("inside useeffct for Id change");
    const fetchData = async () => {
      try {
        const baseUrl = process.env.REACT_APP_BASE_URL;
        const response = await fetch(`${baseUrl}/blog/${id}`);
        const blogdata = await response.json();
        setBlog(blogdata);
      } catch (error) {
        console.error('Error fetching data:', error);
      }    
    };
    fetchData();
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  },[id]);

  useEffect(()=>{
    console.log("silogiiii   ",blog[0].title)
  },[blog])
  


  return (
    <>
      <Helmet>
        <title>Ashutosh's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[110px] bg-gray-50_01">
        {/* <Header className="flex justify-center items-center w-full p-[19px] bg-white-A700" /> */}
        <div className="flex flex-col items-center justify-start w-full gap-[111px]">
          <div className="flex flex-col items-start justify-start w-full pl-[120px] pr-14">
            <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-[34px] mx-auto max-w-[1135px]">
              <Heading size="3xl" as="h1" className="tracking-[-0.72px]">
              {blog[0].title}
              </Heading>
              <div className="flex flex-col items-start justify-start w-full gap-[84px]">
                <div className="flex flex-row justify-start items-center w-full gap-4">
                  <div className="flex flex-col items-center justify-start w-[88%] gap-6">
                    <Img
                      src="images/img_rectangle_5618_550x996.png"
                      alt="image"
                      className="w-full object-cover rounded-[10px]"
                    />
                    <Text as="p">
                      {blog[0].content}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[11%]">
                    <div className="flex flex-col items-start justify-start w-full gap-4">
                      <Img src="images/img_facebook.svg" alt="facebook_one" className="h-8 w-8" />
                      <div className="flex flex-row justify-start items-center w-full gap-1">
                        <Img src="images/img_linkedin.svg" alt="linkedin_one" className="h-8 w-8" />
                        <div className="flex flex-row justify-start w-[71%]">
                          <div className="flex flex-row justify-start w-full">
                            <div className="h-[25px] w-full relative">
                              <Img
                                src="images/img_union.svg"
                                alt="union_one"
                                className="justify-center h-[25px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                              />
                              <Heading
                                size="xs"
                                as="h2"
                                className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto absolute"
                              >
                                Share this
                              </Heading>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img src="images/img_twitte.svg" alt="twitte_one" className="h-8 w-8" />
                      <Img src="images/img_reddit.svg" alt="reddit_one" className="h-8 w-8" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[88%] gap-12">
                  <div className="flex flex-col items-start justify-center w-full gap-[17px]">
                    <Heading size="2xl" as="h3" className="mt-0.5 tracking-[-0.56px]">
                      Blockquotes
                    </Heading>
                    <Text as="p">
                      {`Blockquotes can be nested. Add a >> in front of the paragraph you want to nest.`}
                    </Text>
                  </div>
                  <div className="flex flex-col w-full gap-12">
                    <div className="flex flex-row justify-center w-full">
                      <div className="flex flex-col items-start justify-center w-full gap-4 p-7 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                        <Heading size="lg" as="h4" className="mt-1 tracking-[-0.40px]">
                          Performance: Faster Loading Speed
                        </Heading>
                        <div className="flex flex-col items-center justify-start gap-[19px]">
                          <Text as="p">
                            Static websites are way faster than dynamic ones. As they don’t have a back-end system,
                            there is no time loss due to database connection. Instead, the lightweight, pre-rendered
                            HTML files load incredibly fast.
                          </Text>
                          <Text as="p">
                            But why fast loading is important? According to Neil Patel, 47% of people on the internet
                            expect a web page to load in less than 2 seconds.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full">
                      <div className="flex flex-col items-center justify-start w-full gap-10 p-[38px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                        <div className="flex flex-col items-start justify-start w-[98%] pt-[3px] gap-4">
                          <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                            Performance: Faster Loading Speed
                          </Heading>
                          <div className="flex flex-col items-center justify-start gap-[19px]">
                            <Text as="p">
                              Static websites are way faster than dynamic ones. As they don’t have a back-end system,
                              there is no time loss due to database connection. Instead, the lightweight, pre-rendered
                              HTML files load incredibly fast.
                            </Text>
                            <Text as="p">
                              But why fast loading is important? According to Neil Patel, 47% of people on the internet
                              expect a web page to load in less than 2 seconds.
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[98%] pt-[3px] gap-4">
                          <Heading size="lg" as="h6" className="tracking-[-0.40px]">
                            Performance: Faster Loading Speed
                          </Heading>
                          <div className="flex flex-col items-center justify-start pt-1.5 gap-5">
                            <Text as="p">
                              Dynamic site CMS like WordPress has a greater dependency. They require an operating system
                              like Linux
                            </Text>
                            <Text as="p">
                              Unlike dynamic websites, you don’t have to depend on plugins to add functionalities to
                              your static site. Instead, you can create or include features directly into files. Or, you
                              can insert widgets using a snippet.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[88%] gap-6">
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[11px]">
                    <Heading size="2xl" as="h3" className="tracking-[-0.56px]">
                      Images
                    </Heading>
                    <Text as="p">
                      Being a fast loading and more secure website, you can choose a static website for beginner to
                      medium level workload. Hopefully, you have got the answer to what is a static website and why
                      should you use it. Decide carefully does static sites are enough for your need.
                    </Text>
                  </div>
                  <Img
                    src="images/img_rectangle_5619_532x996.png"
                    alt="image_one"
                    className="w-full object-cover rounded-[10px]"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[88%] gap-[60px]">
                  <div className="flex flex-col items-center justify-start w-full gap-[23px]">
                    <div className="flex flex-col items-start justify-start w-full gap-3.5">
                      <Heading size="2xl" as="h3" className="tracking-[-0.56px]">
                        Lists
                      </Heading>
                      <Text as="p">
                        Being a fast loading and more secure website, you can choose a static website for beginner to
                        medium level workload. Hopefully, you have got the answer to what is a static website and why
                        should you use it. Decide carefully does static sites are enough for your need.
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-4">
                      <div className="flex flex-row justify-start items-center w-full gap-3">
                        <div className="h-2.5 w-2.5 bg-gray-600_02 rounded-[50%]" />
                        <Heading size="md" as="h6" className="mt-[5px] !text-gray-600_02">
                          Performance: Faster Loading Speed
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-3">
                        <div className="h-2.5 w-2.5 bg-gray-600_02 rounded-[50%]" />
                        <Heading size="md" as="h6" className="mt-[5px] !text-gray-600_02">
                          Less Server-side Dependencies
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-3">
                        <div className="h-2.5 w-2.5 bg-gray-600_02 rounded-[50%]" />
                        <Heading size="md" as="h6" className="mt-[5px] !text-gray-600_02">
                          Flexibility: More Freedom to Develop Websites
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-3">
                        <div className="h-2.5 w-2.5 bg-gray-600_02 rounded-[50%]" />
                        <Heading size="md" as="h6" className="mt-[5px] !text-gray-600_02">
                          Security: A More Secure Website
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-3">
                        <div className="h-2.5 w-2.5 bg-gray-600_02 rounded-[50%]" />
                        <Heading size="md" as="h6" className="mt-[5px] !text-gray-600_02">
                          Scalability: Capability to Handle Massive Traffic
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-3">
                        <div className="h-2.5 w-2.5 bg-gray-600_02 rounded-[50%]" />
                        <Heading size="md" as="h6" className="mt-[5px] !text-gray-600_02">
                          Hosting and Pricing: Saves Your Budget For Good
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <div className="flex flex-row justify-start w-full gap-[15px]">
                      <Heading size="md" as="h6" className="h-[25px] mt-[3px] mb-0.5 !text-gray-600_02 !font-bold">
                        01.
                      </Heading>
                      <Heading size="md" as="h6" className="!text-gray-600_02">
                        Performance: Faster Loading Speed
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start w-full gap-[13px]">
                      <Heading size="md" as="h6" className="mt-[3px] mb-0.5 !text-gray-600_02 !font-bold">
                        02.
                      </Heading>
                      <Heading size="md" as="h6" className="!text-gray-600_02">
                        Less Server-side Dependencies
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start w-full gap-3">
                      <Heading size="md" as="h6" className="mt-[3px] mb-0.5 !text-gray-600_02 !font-bold">
                        03.
                      </Heading>
                      <Heading size="md" as="h6" className="!text-gray-600_02">
                        Flexibility: More Freedom to Develop Websites
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start w-full gap-3">
                      <Heading size="md" as="h6" className="mt-[3px] mb-0.5 !text-gray-600_02 !font-bold">
                        04.
                      </Heading>
                      <Heading size="md" as="h6" className="!text-gray-600_02">
                        Security: A More Secure Website
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start w-full gap-3">
                      <Heading size="md" as="h6" className="mt-[3px] mb-0.5 !text-gray-600_02 !font-bold">
                        05.
                      </Heading>
                      <Heading size="md" as="h6" className="!text-gray-600_02">
                        Scalability: Capability to Handle Massive Traffic
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start w-full gap-[11px]">
                      <Heading size="md" as="h6" className="mt-[3px] mb-0.5 !text-gray-600_02 !font-bold">
                        06.
                      </Heading>
                      <Heading size="md" as="h6" className="!text-gray-600_02">
                        Hosting and Pricing: Saves Your Budget For Good
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-3.5">
                  <Heading size="2xl" as="h3" className="tracking-[-0.56px]">
                    Link
                  </Heading>
                  <Text as="p">
                    Yes, a static website may have all its benefits, but is it suitable for you? That’s a big question.
                    It depends on why you are going to build a website, what purpose it will serve. That’s why you must
                    when you should use a static website.
                    <br />
                    The followings are the common applications where using the static website is the best choice. - Blog
                    sites- - Small business websites - Websites Under-Development - Personal Portfolio sites - Websites
                    that contain basic information
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-[88%] gap-[39px]">
                  <div className="flex flex-col items-start justify-start w-full gap-3.5">
                    <Heading size="2xl" as="h3" className="tracking-[-0.56px]">
                      Tables
                    </Heading>
                    <Text as="p">
                      The followings are the common applications where using the static website is the best choice. -
                      Blog sites- - Small business websites.
                    </Text>
                  </div>
                  <div className="flex flex-row justify-center w-full p-[39px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">

                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[88%] pt-0.5 gap-5">
                  <Heading size="xl" as="h4" className="tracking-[-0.48px]">
                    Writen by
                  </Heading>
                  <div className="flex flex-row justify-start items-center w-full gap-6">
                    <Img
                      src="images/img_profile_picture.png"
                      alt="profilepicture"
                      className="h-[100px] w-[100px] rounded-[50%]"
                    />
                    <div className="flex flex-col items-center justify-start w-[17%] gap-1">
                      <Heading size="xl" as="h4" className="tracking-[-0.48px]">
                        Kristin Watson
                      </Heading>
                      <Heading as="h6" className="!text-gray-600_02">
                        Co-founder and CDO
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[12%] gap-1.5">
                      <div className="h-2 w-2 bg-blue_gray-100_01 rounded-[50%]" />
                      <Heading as="h6" className="mt-[5px] !text-gray-600_02">
                        July 20, 2022
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full gap-[38px] max-w-[1200px]">
              <Heading size="3xl" as="h2" className="tracking-[-0.72px]">
                Recent News
              </Heading>
              <div className="flex flex-row w-full gap-6">
                <BlogPageColumnactive className="flex flex-col items-center justify-start w-[32%] gap-6" />
                <BlogPageColumnactive className="flex flex-col items-center justify-start w-[32%] gap-6" />
                <BlogPageColumnactive className="flex flex-col items-center justify-start w-[32%] gap-6" />
              </div>
            </div>
          </div>
        </div>
        {/* <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] bg-white-A700" /> */}
      </div>
    </>
  );
}
