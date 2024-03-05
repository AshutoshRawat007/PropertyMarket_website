import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Heading, SelectBox, Input } from "../../components";
import BlogPageColumnactive from "../../components/BlogPageColumnactive";


const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function BlogPagePage() {
  const [searchBarValue7, setSearchBarValue7] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Ashutosh's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full overflow-auto bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[68px]">
          {/* <Header1 className="flex justify-center items-center w-full p-[19px] bg-white-A700" /> */}
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[58px] max-w-[1200px]">
              <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-[18px]">
                <Heading size="3xl" as="h1" className="tracking-[-0.72px]">
                  Real Estate News & Blogs
                </Heading>
                <div className="flex flex-row justify-start gap-4">
                  <Input
                    name="search"
                    placeholder="Enter your address"
                    value={searchBarValue7}
                    onChange={(e) => setSearchBarValue7(e)}
                    suffix={
                      searchBarValue7?.length > 0 ? (
                        <CloseSVG onClick={() => setSearchBarValue7("")} height={24} width={24} fillColor="#6e6e6eff" />
                      ) : (
                        <Img
                          src="images/img_icon_24px_search_gray_600_02.svg"
                          alt="icon / 24px / search"
                          className="cursor-pointer"
                        />
                      )
                    }
                    className="w-[33%] gap-[35px] font-semibold border-blue_gray-100_01 border border-solid"
                  />
                  <SelectBox
                    indicator={<Img src="images/img_arrowdown_gray_600_02.svg" alt="arrow_down" />}
                    name="active"
                    placeholder="Category"
                    options={dropDownOptions}
                    className="w-[33%] gap-px !text-gray-600_02 font-bold border-blue_gray-100_01 border border-solid"
                  />
                  <SelectBox
                    indicator={<Img src="images/img_arrowdown_gray_600_02.svg" alt="arrow_down" />}
                    name="active_one"
                    placeholder="Popular"
                    options={dropDownOptions}
                    className="w-[33%] gap-px !text-gray-600_02 font-bold border-blue_gray-100_01 border border-solid"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="justify-center w-full gap-6 grid-cols-3 grid min-h-[auto]">
                  <div className="flex flex-col items-center justify-start w-full gap-6">
                    <div className="flex flex-col items-center justify-start w-full gap-3">
                      <Img
                        src="images/img_rectangle_5617_350x384.png"
                        alt="image"
                        className="w-full object-cover rounded-lg"
                      />
                      <div className="flex flex-col items-start justify-start w-full gap-2">
                        <Button
                          color="blue_gray_100_01"
                          size="md"
                          variant="outline"
                          className="font-semibold min-w-[89px]"
                        >
                          Business
                        </Button>
                        <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                          <Heading size="xl" as="h2" className="tracking-[-0.48px]">
                            10 Delightful Dining Room Decor Trends for Spring
                          </Heading>
                          <div className="flex flex-row justify-start w-full gap-6">
                            <div className="flex flex-row justify-start items-start w-[23%] gap-1.5">
                              <div className="h-[5px] w-[5px] mt-[5px] bg-blue_gray-100_01 rounded-sm" />
                              <Heading size="xs" as="h3" className="!text-gray-600_02">
                                July 20, 2022
                              </Heading>
                            </div>
                            <div className="flex flex-row justify-start items-center w-[23%] gap-1.5">
                              <div className="h-[5px] w-[5px] bg-blue_gray-100_01 rounded-sm" />
                              <Heading size="xs" as="h4" className="!text-gray-600_02">
                                7 min read
                              </Heading>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-2">
                      <Heading size="md" as="h5" className="mt-0.5 !text-gray-600_02 !font-bold">
                        Continue Reading
                      </Heading>
                      <Img src="images/img_icon_24px_v_gray_600_02.svg" alt="continue" className="h-6 w-6" />
                    </div>
                  </div>
                  <BlogPageColumnactive className="flex flex-col items-center justify-start w-full gap-6" />
                  <BlogPageColumnactive className="flex flex-col items-center justify-start w-full gap-6" />
                  <BlogPageColumnactive className="flex flex-col items-center justify-start w-full gap-6" />
                  <BlogPageColumnactive className="flex flex-col items-center justify-start w-full gap-6" />
                  <BlogPageColumnactive className="flex flex-col items-center justify-start w-full gap-6" />
                  <BlogPageColumnactive className="flex flex-col items-center justify-start w-full gap-6" />
                  <BlogPageColumnactive className="flex flex-col items-center justify-start w-full gap-6" />
                  <BlogPageColumnactive className="flex flex-col items-center justify-start w-full gap-6" />
                </div>
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
        {/* <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] bg-white-A700" /> */}
      </div>
    </>
  );
}
