import { Box, Grid, Heading, Text, Popover, PopoverTrigger, PopoverArrow, PopoverBody, PopoverContent, Portal } from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";

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
            <Box display="flex" alignItems="center" gap="0.5rem">
                <Heading size="md">WCAG 2.2 Guidelines</Heading>

                <Popover>
                    <PopoverTrigger>
                        <QuestionIcon _hover={{ cursor: "pointer" }} />
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverBody>
                                <Text>
                                    <Text as="strong">AA</Text> is the WCAG conformance level which is considered the 
                                    standard for most websites aiming for a medium level of accessibility. 
                                    The contrast ratio between your text and background should be at least 
                                    <Text as="strong"> 4.5:1</Text>. For large-scale text, it should be at least <Text as="strong">3:1</Text>.
                                </Text>
                            </PopoverBody>
                        </PopoverContent>
                    </Portal>
                </Popover>

                {/* Popover for AAA Guidelines */}
                <Popover>
                    <PopoverTrigger>
                        <QuestionIcon _hover={{ cursor: "pointer" }} />
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverBody>
                                <Text>
                                    Although not required, <Text as="strong">AAA</Text> is the WCAG conformance 
                                    level which represents the highest level of accessibility. The contrast ratio between text 
                                    and background should be at least <Text as="strong">7:1</Text>. For large-scale text, 
                                    it should be at least <Text as="strong">4.5:1</Text>.
                                </Text>
                            </PopoverBody>
                        </PopoverContent>
                    </Portal>
                </Popover>
            </Box>

            <Grid templateColumns="1fr 2fr 1fr" templateRows="1fr 1fr 1fr 1fr" gap=".5rem">
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
