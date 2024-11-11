import { Box, Grid, Heading, Text } from "@chakra-ui/react";

export default function ColorGuidelines({
	contrast,
}: {
	contrast: {
		ratio: number;
		passes: {
			AA: {
				normal: boolean;
				large: boolean;
			};
			AAA: {
				normal: boolean;
				large: boolean;
			};
		};
	};
}) {
	return (
		<Box
			display="flex"
			gap="1rem"
			flexFlow="column"
		>
			<Heading size="md">WCAG 2.2 Guidelines</Heading>
			<Grid
				templateColumns="1fr 2fr 1fr"
				templateRows="1fr 1fr 1fr 1fr"
				gap=".5rem"
			>
				<Text as="strong">AA</Text>
				<Text>Normal Text: </Text>
				<Text
					textAlign="center"
					bgColor={contrast.passes.AA.normal ? "green.200" : "red.200"}
					borderRadius="16px"
				>
					{contrast.passes.AA.normal ? "Pass" : "Fail"}
				</Text>

				<Text as="strong">AA</Text>
				<Text>Large Text:</Text>
				<Text
					textAlign="center"
					bgColor={contrast.passes.AA.large ? "green.200" : "red.200"}
					borderRadius="16px"
				>
					{contrast.passes.AA.large ? "Pass" : "Fail"}
				</Text>

				<Text as="strong">AAA</Text>
				<Text>Normal Text: </Text>
				<Text
					textAlign="center"
					bgColor={contrast.passes.AAA.normal ? "green.200" : "red.200"}
					borderRadius="16px"
				>
					{contrast.passes.AAA.normal ? "Pass" : "Fail"}
				</Text>

				<Text as="strong">AAA</Text>
				<Text>Large Text:</Text>
				<Text
					textAlign="center"
					bgColor={contrast.passes.AAA.large ? "green.200" : "red.200"}
					borderRadius="16px"
				>
					{contrast.passes.AAA.large ? "Pass" : "Fail"}
				</Text>
			</Grid>
		</Box>
	);
}
