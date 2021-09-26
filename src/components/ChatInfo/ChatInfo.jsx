const ChatInfo = ({ imgUrl, username, content }) => {
	return (
		<div className="row py-1 chatInfo d-flex align-items-center" id="chatInfo">
			<div className="col-2 col-md-2 ">
				<img
					src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop"
					className="chatInfoImage"
					alt="avatar"
					style={{
						height: '50px',
						borderRadius: '50%',
						width: '50px',
						objectFit: 'contain',
					}}
				/>
			</div>
			<div className="col-10 col-md-10 ">
				<h5 className="mt-3">{username}</h5>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default ChatInfo;
