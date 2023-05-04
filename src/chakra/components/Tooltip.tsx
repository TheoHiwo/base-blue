import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

// define the base component styles
const baseStyle = {
  borderRadius: 'md', // add a border radius
  fontWeight: 'normal', // change the font weight
  border: '1px solid', // add a border
  bg: 'pink.300', // change the background color
}

// export the component theme
export const tooltipTheme = defineStyleConfig({ baseStyle })