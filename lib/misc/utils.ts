import clsx, { ClassValue } from "clsx";
import { Children } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function wt(value: string | boolean | undefined | null | unknown) {
	return value ? value : "";
}

export function hasChildWithDisplayName(
	children: React.ReactNode,
	displayName: string
) {
	return (
		Children.toArray(children).filter(
			(child: any) => child.type.displayName === displayName
		).length > 0
	);
}
