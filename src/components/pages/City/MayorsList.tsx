import { getMayors } from "@/services/mayors";
import React from "react";
import MayorCard from "./MayorCard";

type Props = {
	city: string;
};

export default async function MayorsList({ city }: Props) {
	const mayors = await getMayors({ city });

	return (
		<div className="collapse collapse-arrow border-t border-b border-neutral-700 rounded-none">
			<input type="checkbox" name="my-accordion-2" defaultChecked />
			<div className="collapse-title text-md text-white font-bold">
				Prefeitos e Vice-prefeitos
			</div>
			<div className="collapse-content">
				<div className="w-full">
					{mayors.candidatos.map((c: any) => (
						<MayorCard key={c.id} mayor={c} />
					))}
				</div>
			</div>
		</div>
	);
}
