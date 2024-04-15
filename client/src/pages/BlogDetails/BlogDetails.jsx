import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text } from "../../components";
import { useParams } from "react-router-dom";
import DOMPurify from 'dompurify';

export default function BlogDetailsPage() {

  const [content, setcontent] = useState('');
  const { id } = useParams();
  const [blog, setBlog] = useState('');
  useEffect(() => {
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
  }, [id]);

  useEffect(() => {
    // console.log("silogiiii   ", blog)
    const sanitizedContent = DOMPurify.sanitize(blog.content);
    setcontent(sanitizedContent);
  }, [blog])



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
                {blog.title}
              </Heading>

              <div className="flex flex-col items-start justify-start w-full gap-[84px]">
                <div className="flex flex-row justify-start items-center w-full gap-4">
                  <div className="flex flex-col items-center justify-start w-[88%] gap-6">
                    <Img
                      src={blog.coverimage}
                      alt="image"
                      className="w-full object-cover rounded-[10px]"
                    />
                    <div>
                      <Text as="p" dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[11%]">
                    <div className="flex flex-col items-start justify-start w-full gap-4">
                      <Img src="/images/img_facebook.svg" alt="facebook_one" className="h-8 w-8" />
                      <div className="flex flex-row justify-start items-center w-full gap-1">
                        <Img src="/images/img_linkedin.svg" alt="linkedin_one" className="h-8 w-8" />
                        <div className="flex flex-row justify-start w-[71%]">
                          <div className="flex flex-row justify-start w-full">
                            <div className="h-[25px] w-full relative">
                              <Img
                                src="/images/img_union.svg"
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
                      <Img src="/images/img_twitte.svg" alt="twitte_one" className="h-8 w-8" />
                      <Img src="/images/img_reddit.svg" alt="reddit_one" className="h-8 w-8" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[88%] gap-12">
                  <div className="flex flex-col w-full gap-12">
                    {/* The white box in the blogdetail page  */}
                    <div className="flex flex-row justify-center w-full">
                      <div className="flex flex-col items-center justify-start w-full gap-10 p-[38px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                        <div className="flex flex-col items-start justify-start w-[98%] pt-[3px] gap-4">
                          <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                          </Heading>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[98%] pt-[3px] gap-4">
                          <Heading size="lg" as="h6" className="tracking-[-0.40px]">
                          </Heading>
                          <div className="flex flex-col items-center justify-start pt-1.5 gap-5">
                            <Text as="p"></Text>
                            <Text as="p"></Text>
                            <div className="flex flex-col items-start justify-start w-[88%] pt-0.5 gap-5">
                              <Heading size="xl" as="h4" className="tracking-[-0.48px]">
                                Writen by
                              </Heading>
                              <div className="flex flex-row justify-start items-center w-full gap-6">
                                <Img
                                  src="images/img_profile_picture.png"
                                  alt="pic"
                                  className="h-[100px] w-[100px] rounded-[50%]"
                                />
                                <div className="flex flex-col items-center justify-start w-[17%] gap-1">
                                  <Heading size="xl" as="h4" className="tracking-[-0.48px]">
                                    Writer Name
                                  </Heading>
                                </div>
                                <div className="flex flex-row justify-start items-center w-[12%] gap-1.5">
                                  <div className="h-2 w-2 bg-blue_gray-100_01 rounded-[50%]" />
                                  <Heading as="h6" className="mt-[5px] !text-gray-600_02">
                              
                                  </Heading>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* The white box in the blogdetail page  */}
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-3.5">
                </div>

              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full gap-[38px] max-w-[1200px]">
            </div>
          </div>
        </div>
        {/* <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] bg-white-A700" /> */}
      </div>
    </>
  );
}
