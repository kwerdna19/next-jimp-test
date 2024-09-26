"use client";

import { Jimp } from "jimp";

export default function JimpButton() {
	return (
		<button
			type="button"
			onClick={() => {
				console.log(Jimp);
				alert("Jimp is working!");
			}}
		>
			Log Jimp
		</button>
	);
}
