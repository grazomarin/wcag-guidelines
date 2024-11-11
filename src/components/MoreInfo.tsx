import { QuestionIcon } from "@chakra-ui/icons";
import {
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	Portal,
} from "@chakra-ui/react";

export default function MoreInfo({ children }: { children: React.ReactNode }) {
	return (
		<Popover trigger="hover">
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
						{children}
					</PopoverBody>
				</PopoverContent>
			</Portal>
		</Popover>
	);
}
