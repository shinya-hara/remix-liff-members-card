import liff from "@line/liff";
import type { MetaFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";

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
			<h1>LINE Profile</h1>
			<pre style={{ wordBreak: "break-all", whiteSpace: "break-spaces" }}>
				{JSON.stringify(profile, null, 4)}
			</pre>
		</div>
	);
}
