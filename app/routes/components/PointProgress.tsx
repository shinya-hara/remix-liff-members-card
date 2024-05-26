import { CircularProgress, Image } from "@nextui-org/react";

type Props = {
	maxPoint: number;
	point: number;
	pictureUrl?: string;
};

export const PointProgress = (props: Props) => {
	const { maxPoint, point, pictureUrl = "/logo.jpg" } = props;

	return (
		<div className="relative">
			<Image
				src={pictureUrl}
				alt=""
				width={52}
				height={52}
				className="absolute top-3.5 left-3.5 rounded-full"
			/>
			<CircularProgress
				maxValue={maxPoint}
				value={point}
				color="primary"
				classNames={{
					svg: "h-20 w-20",
				}}
				aria-label="ポイント進捗"
			/>
		</div>
	);
};
