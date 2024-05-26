import {
	Button,
	Image,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	NextUIProvider,
} from "@nextui-org/react";
import type { LinksFunction } from "@remix-run/node";
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	json,
	useLoaderData,
	useNavigate,
} from "@remix-run/react";
import { useState } from "react";
import remixicon from "remixicon/fonts/remixicon.css?url";
import tailwindcss from "~/tailwind.css?url";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: tailwindcss },
	{ rel: "stylesheet", href: remixicon },
];

export const loader = async () => {
	return json({
		ENV: {
			LIFF_ID: process.env.LIFF_ID,
		},
	});
};

export function Layout({ children }: { children: React.ReactNode }) {
	const data = useLoaderData<typeof loader>();
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = [
		"キャンペーン応募",
		"電子レシート",
		"商品お気に入り一覧",
		"関連サービス",
		"アプリ設定",
		"会員情報変更",
		"メールアドレス変更",
		"パスワード変更",
		"使い方説明",
		"よくあるご質問・お問い合わせ",
		"パート・アルバイト採用募集",
		"ログアウト",
	];

	return (
		<html lang="ja">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="bg-stone-100">
				<NextUIProvider navigate={navigate}>
					<Navbar isBordered>
						<NavbarMenuToggle
							aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						/>
						<NavbarBrand>
							<Image src="/logo.jpg" alt="Remix" width={32} height={32} />
							<p className="font-bold text-inherit ml-1">Remix members</p>
						</NavbarBrand>
						<NavbarContent justify="end">
							<NavbarItem>
								<Button variant="light" isIconOnly>
									<i className="ri-refresh-line text-lg" />
								</Button>
							</NavbarItem>
							<NavbarItem>
								<Button variant="light" isIconOnly>
									<i className="ri-notification-line text-lg" />
								</Button>
							</NavbarItem>
						</NavbarContent>
						<NavbarMenu>
							{menuItems.map((item, index) => (
								<NavbarMenuItem
									key={`${item}-${
										// biome-ignore lint/suspicious/noArrayIndexKey: index is unique
										index
									}`}
								>
									<Link
										color={
											index === menuItems.length - 1 ? "danger" : "foreground"
										}
										className="w-full"
										href="#"
										size="lg"
									>
										{item}
									</Link>
								</NavbarMenuItem>
							))}
						</NavbarMenu>
					</Navbar>
					{children}
					<ScrollRestoration />
					<script
						// biome-ignore lint/security/noDangerouslySetInnerHtml: passing env var
						dangerouslySetInnerHTML={{
							__html: `window.ENV = ${JSON.stringify(data.ENV)};`,
						}}
					/>
					<Scripts />
				</NextUIProvider>
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
