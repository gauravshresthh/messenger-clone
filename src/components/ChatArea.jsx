const ChatArea = () => {
	return (
		<div className="mt-3">
			<div className="d-flex shadow-sm justify-content-between">
				<div className="user-data-container d-flex">
					<div className="img-container">
						<img
							src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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

					<div className="content mx-3">
						<h5 className="">Gaurav Acharya</h5>
						<p>Active 4d ago</p>
					</div>
				</div>
				<div className="user-actions-icons mx-5 mt-3">
					<i className="fa-solid fa-phone mx-2" />
					<i className="fa-solid fa-video mx-2" />
					<i className="fa-solid fa-circle-info mx-2" />
				</div>
			</div>
		</div>
	);
};

export default ChatArea;
