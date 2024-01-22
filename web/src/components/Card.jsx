
const Card = (props) => {
	const tags = props.tags ? [...props.tags] : [];
	return (
		<div class="max-w-sm rounded overflow-hidden shadow-lg">
			<div class="px-6 py-4">
				<div class="text-gray-700 text-base">
					{props.children}
				</div>
			</div>
			<div class="px-6 pt-4 pb-2 flex">
				{tags.map(tag => {
					return <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
				})}
			</div>
		</div>
	);
};

export default Card;