import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMessages } from '../../store/actions/messages.actions';

const ChatArea = () => {
	const dispatch = useDispatch();
	const {
		messageListSuccess,
		messageListError,
		messageListLoading,
		messageList,
	} = useSelector(state => state?.messages);
	const [currentPage, setCurrentPage] = useState(1);
	const [isShown, setIsShown] = useState(false);
	const [loading, setLoading] = useState(true);

	const ScrollRef = useRef(null);
	useEffect(() => {
		dispatch(listMessages(currentPage));
	}, [dispatch, currentPage]);

	const handleScroll = e => {
		const scrollY = window.scrollY;
		const scrollTop = ScrollRef.current.scrollTop;
		if (scrollTop === 0) {
			setCurrentPage(currentPage + 1);
			return;
		}

		// console.log(
		// 	`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`
		// );
	};

	return (
		<div
			className="mt-3"
			style={{
				overflowY: 'scroll',
				overflowX: 'hidden',
				height: '100vh',
			}}
			onMouseEnter={() => setIsShown(true)}
			onMouseLeave={() => setIsShown(false)}
			ref={ScrollRef}
			onScroll={handleScroll}
			id="customScrollbar2">
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

			<div className="chat">
				{messageListLoading ? (
					<div className="d-flex justify-content-center align-items-center">
						<div className="spinner-border text-secondary m-3" role="status">
							<span className="sr-only">Loading...</span>
						</div>
					</div>
				) : (
					''
				)}

				{!!messageList &&
					messageList.reverse().map(user => {
						if (user?.id % 2 === 0) {
							return (
								<div
									key={user?.id}
									className="my-3 d-flex justify-content-end mx-5 ">
									<div
										className="incoming-message px-3 py-2 rounded-pill"
										style={{ display: 'inline' }}>
										{user?.email} <br />
										{user?.name} <br />
									</div>
								</div>
							);
						} else {
							return (
								<div className="my-3 justify-content-start mx-5 ">
									<div
										key={user?.id}
										className="outgoing-message my-3 px-3 py-2 rounded-pill "
										style={{ display: 'inline' }}>
										{user?.email}
									</div>
								</div>
							);
						}
					})}

				{/* <button
					className="btn btn-primary"
					onClick={() => setCurrentPage(currentPage + 1)}>
					Fetch more data
				</button> */}
			</div>
		</div>
	);
};

export default ChatArea;
