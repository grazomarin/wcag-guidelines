import { Box, Heading, useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const bgColor = useColorModeValue("white", "gray.800");
	const borderColor = useColorModeValue("gray.200", "gray.600");

	return (
		<Box
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			py=".5rem"
			px="1rem"
			as="nav"
			bg={bgColor}
			borderBottom="1px"
			borderColor={borderColor}
			position="sticky"
			width="100%"
			top="0px"
			zIndex="1000"
		>
			<Heading fontSize="1.5rem">Accessibility Guidelines Simplified</Heading>
			<IconButton
				aria-label="toggle color mode"
				icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
				onClick={toggleColorMode}
				variant="ghost"
			/>
		</Box>
	);
};

export default Navbar;
