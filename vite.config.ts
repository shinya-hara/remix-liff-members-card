import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import devcert from "devcert";
import type { UserConfigExport } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default async (): Promise<UserConfigExport> => {
	const { key, cert } = await devcert.certificateFor("localhost");

	return {
		plugins: [remix(), tsconfigPaths()],
		server: {
			https: {
				key,
				cert,
			},
		},
		ssr: {
			noExternal: ["qrcode.react"],
		},
	};
};
