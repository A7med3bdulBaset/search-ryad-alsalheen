import React, {memo} from "react";
import Hadith from "./Hadith";

function Results({ data }) {
	return (
		<div className="container p-y-1">
			<div className="grid-3 gap results">
				{data &&
					data.map((item) => (
						<Hadith
							key={`${item.Book_ID}-${item.Chapter_ID}-${item.Hadith_ID}`}
							sanad={item.Ar_Sanad_Without_Tashkeel}
							text={item.Ar_Text_Without_Tashkeel}
							book={item.Book_ID}
							chapter={item.Chapter_ID}
							hadith={item.Hadith_ID}
						/>
					))}
			</div>
		</div>
	);
}

export default memo(Results);