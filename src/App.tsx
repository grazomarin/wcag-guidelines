import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Box
			display="grid"
			gridTemplateRows="min-content 1fr"
		>
			<Navbar />
			<Box>
				<h1
					style={{
						color: "red",
						fontSize: "24px",
					}}
				>
					Color Contrast Checker
				</h1>
			</Box>
		</Box>
	);
}

export default App;
