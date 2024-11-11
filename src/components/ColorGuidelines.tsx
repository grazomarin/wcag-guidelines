import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import MoreInfo from "./MoreInfo";

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
			<Box
				display="flex"
				alignItems="center"
				gap="0.5rem"
			>
				<Heading size="md">WCAG 2.2 Guidelines</Heading>
			</Box>

			<Grid
				templateColumns="1fr 2fr 1fr min-content"
				templateRows="1fr 1fr 1fr 1fr"
				alignItems="center"
				gap=".5rem"
			>
				{/* ROW 1 */}
				<strong>AA</strong>
				{/* Popover for AAA Guidelines */}
				<Text>Normal Text: </Text>
				<Text
					textAlign="center"
					bgColor={contrast.passes.AA.normal ? "green.200" : "red.200"}
					borderRadius="16px"
				>
					{contrast.passes.AA.normal ? "Pass" : "Fail"}
				</Text>
				<MoreInfo>
					<Text>
						<strong>AA</strong> is the WCAG conformance level which is considered the standard for
						most websites aiming for a medium level of accessibility. The contrast ratio between
						your text and background should be at least
						<strong>4.5:1</strong>. For large-scale text, it should be at least
						<strong>3:1</strong>.
					</Text>
				</MoreInfo>
				{/* ROW 1 END*/}

				{/* ROW 2 */}
				<Text as="strong">AA</Text>
				<Text>Large Text:</Text>
				<Text
					textAlign="center"
					bgColor={contrast.passes.AA.large ? "green.200" : "red.200"}
					borderRadius="16px"
				>
					{contrast.passes.AA.large ? "Pass" : "Fail"}
				</Text>
				<Box />

				{/* ROW 2 END */}

				{/* ROW 3 */}
				<Text as="strong">AAA</Text>
				<Text>Normal Text: </Text>
				<Text
					textAlign="center"
					bgColor={contrast.passes.AAA.normal ? "green.200" : "red.200"}
					borderRadius="16px"
				>
					{contrast.passes.AAA.normal ? "Pass" : "Fail"}
				</Text>
				<MoreInfo>
					<Text>
						Although not required, <strong>AAA</strong> is the WCAG conformance level which
						represents the highest level of accessibility. The contrast ratio between text and
						background should be at least <strong>7:1</strong>. For large-scale text, it should be
						at least <strong>4.5:1</strong>.
					</Text>
				</MoreInfo>
				{/* ROW 3 END*/}

				{/* ROW 4 */}
				<Text as="strong">AAA</Text>
				<Text>Large Text:</Text>
				<Text
					textAlign="center"
					bgColor={contrast.passes.AAA.large ? "green.200" : "red.200"}
					borderRadius="16px"
				>
					{contrast.passes.AAA.large ? "Pass" : "Fail"}
				</Text>
				{/* ROW 4 END*/}
				<Box />
			</Grid>
		</Box>
	);
}
