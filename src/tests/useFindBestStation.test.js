import useFindBestStation from "../hooks/useFindBestStation";

test("distanceFromGivenDevice", () => {
  const [findLinkStationWithMaxPower] = useFindBestStation();
  const stations = [
    [0, 0, 10],
    [20, 20, 5],
    [10, 0, 12],
  ];

  const userPoint = [18, 18];

  expect(findLinkStationWithMaxPower(userPoint, stations)).toBe(
    "Best link station for user point [18, 18] is [20, 20] with power 4.7157"
  );
});
