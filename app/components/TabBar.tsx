import { Button, Link } from "@nextui-org/react";

const Item = (props: { href: string; label: string; icon: string }) => {
	const { href, label, icon } = props;

	return (
		<li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
			<Button
				as={Link}
				href={href}
				variant="light"
				size="lg"
				isIconOnly
				className="w-14 h-14 rounded-full"
			>
				<div className="flex flex-col justify-center items-center text-default-400">
					<i className={`ri-${icon} text-2xl`} />
					<span className="text-[8px] leading-none">{label}</span>
				</div>
			</Button>
		</li>
	);
};

export const TabBar = () => {
	return (
		<nav className="flex z-40 w-full h-auto items-center justify-center fixed bottom-0 inset-x-0 border-t border-divider backdrop-blur-lg backdrop-saturate-150 bg-background/70">
			<footer className="w-full h-[var(--tab-bar-height)]">
				<ul className="flex gap-4 h-full flex-nowrap justify-around items-center">
					<Item href="/" icon="coupon-3-line" label="クーポン" />
					<Item href="/" icon="newspaper-line" label="チラシ" />
					<li className="text-medium whitespace-nowrap box-border list-none -translate-y-2.5">
						<Button
							as={Link}
							href="/"
							variant="light"
							size="lg"
							isIconOnly
							className="w-14 h-14 rounded-full bg-primary"
						>
							<div className="flex flex-col justify-center items-center text-white">
								<i className="ri-home-3-fill text-2xl" />
								<span className="text-[8px] leading-none">ホーム</span>
							</div>
						</Button>
					</li>
					<Item href="/" icon="store-2-line" label="店舗情報" />
					<Item href="/" icon="rfid-line" label="Remix CH" />
				</ul>
			</footer>
		</nav>
	);
};
