type Props = {
	maxPoint: number;
	point: number;
	updatedAt: Date;
};

export const MyPoint = (props: Props) => {
	const { maxPoint, point, updatedAt } = props;
	const updatedDate = updatedAt.toLocaleDateString().slice(5);

	return (
		<div className="relative inline-block pt-0.5">
			<div className="flex justify-end items-end gap-3 text-primary font-bold text-lg">
				<span className="text-4xl">{point}</span>
				<span>/</span>
				<span>{maxPoint}P</span>
			</div>
			<p className="absolute top-0 right-0 text-default-400 text-xs">
				{updatedDate}更新
			</p>
		</div>
	);
};
