import {
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function BlueSlider({
  defaultValue,
  setSliderValueEnd,
  sliderValue,
  setSliderValue,
}: {
  defaultValue: number;
  setSliderValueEnd: (v: number) => void;
  sliderValue: number;
  setSliderValue: (v: number) => void;
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  useEffect(() => {
    console.log(sliderValue);
  }, [sliderValue]);
  return (
    <Flex flexGrow={8}>
      <Slider
        aria-label="slider-ex-1"
        defaultValue={defaultValue}
        value={sliderValue}
        min={0}
        max={100}
        onChangeEnd={(v) => setSliderValueEnd(v)}
        onChange={(v) => setSliderValue(v)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderTrack bg={useColorModeValue("brand.400", "brand.700")}>
          <SliderFilledTrack bg="brand.action" />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Flex>
  );
}
