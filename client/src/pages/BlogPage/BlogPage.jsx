import React, {useState} from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Heading, Input } from "../../components";
import BlogPageColumnactive from "../../components/BlogPageColumnactive";
import { useEffect } from "react";

export default function BlogPagePage() {
  const [searchBarValue7, setSearchBarValue7] = useState("");
  const[blogData , setBlogData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = process.env.REACT_APP_BASE_URL;
        const response = await fetch(`${baseUrl}/blog`);
        const jsonData = await response.json();      
        setBlogData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }     
    };
    fetchData();    
  },[]);

  useEffect(() => {
    console.log("***************Blog data***************",blogData)    
  },[blogData]);

  



  return (
    <>
      <Helmet>
        <title>Ashutosh's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full overflow-auto bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[68px]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[58px] max-w-[1200px]">
              <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-[18px]">
                <Heading size="3xl" as="h1" className="tracking-[-0.72px]">
                  Real Estate News & Blogs
                </Heading>
                <div className="flex flex-row justify-start gap-4">
                  <Input
                    name="search"
                    placeholder="Blog Name"
                    value={searchBarValue7}
                    onChange={(e) => setSearchBarValue7(e)}
                    suffix={
                      searchBarValue7?.length > 0 ? (
                        <CloseSVG onClick={() => setSearchBarValue7("")} height={24} width={24} fillColor="#6e6e6eff" />
                      ) : (
                        <Img
                          src="/images/img_icon_24px_search_gray_600_02.svg"
                          alt="icon / 24px / search"
                          className="cursor-pointer"
                        />
                      )
                    }
                    className="w-[76%] gap-[35px] font-semibold border-blue_gray-100_01 border border-solid"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="justify-center w-full gap-6 grid-cols-3 grid min-h-[auto]">
                {blogData.map((data) => (
                <BlogPageColumnactive className="flex flex-col items-center justify-start w-full gap-6" 
                  key={data._id} // Make sure each card has a unique key
                  Title={data.title}
                  coverimg={data.coverimage}
                  blogid={data._id}
                />
              ))}
                </div>
              </div>
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row justify-start gap-[5px]">
                  <Button color="gray_700" variant="outline" className="font-semibold min-w-[48px]">
                    1
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
        {/* <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] bg-white-A700" /> */}
      </div>
    </>
  );
}
