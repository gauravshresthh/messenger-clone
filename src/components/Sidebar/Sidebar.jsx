import React, { useState } from 'react';
import ChatInfo from '../ChatInfo/ChatInfo';
import data from '../../data/userData.json';
import './Sidebar.css';

const Sidebar = () => {
	const [isShown, setIsShown] = useState(false);
	return (
		<div
			className="mx-3 CustomSidebar"
			style={{
				overflowY: isShown ? 'scroll' : 'hidden',
				overflowX: 'hidden',
				height: '100vh',
			}}
			onMouseEnter={() => setIsShown(true)}
			onMouseLeave={() => setIsShown(false)}
			id="customScrollbar">
			<h2>Chats</h2>
			<div className="search-input" style={{ border: 'none' }}>
				<input
					className="form-control rounded-pill "
					type="search"
					placeholder="Search Messenger"
					aria-label="Search"
				/>
			</div>
			{data.map(item => {
				return <ChatInfo username={item.name} content={item.status} />;
			})}
		</div>
	);
};

export default Sidebar;
