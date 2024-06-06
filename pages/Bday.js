import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";
import Layout2 from "@/components/Layout2";
import Loading from "@/components/Loading";

export default function Bday() {
  const [search, setSearch] = useState("");
  const [isLoading, setLoading] = useState(true);

  let [Name, setName] = useState("");
  let [fav, setFav] = useState("");
  let [Favourites, setFavourites] = useState(false);

  let [data, setData] = useState();
  let [date, setDate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const month = (date.getMonth() + 1).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        });
        const day = date.getDate().toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        });

        const response = await axios.get(
          `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`
        );
        setData(response.data);

        const favResponse = await axios.get("/api/favbday");
        setFav(favResponse.data);

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [date]);

  const handleClick = async (ev, birth) => {
    ev.preventDefault();
    const isAlreadyFav = fav.some(
      (f) => f.Name.toLowerCase() === birth.text.toLowerCase()
    );
    if (isAlreadyFav) {
      const existingFav = fav.find(
        (f) => f.Name.toLowerCase() === birth.text.toLowerCase()
      );
      if (existingFav) {
        try {
          await axios.delete(`/api/favbday?id=${existingFav._id}`);
          setFav(fav.filter((f) => f._id !== existingFav._id));
        } catch (error) {
          console.error(error);
        }
      }
    } else {
      try {
        const newFav = {
          Name: birth.text,
          Favourites: true,
          date: date.toISOString(),
        };
        const response = await axios.post("/api/favbday", newFav);
        setFav([...fav, response.data]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="w-auto h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  return (
    <>
      <Layout2>
        <div className="bg-black p-1 text-black rounded-top">
          <div className="grid gridd h-100">
            <div className="flex flex-col gap-2">
              <aside className="bg-white rounded-lg p-3 ml-2 md:ml-1 mt-1 mr-2 mb-1 h-80">
                <div>
                  <h6 className="uppercase shdg">Calendar</h6>
                </div>
                <hr />
                <div className="bg-white p-3 rounded-lg flex flex-col items-center justify-center">
                  <div className="mt-3 ">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        defaultValue={date}
                        onChange={(e) => setDate(e)}
                        label="PICK A DATE"
                      />
                    </LocalizationProvider>
                  </div>
                </div>
                <div className="mt-3">
                  <h6 className="uppercase shdg">search</h6>
                </div>
                <hr />
                <div>
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-white text-black rounded-md border border-black p-2 w-full"
                    type="text"
                    placeholder="Enter name"
                  />
                </div>
              </aside>

              <aside className="bg-white rounded-lg p-3 ml-2 md:ml-1 mt-1 mr-2 mb-1 h-80 scrollbar">
                <div>
                  <h6 className="uppercase shdg">Favourites</h6>
                </div>
                <hr />
                <div className="p-3 bg-white ml-2 md:ml-1 mt-1 mr-2 mb-1 rounded-md flex flex-col gap-3 w-full">
                  {Array.isArray(fav) &&
                    fav
                      .filter(
                        (f) =>
                          f.date.split("T")[0] ==
                          date.toISOString().split("T")[0]
                      )
                      .map((f, j) => (
                        <div className="bg-yellow-100 p-2 rounded-lg" key={j}>
                          <i>{f.Name}</i>
                        </div>
                      ))}
                </div>
              </aside>
            </div>
            <div className="h-screen p-3 bg-white ml-2 md:ml-1 mt-1 mr-2 mb-1 rounded-md scrollbar">
              <div>
                <h6 className="uppercase shdg">Birthdays</h6>
              </div>
              <hr />
              <div className="rounded-lg flex flex-col gap-3">
                {data && data?.births ? (
                  data.births
                    .filter((items) => {
                      return search.toLocaleLowerCase() === ""
                        ? items
                        : items.text.toLocaleLowerCase().includes(search);
                    })
                    .map((birth, i) => (
                      <form onSubmit={(ev) => handleClick(ev, birth)} key={i}>
                        <div className="bg-purple-200 p-2 rounded-lg grid gap-2 items-center">
                          <div className="flex items-center gap-2 p-2">
                            <button type="submit">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill={
                                  Array.isArray(fav) &&
                                  fav.some(
                                    (f) =>
                                      f.Name.toLowerCase() ===
                                      birth.text.toLowerCase()
                                  )
                                    ? "purple"
                                    : "none"
                                }
                                stroke={
                                  Array.isArray(fav) &&
                                  fav.some(
                                    (f) =>
                                      f.Name.toLowerCase() ===
                                      birth.text.toLowerCase()
                                  )
                                    ? ""
                                    : "purple"
                                }
                                strokeWidth="1.5"
                                class="w-8 h-8"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </button>
                            <span>
                              <h6 className="shdg">{birth?.text}</h6>
                            </span>
                          </div>
                          <div className="bg-purple-100 p-2 text-purple-800 rounded-lg p-3">
                            {birth.pages.map((page, j) => (
                              <div key={j} className="flex flex-col gap-3">
                                <div>
                                  <i>{page?.description}</i>
                                </div>
                                <div>
                                  <i>{page?.extract}</i>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </form>
                    ))
                ) : (
                  <div>{Loadingg()}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout2>
    </>
  );
}
