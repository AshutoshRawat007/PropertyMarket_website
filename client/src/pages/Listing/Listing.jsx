import React, { useState, useEffect, useCallback  } from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, SelectBox, Input, Heading } from "../../components";
import LandingPageCard from "../../components/LandingPageCard/LandingPageCard";

const dropDownOptions = [
  { label: "Buy", value: "Buy " },
  { label: "Rent", value: "Rent" },
];

const dropDownOptions2 = [
  { label: "1", value: "1 " },
  { label: "2", value: "2" },
  { label: "3 ", value: "3" },
  { label: "4", value: "4" },
];
export default function ListingPage() {
  const [searchBarValue7, setSearchBarValue7] = useState("");
  const [data, setData] = useState([]);
  const [bedrooms, setBedrooms] = useState('');
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [filters, setFilters] = useState({
    transaction: 'buy',
    bedroom: '1'
  });
  const [buysellrent, setbuysellrent] = useState('');

  const filterProperties = () => {
    // Create an array to hold the filter options
    const filtersArray = [];

    // Include location search in filters
    if (searchBarValue7) { // Include location search in filters
      filtersArray.push(searchBarValue7.toLowerCase()); // Perform case-insensitive search
    }

    // Include bedroom filter in filters
    if (filters.bedroom) {
      filtersArray.push(filters.bedroom);
    }

    // Filter the data based on the applied filters
    const filteredData = data.filter((property) => {
      return filtersArray.every((filter) => {
        const { location, roomDetails } = property;
        if (searchBarValue7 && location && location.toLowerCase().includes(filter)) {
          return true;
        }
        if (roomDetails && roomDetails.numberOfRooms === parseInt(filters.bedroom)) {
          return true; // Match bedroom filter
        }
        return false;
      });
    });
    setAppliedFilters(filteredData);
    // console.log("fileeetrs",filters)
    // console.log("applied fileeetrs",appliedFilters)
  };

  const handleSearch = () => {
    filterProperties();
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = process.env.REACT_APP_BASE_URL;
        const response = await fetch(`${baseUrl}/property`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const removeFilter = (key) => {
    const { [key]: removedFilter, ...restFilters } = filters;
    setFilters(restFilters);
  };
  const addFilterCallback = useCallback((filterKey, filterValue) => {
    setFilters({ ...filters, [filterKey]: filterValue });

  }, [filters]); //
  useEffect(() => {
    if (bedrooms !== '') {
      addFilterCallback('bedroom', bedrooms);
    }
  }, [bedrooms,addFilterCallback]);

  useEffect(() => {
    if (buysellrent !== '') {
      addFilterCallback('transaction', buysellrent);
    }
  }, [buysellrent,addFilterCallback]);

  return (
    <>
      <Helmet>
        <title>Ansum's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[60px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-[18px] max-w-[1200px]">
              <Heading size="3xl" as="h1" className="tracking-[-0.72px]">
                Find Property
              </Heading>
              <div className="flex flex-col items-center justify-start w-full gap-3">
                <div className="flex flex-row justify-start w-full gap-5">
                  <Input name="search"
                    placeholder="Enter your address"
                    value={searchBarValue7}
                    onChange={(e) => setSearchBarValue7(e)}
                    suffix={
                      searchBarValue7?.length > 0 ? (
                        <CloseSVG onClick={() => setSearchBarValue7("")} height={24} width={24} fillColor="#626262ff" />
                      ) : (
                        <Img
                          src="images/img_icon_24px_search_gray_700.svg"
                          alt="icon / 24px / search"
                          className="cursor-pointer"
                        />
                      )
                    }
                    className="w-[36%] gap-[35px] !text-gray-700 font-semibold border-blue_gray-100_01 border border-solid"
                  />
                  <SelectBox
                    indicator={<Img src="images/img_arrowdown_gray_700.svg" alt="arrow_down" />}
                    name="active"
                    placeholder="Buy"
                    options={dropDownOptions}
                    className="w-[10%] gap-px font-bold border-blue_gray-100_01 border border-solid"
                    onChange={(selectedOption) => setbuysellrent(selectedOption.value)}
                  />
                  <SelectBox
                    indicator={<Img src="images/img_arrowdown_gray_700.svg" alt="arrow_down" />}
                    name="pressed"
                    placeholder="bedrooms"
                    options={dropDownOptions2}
                    className="w-[18%] gap-px font-bold border-blue_gray-100_01 border border-solid"
                    onChange={(selectedOption) => setBedrooms(selectedOption.value)}
                  />
                  <Button
                    size="4xl"
                    rightIcon={<Img src="images/img_icon_20px_search.svg" alt="icon / 20px / search" />}
                    className="gap-2.5 font-bold min-w-[124px]"
                    onClick={handleSearch}
                  >
                    Search
                  </Button>
                </div>


                {/* the filters selected are shown with this below */}
                <div className="flex flex-row justify-start w-full gap-2.5">
                  {Object.entries(filters).map(([key, value], index) => (
                    <div
                      className="flex justify-between items-center gap-2 font-semibold min-w-[145px] hover:bg-blue_gray_100_03 cursor-pointer outline outline-1 outline-gray-400 border border-gray-400 rounded-lg pl-2 pr-1"
                      key={index}
                      color="blue_gray_100"
                      size="md"
                      variant="outline"
                    >
                      {`${key}: ${value}`}
                      <Button
                        className="pr-2"
                        onClick={() => removeFilter(key)}
                        variant="outline"
                        rightIcon={<Img src="/images/img_icon_16px_close.svg" alt="icon / 16px / close" />}
                      />
                    </div>
                  ))}

                </div>
                {/* the filters selected are shown with this above */}
              </div>
            </div>
          </div>


          {/* the house cards and the below content of the page */}
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row justify-start items-start w-full gap-6 max-w-[1200px]">
              {/* <GoogleMap showMarker={false} className="h-[511px] w-[32%]" /> */}
              <div className="flex flex-col items-center justify-start w-[90%] gap-[60px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="justify-center w-full gap-6 grid-cols-3 grid min-h-[auto]">
                    <LandingPageCard
                      key={"1258"}
                      image={"images/img_image_260x384.png"}
                      title={"Dummy page, location here"} />
                    {appliedFilters.length === 0 ? (
                      // Render all data when no filters are selected
                      data.map((property) => (
                        <LandingPageCard
                          key={property._id}
                          image={property.images[0]}
                          title={property.location}
                          price={property.price}
                          propertyid={property._id}
                          bedroom={property.roomDetails.numberOfRooms}
                        />
                      ))
                    ) : (
                      // Render filtered data when filters are selected
                      appliedFilters.map((property) => (
                        <LandingPageCard
                          key={property._id}
                          image={property.images[0]}
                          title={property.location}
                          price={property.price}
                          propertyid={property._id}
                          bedroom={property.roomDetails.numberOfRooms}
                        />
                      ))
                    )}

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
        </div>
      </div>
    </>
  );

}
