import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Heading,
	useColorModeValue,
	Text,
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
							This interactive web guide is designed for beginner web developers to help them
							understand the importance of following{" "}
							<Text
								as="span"
								fontWeight="bold"
							>
								WCAG 2.2 (Web Content Accessibility Guidelines)
							</Text>
							. Our goal is to make web development{" "}
							<Text
								as="span"
								fontWeight="bold"
							>
								more inclusive{" "}
							</Text>
							by teaching developers how to create accessible websites that everyone can use! By
							using this tool, you’ll gain confidence in building websites that are{" "}
							<Text
								as="span"
								fontWeight="bold"
							>
								functional, visually appealing, and accessible
							</Text>{" "}
							to all users, regardless of their abilities.
						</AccordionPanel>
					</AccordionItem>
				</Accordion>

				<Features />
			</Box>
		</Box>
	);
}
