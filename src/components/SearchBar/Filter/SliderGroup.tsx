import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BlueSlider from "./BlueSlider";
import ResetButton from "./ResetButton";

const defaultValue = 0.0003;

export default function SliderGroup({
  isFetching,
  getPostsFromSlider,
}: {
  isFetching: boolean;
  getPostsFromSlider: (accuracy: number) => void;
}) {

  const [sliderValue, setSliderValue] = useState(defaultValue);
  const [sliderValueEnd, setSliderValueEnd] = useState(defaultValue);

  useEffect(() => {
    getPostsFromSlider(sliderValueEnd);
    }, [sliderValueEnd]);
    
  const resetSlider = () => {
    setSliderValue(defaultValue);
  };

  return (
    <Flex w="100%" alignContent="center" justifyContent="space-around" px=".75rem">
      <BlueSlider
        defaultValue={defaultValue}
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
        setSliderValueEnd={setSliderValueEnd}
      />
      <ResetButton isFetching={isFetching} resetSlider={resetSlider} />
    </Flex>
  );
}
