import { ReactNode } from 'react'
import { cn } from '../../lib/utils'

const MaxWidthWrapper = ({
	className,
	children,
}: {
	className?: string
	children: ReactNode
}) => {
	return (
		<div
			className={cn(
				'mx-auto px-2.5',
				className,
			)}
		>
			{children}
		</div>
	)
}

export default MaxWidthWrapper
