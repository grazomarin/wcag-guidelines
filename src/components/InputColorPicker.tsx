import {
	Box,
	Button,
	Heading,
	Input,
	InputGroup,
	InputLeftAddon,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	Portal,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import ColorPicker from "react-pick-color";

export default function InputColorPicker({
	label,
	color,
	setColor,
}: {
	label: string;
	color: string;
	setColor: (value: string) => void;
}) {
	const { colorMode } = useColorMode();
	const borderColor = useColorModeValue("var(--chakra-colors-gray-200)", "none");

	return (
		<Box
			display="grid"
			gap=".5rem"
		>
			<Heading size="sm">{label}</Heading>
			<InputGroup
				size="sm"
				gap="10px"
			>
				<InputLeftAddon borderRadius="16px">#</InputLeftAddon>
				<Input
					placeholder="000000"
					variant="filled"
					value={color.replace("#", "")}
					onInput={(e) => setColor(`#${e.currentTarget.value}`)}
					sx={{
						borderRadius: "16px",
					}}
				/>
				<Popover>
					<PopoverTrigger>
						<Button
							as="div"
							bgColor={color}
							size="sm"
							border="2px"
							borderColor={borderColor}
							borderRadius="16px"
							_hover={{
								cursor: "pointer",
							}}
						/>
					</PopoverTrigger>
					<Portal>
						<PopoverContent>
							<PopoverBody>
								<PopoverArrow />
								<ColorPicker
									color={color}
									onChange={(color) => setColor(color.hex)}
									hideInputs
									theme={{
										background: colorMode,
										borderColor: borderColor,
										boxShadow: "0",
									}}
								/>
							</PopoverBody>
						</PopoverContent>
					</Portal>
				</Popover>
			</InputGroup>
		</Box>
	);
}
