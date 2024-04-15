import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Heading, Input } from "../../components";
import AgentInfoCard from "../../components/AgentInfoCard/AgentInfoCard";
export default function AgentListPage() {
  const [searchBarValue3, setSearchBarValue3] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [data, setData] = React.useState([]);


  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = process.env.REACT_APP_BASE_URL;
        const response = await fetch(`${baseUrl}/agents`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    // console.log(data);
    const filteredData = data.filter((item) =>
      item.Username.toLowerCase().includes(searchBarValue3.toLowerCase())
    );
    setSearchResults(filteredData);
  }, [data, searchBarValue3]);

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
                  placeholder="Enter Agent Name"
                  value={searchBarValue3}
                  onChange={(e) => setSearchBarValue3(e)}
                  suffix={
                    searchBarValue3?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue3("")} height={24} width={24} fillColor="#6e6e6eff" />
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
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[60px]">

            {/* below div is for anegt profile now i have to make it dynamic */}
            <div className="justify-center w-full gap-6 grid-cols-4 grid min-h-[auto] max-w-[1200px]">

              {/* the single agent card si below  */}
              {searchResults.map((data) => (
                <AgentInfoCard
                  key={data._id} // Make sure each card has a unique key
                  name={data.Username}
                  userid={data._id}
                  image={data.profileimg}
                />
              ))}
              {/* the single agentcard above rest copies of it  */}
            </div>
            {/* above div is for anegt profile now i have to make it dynamic */}

            {/* below are new page buttons */}
            <div className="flex flex-row justify-between w-full max-w-[1200px]">
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
    </>
  );
}
