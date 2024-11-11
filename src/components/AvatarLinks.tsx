import React from "react";
import { Wrap, WrapItem, Avatar, Tooltip } from "@chakra-ui/react";

const AvatarLinks = () => {
	return (
		<Wrap justify="start">
			<WrapItem>
				<Tooltip
					label="Iris Cheung"
					aria-label="Iris Cheung"
				>
					<a
						href="https://devpost.com/missirischeung"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Avatar
							size="sm"
							name="Iris Cheung"
							src="https://avatars.githubusercontent.com/u/171763832?height=180&v=4&width=180"
						/>
					</a>
				</Tooltip>
			</WrapItem>
			<WrapItem>
				<Tooltip
					label="Justin Galimpin"
					aria-label="Justin Galimpin"
				>
					<a
						href="https://devpost.com/justingalimpin"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Avatar
							size="sm"
							name="Justin Galimpin"
							src="https://lh3.googleusercontent.com/a/ACg8ocJ7N0NmVELvNzLVX5bvDRv_-sX2jj_e06srqn_y06YO-gkITw=s96-c?height=180&width=180"
						/>
					</a>
				</Tooltip>
			</WrapItem>
			<WrapItem>
				<Tooltip
					label="Jacky Liang"
					aria-label="Jacky Liang"
				>
					<a
						href="https://devpost.com/jackyliang1128"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Avatar
							size="sm"
							name="Jacky Liang"
							src="https://avatars.githubusercontent.com/u/55817542?height=180&v=4&width=180"
						/>
					</a>
				</Tooltip>
			</WrapItem>
			<WrapItem>
				<Tooltip
					label="Kamran Grazomarin"
					aria-label="Kamran Grazomarin"
				>
					<a
						href="https://devpost.com/grazomarin"
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						<Avatar
							size="sm"
							name="Grazomarin"
							src="https://avatars.githubusercontent.com/u/101132782?height=180&v=4&width=180"
						/>
					</a>
				</Tooltip>
			</WrapItem>
		</Wrap>
	);
};

export default AvatarLinks;
