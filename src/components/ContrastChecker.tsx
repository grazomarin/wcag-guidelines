import {
	Box,
	Heading,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	Portal,
	Text,
} from "@chakra-ui/react";
import { useState } from "react";
import InputColorPicker from "./InputColorPicker";
import ColorGuidelines from "./ColorGuidelines";
import { QuestionIcon } from "@chakra-ui/icons";

// Function to calculate relative luminance
const getLuminance = (hex: string) => {
	// Remove # if present
	hex = hex.replace("#", "");

	// Convert hex to RGB
	const r = parseInt(hex.substr(0, 2), 16) / 255;
	const g = parseInt(hex.substr(2, 2), 16) / 255;
	const b = parseInt(hex.substr(4, 2), 16) / 255;

	// Convert RGB to linear values
	const toLinear = (color: number) => {
		return color <= 0.03928 ? color / 12.92 : Math.pow((color + 0.055) / 1.055, 2.4);
	};

	const rLinear = toLinear(r);
	const gLinear = toLinear(g);
	const bLinear = toLinear(b);

	// Calculate luminance
	return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
};

// Function to calculate contrast ratio
const getContrastRatio = (color1: string, color2: string) => {
	// Get luminance values
	const luminance1 = getLuminance(color1);
	const luminance2 = getLuminance(color2);

	// Calculate contrast ratio
	const lighter = Math.max(luminance1, luminance2);
	const darker = Math.min(luminance1, luminance2);

	const contrastRatio = (lighter + 0.05) / (darker + 0.05);

	return {
		ratio: Number(contrastRatio.toFixed(2)),
		// WCAG 2.2 Guidelines
		passes: {
			AA: {
				normal: contrastRatio >= 4.5,
				large: contrastRatio >= 3,
			},
			AAA: {
				normal: contrastRatio >= 7,
				large: contrastRatio >= 4.5,
			},
		},
	};
};

export default function ContrastChecker() {
	const [textColor, setTextColor] = useState("#ffffff");
	const [bgColor, setBgColor] = useState("#000000");
	const contrastObject = getContrastRatio(textColor, bgColor);

	return (
		<Box
			display="flex"
			gap="3rem"
		>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="center"
				width="300px"
				height="300px"
				bgColor={bgColor}
				borderRadius="16px"
			>
				<Heading color={textColor}>Hello World!</Heading>
			</Box>

			<Box
				display="flex"
				flexFlow="column"
				gap="1.5rem"
			>
				<InputColorPicker
					label="Text Color"
					color={textColor}
					setColor={setTextColor}
				/>
				<InputColorPicker
					label="Background Color"
					color={bgColor}
					setColor={setBgColor}
				/>

				<Box>
					<Box
						display="flex"
						alignItems="center"
						gap="1rem"
					>
						<Heading size="sm">Contrast Ratio</Heading>

						<Popover>
							<PopoverTrigger>
								<QuestionIcon
									_hover={{
										cursor: "pointer",
									}}
								/>
							</PopoverTrigger>
							<Portal>
								<PopoverContent>
									<PopoverBody>
										<PopoverArrow />
										<Text>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
											distinctio ut iusto assumenda sit nemo ipsam voluptates? Ullam laudantium
											error vel a, expedita, ex exercitationem veritatis necessitatibus fugiat nulla
											iste?
										</Text>
									</PopoverBody>
								</PopoverContent>
							</Portal>
						</Popover>
					</Box>
					<Text size="sm">{contrastObject.ratio}:1</Text>
				</Box>
			</Box>

			<ColorGuidelines contrast={contrastObject} />
		</Box>
	);
}
