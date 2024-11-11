import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Heading,
	useColorModeValue,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Features from "./components/Features";

export default function App() {
	const textColor = useColorModeValue("gray.800", "white");

	return (
		<Box color={textColor}>
			<Navbar />
			<Box
				display="grid"
				gridAutoFlow="row"
				gap="1rem"
				p="1rem"
			>
				<Accordion
					allowToggle
					borderColor="transparent"
				>
					<AccordionItem>
						<h2>
							<AccordionButton
								_hover={{
									bg: "blue.100",
								}}
								borderRadius="1rem"
							>
								<Box
									flex="1"
									textAlign="left"
								>
									<Heading size="sm">About WCAG</Heading>
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet culpa deserunt ipsam
							eaque fugiat eligendi, quidem quas ab sapiente doloribus, perspiciatis eveniet saepe
							sequi reiciendis assumenda ipsum, hic sed! Asperiores.
						</AccordionPanel>
					</AccordionItem>
				</Accordion>

				<Features />
			</Box>
		</Box>
	);
}
