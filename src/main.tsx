import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import App from "./App.tsx";

const config: ThemeConfig = {
	initialColorMode: "system",
	useSystemColorMode: false,
};

const theme = extendTheme({ config });

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</StrictMode>
);
