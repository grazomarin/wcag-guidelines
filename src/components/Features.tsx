import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import ContrastChecker from "./ContrastChecker";
import AccessibilityImageChecker from "./AccessibilityImageChecker";

export default function Features() {
	return (
		<Tabs
			variant="soft-rounded"
			isFitted
			colorScheme="blue"
		>
			<TabList>
				<Tab>Contrast Checker</Tab>
				<Tab>HTML Checker</Tab>
			</TabList>

			<TabPanels>
				<TabPanel px={0}>
					<ContrastChecker />
				</TabPanel>
				<TabPanel>
					<AccessibilityImageChecker />
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
}
