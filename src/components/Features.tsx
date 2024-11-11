import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import ContrastChecker from "./ContrastChecker";

export default function Features() {
	return (
		<Tabs
			variant="soft-rounded"
			isFitted
			colorScheme="blue"
		>
			<TabList>
				<Tab>Contrast Checker</Tab>
				<Tab>Two</Tab>
				<Tab>Three</Tab>
			</TabList>

			<TabPanels>
				<TabPanel px={0}>
					<ContrastChecker />
				</TabPanel>
				<TabPanel px={0}>
					<p>two!</p>
				</TabPanel>
				<TabPanel px={0}>
					<p>three!</p>
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
}
