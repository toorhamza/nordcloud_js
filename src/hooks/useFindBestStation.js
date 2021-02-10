
const useFindBestStation = () => {

/**
 * @description The first step is to find device distance from link station using coordinates.
 * We can do this using pythagorean theorem. I followed the fomula step by step to make it easy to understand.
 * @param userCoordinates The [x,y] number coordinates of user in array format
 * @param linkStationCoordinates [x,y] number coordinates of the linkstation array format.
 * @returns Number which is the device's distance from link station.
 */
const findUserDistanceFromLinkStation = (
  userCoordinates,
  linkStationCoordinates
) => {
  const a = Math.abs(userCoordinates[0] - linkStationCoordinates[0]);
  const b = Math.abs(userCoordinates[1] - linkStationCoordinates[1]);

  const aSquare = Math.pow(a, 2);
  const bSquare = Math.pow(b, 2);

  return Math.sqrt(aSquare + bSquare);
};

/**
 * @description The second step for the program is to find the power with the given formula.
 * The formula is power = (reach - device's distance from linkstation)^2
 * If deviceDistance is greater than reach then the Power is 0.
 * @param reach The reach of the link station. Paramter type is number. It is third value of link station array in our data set.
 * @param deviceDistance the distance calculate findUserDistanceFromLinkStation in first step. Parameter type in number.
 * @returns Number which is the power for the link station and the user device.
 */

const findPower = (reach, deviceDistance) => {
  if (deviceDistance > reach) {
    return 0;
  }
  const distanceDifference = reach - deviceDistance;

  return Math.pow(distanceDifference, 2);
};

/**
 * @description The final step is to find the best link station with highest power
 * @param userCoordinates The [x,y] number coordinates of user in array format
 * @param allLinkStations [x,y] coordinates of all linkstations in 2D array format.
 * @returns String telling the best linkStation coordinates with power
 */

const findLinkStationWithMaxPower = (userCoordinates, allLinkStations) => {
  const powerForAllLinkStations = [];

  for (const linkStation of allLinkStations) {
    const distance = findUserDistanceFromLinkStation(userCoordinates, linkStation);
    const power = findPower(linkStation[2], distance);
    powerForAllLinkStations.push(power);
  }

  const maxPower = Math.max(...powerForAllLinkStations);
  if (maxPower === 0) return `No link stations within reach for user point [${userCoordinates[0]}, ${userCoordinates[1]}]`;
  const indexNumber = powerForAllLinkStations.findIndex((number) => number === maxPower);
  const maxPowerLinkStation = allLinkStations[indexNumber];

  return `Best link station for user point [${userCoordinates[0]}, ${userCoordinates[1]}] is [${maxPowerLinkStation[0]}, ${maxPowerLinkStation[1]}] with power ${maxPower.toFixed(4)}`
};

  return [findLinkStationWithMaxPower];
};

export default useFindBestStation;
