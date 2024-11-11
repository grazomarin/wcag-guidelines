import { Flex, Grid, Heading, Textarea } from "@chakra-ui/react";
import MoreInfo from "./MoreInfo";
import { useState } from "react";

export default function AccessibilityImageChecker() {
	const [HTML, setHTML] = useState("");
	const [isValidHTML, setIsValidHTML] = useState(false);

	function checkHTML(html: string) {
		if (!html.trim()) {
			setIsValidHTML(false);
			return false;
		}

		try {
			const parser = new DOMParser();
			const doc = parser.parseFromString(html, "text/html");

			// Check for parsing errors
			const parserError = doc.getElementsByTagName("parsererror").length > 0;

			// Check for well-formed HTML structure
			const isWellFormed = (html: string) => {
				// Create a temporary div to test HTML structure
				const tempDiv = document.createElement("div");
				// Using innerHTML to parse the HTML
				const originalHTML = html.trim();
				tempDiv.innerHTML = originalHTML;
				// Compare parsed HTML with original
				// Normalized to account for browser auto-corrections
				const normalizedOriginal = originalHTML
					.replace(/[\s\n\r]+/g, " ")
					.trim()
					.toLowerCase();
				const normalizedParsed = tempDiv.innerHTML
					.replace(/[\s\n\r]+/g, " ")
					.trim()
					.toLowerCase();

				// Some basic validation rules
				const hasMatchingTags =
					(normalizedOriginal.match(/<[^>]*>/g) || []).length ===
					(normalizedParsed.match(/<[^>]*>/g) || []).length;

				const hasMisplacedClosingTags = /<\/[^>]*>[^<]*<[^/>][^>]*>/g.test(normalizedOriginal);

				return hasMatchingTags && !hasMisplacedClosingTags;
			};

			// Additional checks for common HTML issues
			const hasUnclosedTags = /<[^/>][^>]*>[^<]*$/.test(html); // Check for unclosed tags
			const hasInvalidNesting = /<(\w+)[^>]*><\/(?!\1)>/g.test(html); // Check for invalid nesting

			const isValid = !parserError && isWellFormed(html) && !hasUnclosedTags && !hasInvalidNesting;

			setIsValidHTML(isValid);
			return isValid;
		} catch (e) {
			console.error("HTML validation error:", e);
			setIsValidHTML(false);
			return false;
		}
	}

	return (
		<Grid
			px="1rem"
			width="100%"
			templateColumns="1fr 1fr"
			gap="6rem"
			height="500px"
		>
			<Flex
				flexFlow="column"
				gap="1rem"
			>
				<Flex
					gap="1rem"
					alignItems="center"
				>
					<Heading size="sm">Enter Your HTML:</Heading>
					<MoreInfo>
						<p>Enter your HTML code here to check for accessibility issues.</p>
					</MoreInfo>
				</Flex>

				<Textarea
					placeholder="Enter here..."
					value={HTML}
					isInvalid={!isValidHTML}
					onChange={(e) => {
						setHTML(e.currentTarget.value);
						checkHTML(e.currentTarget.value);
					}}
					size="md"
					resize="none"
					height="100%"
					fontFamily="monospace"
				/>
			</Flex>

			<Flex
				flexFlow="column"
				gap="1rem"
			>
				<Heading size="sm">Output:</Heading>

				<Textarea
					placeholder="Output Will Be Here!"
					isReadOnly
					value={isValidHTML ? "HTML is valid!" : "HTML is invalid!"}
					size="md"
					fontFamily="monospace"
					height="100%"
				/>
			</Flex>
		</Grid>
	);
}
