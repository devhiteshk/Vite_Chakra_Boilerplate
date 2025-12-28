import React from "react";
import { Provider } from "./components/ui/provider";
import { Box, Button, Text, Stack } from "@chakra-ui/react";
import { ColorModeButton } from "./components/ui/color-mode";

const App: React.FC = () => {
  return (
    <Provider>
      <Box p={6}>
        <Stack direction="row" align="center" justify="space-between" mb={6}>
          <Text _dark={{color:"#fff"}} textStyle="heading">Demo — Theme (purple) & Dark Mode</Text>
          <ColorModeButton />
        </Stack>

        <Box layerStyle="container">
          <Text _dark={{color:"#fff"}} textStyle="body" mb={4}>
            This is a container using the system layerStyle and textStyle. The
            accent color is semantic token `accent` and primary purple is
            configured as your brand color.
          </Text>

          <Button colorPalette={"purple"} px={2}>Primary action</Button>
        </Box>
      </Box>
    </Provider>
  );
};

export default App;