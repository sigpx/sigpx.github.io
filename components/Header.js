import { Box, Flex, Heading, Image } from "theme-ui";

export default _props => (
  <Box p={1}>
    <Flex
      sx={{
        alignItems: "center"
      }}
    >
      <Image src="https://sigpx.org/sigpx-315x315.png" variant="avatar" />
      <Heading>SIGPX</Heading>
      <Image
        src="https://sigpx.org/sigpx-315x315.png"
        variant="avatar"
        ml="auto"
      />
    </Flex>
  </Box>
);
