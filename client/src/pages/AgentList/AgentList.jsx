import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Heading, RatingBar, SelectBox, Input } from "../../components";


const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AgentListPage() {
  const [searchBarValue3, setSearchBarValue3] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Ashutosh's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-14">
          {/* <Header1 className="flex justify-center items-center w-full p-[19px] bg-white-A700" /> */}
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-[18px] max-w-[1200px]">
              <Heading size="3xl" as="h1" className="tracking-[-0.72px]">
                Some Nearby Good Agents
              </Heading>
              <div className="flex flex-row justify-start gap-4">
                <Input
                  name="search"
                  placeholder="Enter your address"
                  value={searchBarValue3}
                  onChange={(e) => setSearchBarValue3(e)}
                  suffix={
                    searchBarValue3?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue3("")} height={24} width={24} fillColor="#6e6e6eff" />
                    ) : (
                      <Img
                        src="images/img_icon_24px_search_gray_600_02.svg"
                        alt="icon / 24px / search"
                        className="cursor-pointer"
                      />
                    )
                  }
                  className="w-[76%] gap-[35px] font-semibold border-blue_gray-100_01 border border-solid"
                />
                <SelectBox
                  indicator={<Img src="images/img_arrowdown_gray_600_02.svg" alt="arrow_down" />}
                  name="active"
                  placeholder="Review"
                  options={dropDownOptions}
                  className="w-[12%] gap-px !text-gray-600_02 font-bold border-blue_gray-100_01 border border-solid"
                />
                <Button
                  size="4xl"
                  rightIcon={<Img src="images/img_icon_20px_search.svg" alt="icon / 20px / search" />}
                  className="gap-2.5 font-bold min-w-[128px]"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[60px]">
            <div className="justify-center w-full gap-6 grid-cols-4 grid min-h-[auto] max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5615.png"
                  alt="bruno_fernandes"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-row justify-center w-full p-[13px] rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <div className="flex flex-col items-start justify-start w-[95%] gap-[7px] mx-1.5">
                    <Heading size="lg" as="h2" className="tracking-[-0.40px]">
                      Bruno Fernandes
                    </Heading>
                    <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
                      <RatingBar value={1} isEditable={true} size={16} className="flex justify-between w-24" />
                      <Heading as="h3">4.5 review</Heading>
                    </div>
                    <Button color="blue_gray_100_01" variant="outline" className="w-full font-semibold">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5616.png"
                  alt="image"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-row justify-center w-full p-[13px] rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <div className="flex flex-col items-start justify-start w-[95%] gap-[7px] mx-1.5">
                    <Heading size="lg" as="h4" className="tracking-[-0.40px]">
                      Bruno Fernandes
                    </Heading>
                    <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
                      <RatingBar value={1} isEditable={true} size={16} className="flex justify-between w-24" />
                      <Heading as="h5">4.5 review</Heading>
                    </div>
                    <Button color="blue_gray_100_01" variant="outline" className="w-full font-semibold">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5614.png"
                  alt="image"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-row justify-center w-full p-[13px] rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <div className="flex flex-col items-start justify-start w-[95%] gap-[7px] mx-1.5">
                    <Heading size="lg" as="h6" className="tracking-[-0.40px]">
                      Bruno Fernandes
                    </Heading>
                    <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
                      <RatingBar value={1} isEditable={true} size={16} className="flex justify-between w-24" />
                      <Heading as="h6">4.5 review</Heading>
                    </div>
                    <Button color="blue_gray_100_01" variant="outline" className="w-full font-semibold">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5614_282x282.png"
                  alt="image"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-row justify-center w-full p-[13px] rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <div className="flex flex-col items-start justify-start w-[95%] gap-[7px] mx-1.5">
                    <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                      Bruno Fernandes
                    </Heading>
                    <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
                      <RatingBar value={1} isEditable={true} size={16} className="flex justify-between w-24" />
                      <Heading as="h6">4.5 review</Heading>
                    </div>
                    <Button color="blue_gray_100_01" variant="outline" className="w-full font-semibold">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5617.png"
                  alt="image"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-row justify-center w-full p-[13px] rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <div className="flex flex-col items-start justify-start w-[95%] gap-[7px] mx-1.5">
                    <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                      Bruno Fernandes
                    </Heading>
                    <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
                      <RatingBar value={1} isEditable={true} size={16} className="flex justify-between w-24" />
                      <Heading as="h6">4.5 review</Heading>
                    </div>
                    <Button color="blue_gray_100_01" variant="outline" className="w-full font-semibold">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5618.png"
                  alt="image"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-row justify-center w-full p-[13px] rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <div className="flex flex-col items-start justify-start w-[95%] gap-[7px] mx-1.5">
                    <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                      Bruno Fernandes
                    </Heading>
                    <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
                      <RatingBar value={1} isEditable={true} size={16} className="flex justify-between w-24" />
                      <Heading as="h6">4.5 review</Heading>
                    </div>
                    <Button color="blue_gray_100_01" variant="outline" className="w-full font-semibold">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5619.png"
                  alt="image"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-row justify-center w-full p-[13px] rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <div className="flex flex-col items-start justify-start w-[95%] gap-[7px] mx-1.5">
                    <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                      Bruno Fernandes
                    </Heading>
                    <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
                      <RatingBar value={1} isEditable={true} size={16} className="flex justify-between w-24" />
                      <Heading as="h6">4.5 review</Heading>
                    </div>
                    <Button color="blue_gray_100_01" variant="outline" className="w-full font-semibold">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5620.png"
                  alt="image"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-row justify-center w-full p-[13px] rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <div className="flex flex-col items-start justify-start w-[95%] gap-[7px] mx-1.5">
                    <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                      Bruno Fernandes
                    </Heading>
                    <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
                      <RatingBar value={1} isEditable={true} size={16} className="flex justify-between w-24" />
                      <Heading as="h6">4.5 review</Heading>
                    </div>
                    <Button color="blue_gray_100_01" variant="outline" className="w-full font-semibold">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5621.png"
                  alt="image"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-row justify-center w-full p-[13px] rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <div className="flex flex-col items-start justify-start w-[95%] gap-[7px] mx-1.5">
                    <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                      Bruno Fernandes
                    </Heading>
                    <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
                      <RatingBar value={1} isEditable={true} size={16} className="flex justify-between w-24" />
                      <Heading as="h6">4.5 review</Heading>
                    </div>
                    <Button color="blue_gray_100_01" variant="outline" className="w-full font-semibold">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5622.png"
                  alt="image"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-row justify-center w-full p-[13px] rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <div className="flex flex-col items-start justify-start w-[95%] gap-[7px] mx-1.5">
                    <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                      Bruno Fernandes
                    </Heading>
                    <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
                      <RatingBar value={1} isEditable={true} size={16} className="flex justify-between w-24" />
                      <Heading as="h6">4.5 review</Heading>
                    </div>
                    <Button color="blue_gray_100_01" variant="outline" className="w-full font-semibold">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5623.png"
                  alt="image"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-row justify-center w-full p-[13px] rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <div className="flex flex-col items-start justify-start w-[95%] gap-[7px] mx-1.5">
                    <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                      Bruno Fernandes
                    </Heading>
                    <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
                      <RatingBar value={1} isEditable={true} size={16} className="flex justify-between w-24" />
                      <Heading as="h6">4.5 review</Heading>
                    </div>
                    <Button color="blue_gray_100_01" variant="outline" className="w-full font-semibold">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5615_282x282.png"
                  alt="image"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-row justify-center w-full p-[13px] rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <div className="flex flex-col items-start justify-start w-[95%] gap-[7px] mx-1.5">
                    <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                      Bruno Fernandes
                    </Heading>
                    <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
                      <RatingBar value={1} isEditable={true} size={16} className="flex justify-between w-24" />
                      <Heading as="h6">4.5 review</Heading>
                    </div>
                    <Button color="blue_gray_100_01" variant="outline" className="w-full font-semibold">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full max-w-[1200px]">
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
        {/* <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] bg-white-A700" /> */}
      </div>
    </>
  );
}
