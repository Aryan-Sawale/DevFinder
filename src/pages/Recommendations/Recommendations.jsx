import React, { useEffect } from "react";
import styles from "./Recommendations.module.css";
import { DevCard } from "../../components/DevCard/DevCard";
import { useAxios } from "../../utils/useAxios";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { baseURL } from "../../utils/config";
import axios from "axios";
import { Link } from "react-router-dom";

export const Recommendations = () => {
  const { currentUUID } = useContext(AuthContext);

  const api = useAxios();

  const [users, setUsers] = useState([]);

  const fetchReccommended = async () => {
    const response = await api.get(`user-api/similar/`);
    console.log(response);
    setUsers(response.data.results);
  };

  useEffect(() => {
    fetchReccommended();
  }, []);

  return (
    <>
      <div className={styles.header}>Recommended Developers</div>
      <div className={styles.developers}>
        {users?.map((user) => (
          <>
            <Link
              to="/developers/developer"
              key={user.url}
              state={{ url: user.url }}
            >
              <DevCard
                name={user.username}
                position={user.shortIntro}
                bio={user.bio}
                image={user.profileImage}
              />
            </Link>
          </>
        ))}
        {/* <DevCard
          name="ak"
          position="Frontend developer"
          bio="Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers."
        />
        <DevCard
          name="ak"
          position="Frontend developer"
          bio="Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers."
        />
        <DevCard
          name="ak"
          position="Frontend developer"
          bio="Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers."
        />
        <DevCard
          name="ak"
          position="Frontend developer"
          bio="Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers."
        />
        <DevCard
          name="ak"
          position="Frontend developer"
          bio="Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers."
        />
        <DevCard
          name="ak"
          position="Frontend developer"
          bio="Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers."
        /> */}
      </div>
    </>
  );
};
