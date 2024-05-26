import liff from "@line/liff";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import type { MetaFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import { MyPoint } from "./components/MyPoint";
import { PointProgress } from "./components/PointProgress";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export const clientLoader = async () => {
	const profile = await liff.getProfile();
	return json({
		profile,
	});
};

export default function Index() {
	const { profile } = useLoaderData<typeof clientLoader>();

	return (
		<div>
			<Card>
				<CardBody className="px-8 py-6">
					<div className="flex flex-col gap-4">
						<div className="flex justify-center">
							<Image
								width={100}
								height={100}
								alt="NextUI hero Image with delay"
								src="https://app.requestly.io/delay/2000/https://placehold.jp/200x200.png?text=QR%20Code"
							/>
						</div>
						<div className="flex justify-between items-center">
							<PointProgress
								maxPoint={500}
								point={350}
								pictureUrl={profile.pictureUrl}
							/>
							<MyPoint
								maxPoint={500}
								point={350}
								updatedAt={new Date("2024-05-26")}
							/>
						</div>
						<div className="text-center">
							<div className="mb-4 relative text-sm text-primary font-medium inline-block rounded-lg px-2 py-1 border border-primary before:content-[''] before:absolute before:-translate-x-1/2 before:left-1/2 before:top-full before:border-r before:border-primary before:w-2 before:h-3 before:bg-white before:skew-x-[-25deg]">
								今まで通りポイントを貯めるだけでもOK！
							</div>
							<Button
								color="primary"
								fullWidth
								size="lg"
								startContent={<i className="ri-wallet-3-line text-lg" />}
							>
								Remix Pay をはじめる
							</Button>
						</div>
					</div>
				</CardBody>
			</Card>
		</div>
	);
}
