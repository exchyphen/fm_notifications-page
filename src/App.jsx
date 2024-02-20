import { useEffect, useState } from "react";
import "./App.css";

/** components */
import Notification from "./components/notification";

/** images */
import MarkWebber from "./assets/images/avatar-mark-webber.webp";
import AngelaGray from "./assets/images/avatar-angela-gray.webp";
import JacobThompson from "./assets/images/avatar-jacob-thompson.webp";
import RizkyHasanuddin from "./assets/images/avatar-rizky-hasanuddin.webp";
import KimberlySmith from "./assets/images/avatar-kimberly-smith.webp";
import NathanPeterson from "./assets/images/avatar-nathan-peterson.webp";
import AnnaKim from "./assets/images/avatar-anna-kim.webp";

import ImageChess from "./assets/images/image-chess.webp";

function App() {
  // notification data
  const notificationData = [
    {
      name: "Mark Webber",
      flavorText: "reacted to your recent post",
      type: "react",
      typeData: "My first tournament today!",
      time: "1m",
      img: MarkWebber,
    },
    {
      name: "Angela Gray",
      flavorText: "followed you",
      type: "follow",
      typeData: null,
      time: "5m",
      img: AngelaGray,
    },
    {
      name: "Jacob Thompson",
      flavorText: "has joined your group",
      type: "join",
      typeData: "Chess Club",
      time: "1 day",
      img: JacobThompson,
    },
    {
      name: "Rizky Hasanuddin",
      flavorText: "sent you a private message",
      type: "pm",
      typeData:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      time: "5 days",
      img: RizkyHasanuddin,
    },
    {
      name: "Kimberly Smith",
      flavorText: "commented on your picture",
      type: "picture",
      typeData: ImageChess,
      time: "2 weeks",
      img: KimberlySmith,
    },
    {
      name: "Nathan Peterson",
      flavorText: "reacted to your recent post",
      type: "react",
      typeData: "5 end-game strategies to increase your win rate",
      time: "2 weeks",
      img: NathanPeterson,
    },
    {
      name: "Anna Kim",
      flavorText: "left the group",
      type: "leave",
      typeData: "Chess Club",
      time: "2 weeks",
      img: AnnaKim,
    },
  ];

  const [unread, setUnread] = useState(notificationData.length);
  const [notificationState, setNotificationState] = useState(
    Array(notificationData.length).fill(false)
  );
  const [toggleMarkRead, setToggleMarkRead] = useState(true);

  // toggle read function
  const handleToggleRead = () => {
    if (toggleMarkRead) {
      setNotificationState(Array(notificationData.length).fill(true));
    } else {
      setNotificationState(Array(notificationData.length).fill(false));
    }
  };

  // single read
  const handleSingleToggle = (index) => {
    const newArr = Array.from(notificationState);
    newArr[index] = !newArr[index];
    setNotificationState(newArr);
  };

  // make sure we update notification badge number
  useEffect(() => {
    let count = 0;
    for (const notif of notificationState) {
      count += !notif;
    }

    setUnread(count);

    if (count === 0) {
      setToggleMarkRead(false);
    } else {
      setToggleMarkRead(true);
    }
  }, [notificationState]);

  // create function
  const createNotifications = () => {
    const arr = Array(notificationData.length);
    for (let i = 0; i < notificationData.length; i++) {
      arr[i] = (
        <Notification
          key={`notification${i}`}
          state={notificationState[i]}
          name={notificationData[i].name}
          flavorText={notificationData[i].flavorText}
          type={notificationData[i].type}
          typeData={notificationData[i].typeData}
          time={notificationData[i].time}
          img={notificationData[i].img}
          onClick={() => handleSingleToggle(i)}
        ></Notification>
      );
    }

    return arr;
  };

  return (
    <>
      <main>
        <header>
          <div className="notifications-header-container">
            <h1>Notifications</h1>
            <div className="notifications-badge">{unread}</div>
          </div>
          {toggleMarkRead ? (
            <button className="all-read-button" onClick={handleToggleRead}>
              Mark all as read
            </button>
          ) : (
            <button className="all-read-button" onClick={handleToggleRead}>
              Mark all as unread
            </button>
          )}
        </header>
        <section className="notification-section">
          {createNotifications()}
        </section>
      </main>
      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/exchyphen" target="_blank">
          exc
        </a>
        .
      </footer>
    </>
  );
}

export default App;
