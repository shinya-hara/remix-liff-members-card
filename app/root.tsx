import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	json,
	useLoaderData,
} from "@remix-run/react";

export const loader = async () => {
	return json({
		ENV: {
			LIFF_ID: process.env.LIFF_ID,
		},
	});
};

export function Layout({ children }: { children: React.ReactNode }) {
	const data = useLoaderData<typeof loader>();

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<script
					// biome-ignore lint/security/noDangerouslySetInnerHtml: passing env var
					dangerouslySetInnerHTML={{
						__html: `window.ENV = ${JSON.stringify(data.ENV)};`,
					}}
				/>
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
