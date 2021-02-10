import { useEffect, useState } from "react";

// In the future if the data is called from an Api the logic here could be changed.

const useGetData = (filename) => {
  const [data, setData] = useState([]);

  const loadJson = async () => {
    const dataFromJsonFile = await import(`../data/${filename}.json`);
    const parseData = Object.values(dataFromJsonFile.default);

    // Validation of data
    const isArray = (elem) => elem instanceof Array;
    const isNumber = (elem) => typeof elem === "number"

    if (!parseData) throw new Error("Can not convert imported Json File to Array");
    if (parseData instanceof Array === false) throw new Error("Data is not an array. Data format wrong");
    if (parseData.length < 1) throw new Error("Not enough data provided");
    if (!parseData.every(isArray)) throw new Error("2D array is required. Data format wrong");

    for (const elem of parseData) {
      if(!elem.every(isNumber)) throw new Error("All the values of 2D arrays should be type numbers ")
    }

    setData(parseData);
  };

  useEffect(() => {
    loadJson();
  }, []);

  return [data, setData];
};

export default useGetData;
