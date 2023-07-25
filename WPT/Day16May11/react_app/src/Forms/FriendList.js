function FriendList(props) {
	return (
		<div>
			<ol>
				{props.data.map((item) => (
					<li>{item}</li>
				))}
			</ol>
		</div>
	);
}

export default FriendList;
