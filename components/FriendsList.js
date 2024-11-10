import React, { useState } from "react";
import { useFriends } from "../context/FriendsContext";
import { addFriend, removeFriend, toggleFriendStatus } from "../reducer/friendsReducer";

const FriendsList = () => {
  const { state, dispatch } = useFriends();
  const [newFriend, setNewFriend] = useState("");

  const handleAddFriend = () => {
    if (newFriend.trim()) {
      const newFriendObject = {
        id: Date.now(), 
        name: newFriend,
        isOnline: false,
      };
      dispatch(addFriend(newFriendObject));
      setNewFriend("");
    }
  };

  const handleRemoveFriend = (id) => {
    dispatch(removeFriend(id));
  };

  const handleToggleStatus = (id) => {
    dispatch(toggleFriendStatus(id));
  };

  return (
    <div>
      <h1>Friends List</h1>

         <div>
        <input
          type="text"
          value={newFriend}
          onChange={(e) => setNewFriend(e.target.value)}
          placeholder="Enter friend name"
        />
        <button onClick={handleAddFriend}>Add Friend</button>
      </div>

      <ul>
        {state.friends.map((friend) => (
          <li key={friend.id}>
            <span style={{ color: friend.isOnline ? "green" : "gray" }}>
              {friend.name} - {friend.isOnline ? "Online" : "Offline"}
            </span>
            <button onClick={() => handleToggleStatus(friend.id)}>
              Toggle Status
            </button>
            <button onClick={() => handleRemoveFriend(friend.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
