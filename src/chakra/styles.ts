
const styles =  {
    global: (props: any) => ({
      html: {
        overflowY: "scroll",
        overflowX: "hidden"
      },
      body: {
        fontSize: "xl",
        height: '100%',
        color: props.colorMode === "dark" ? "brand.100" : "brand.900",
        lineHeight: "tall",
        // transition: 'all 500ms ease-in-out',
        bg: props.colorMode === "dark" ? "brand.950" : "brand.50",
      },
    }),
  }

export default styles