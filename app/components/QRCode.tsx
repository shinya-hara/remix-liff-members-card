import { QRCodeCanvas } from "qrcode.react";

type Props = {
	value: string;
	size?: number;
};

export const QRCode = (props: Props) => {
	const { value, size = 100 } = props;

	return (
		<QRCodeCanvas
			value={value}
			size={size}
			imageSettings={{
				src: "/logo.jpg",
				height: 20,
				width: 20,
				excavate: true,
			}}
		/>
	);
};
