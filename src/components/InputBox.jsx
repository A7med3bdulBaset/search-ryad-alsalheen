import React, { useRef } from "react";

export default function InputBox({ value, setValue }) {
	const input = useRef();

	return (
		<div className="bg-primary">
			<div
				className={`container p-y-2 flex-center flex-column transition-05 p-b-5 ${
					!value ? "min-h-100" : "min-h-1 m-b-1 header-shadow"
				}`}
			>
				<h1 className="clr-white m-b-3">البحث في كتاب رياض الصالحين</h1>
				<div className="input-box">
					<input
						type="text"
						ref={input}
						className="fs-150 p-1 border-white"
						placeholder={value}
						onChange={(e) => setValue(e.target.value)}
						value={value}
						autoFocus
					/>
				</div>
			</div>
		</div>
	);
}
