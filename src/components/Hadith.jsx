import React from "react";
import useFetch from "../hooks/useFetch";

export default function Hadith({ sanad, text, book, chapter, hadith }) {
	const { bookApi } = useFetch(
		"https://ahadith-api.herokuapp.com/api/books/ar"
	);
	const { chapterApi } = useFetch(
		"https://ahadith-api.herokuapp.com/api/chapter/10/ar"
	);

	return (
		<div className="hadith p-1 bg-white rounded-1 border-primary shadow">
			<p className="clr-primary">{sanad}</p>
			<p className="clr-black text-justify">{text}</p>
			{bookApi && (
				<p className="clr-success">
					{bookApi.data.Books[book - 1].Book_Name}
				</p>
			)}
			{chapterApi && (
				<p className="clr-success">
					{chapterApi.data.Chapter[chapter - 1].Chapter_Name}
				</p>
			)}
			<p className="clr-indigo">{hadith}</p>
		</div>
	);
}
