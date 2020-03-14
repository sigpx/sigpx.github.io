import { Box, Flex, Heading, Image } from "theme-ui";

export default _props => (
  <Box p={1}>
    <Flex
      sx={{
        alignItems: "center"
      }}
    >
      <Image src="https://sigpx.org/sigpx-315x315.png" variant="avatar" m={2} />
      <Heading m={2}>SIGPX</Heading>
      <Image
        src="https://sigpx.org/sigpx-315x315.png"
        variant="avatar"
        m={2}
        ml="auto"
      />
    </Flex>
  </Box>
);
