import React, { useState, useEffect } from "react";
import styles from "../style";
import { motion } from "framer-motion";
import { getCodingProfile } from "../constants";
import { SiCodechef } from "react-icons/si";
import { Atcoder } from "../assets";

const Profile = (profile) => {
    return (
    <motion.div
            className="flex flex-col px-10 py-12 rounded-[20px] max-w-[450px] md:mr-10 sm:mr-5 mr-0 my-3  feedback-card"
            whileInView={{ y: [-30, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            >
            <div className="flex flex-row">
                <div
                  key={profile.id}
                  className="text-dimWhite mr-5 text-[20px] hover:text-teal-200 tooltip"
                >
                    {profile.platform !== "Atcoder" ? React.createElement(profile.icon,{size: 35}) :
                        <img
                        className="w-10 h-10 "
                        src={Atcoder}
                        alt=""
                      />
                    }
                  <span class="tooltiptext">{profile.platform}</span>
                </div>

                <div className="flex flex-col ml-4">
                    <h4 className="font-poppins font-semibold text-[30px] text-gradient leading-[32px]">
                        {profile.platform}
                    </h4>
                    <p className="font-poppins font-normal text-[14px] text-dimWhite my-1">
                        -  {profile.username}
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-1 mt-3 md:grid-cols-3 gap-8">
                <div className="flex flex-col">
                    <p className="font-poppins font-normal text-[14px] text-white leading-[32px]">
                        Ratings
                    </p>
                    <p className="font-poppins font-normal text-[14px] text-dimWhite leading-[32px]">
                        {profile.rating}
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="font-poppins font-normal text-[14px] text-white leading-[32px] text-center">
                        Ranking
                    </p>
                    <p className="font-poppins font-normal text-[14px] text-dimWhite leading-[32px] text-center">
                        {profile.rank}
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="font-poppins font-normal text-[14px] text-white leading-[32px]">
                        Solved
                    </p>
                    <p className="font-poppins font-normal text-[14px] text-dimWhite leading-[32px]">
                        {profile.totalSolved}
                    </p>
                </div>
            </div>
            {/* <p className="font-poppins font-normal text-[14px] text-dimWhite mt-1 leading-[32px]">
                Ranking - {profile.rank}
            </p>
            <p className="font-poppins font-normal text-[14px] text-dimWhite mt-1 leading-[32px]">
                Solved - {profile.totalSolved}
            </p> */}
    </motion.div>
    );
}
const CodingProfile = () => {
    const [codingProfile,setCodingProfile] = useState([]);
    useEffect(() => {
        const fetchProfiles = async () => {
            const data = await getCodingProfile();
            setCodingProfile(data);
        };

        fetchProfiles();
    }, []);
    return (
    <section id="codingProfiles">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Coding Profiles
      </h1>

      <div className={`${styles.flexCenter} flex-col relative mb-4 mt-8`}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4 md:mt-8 md:grid-cols-3">
        {codingProfile.map((profile,index)=> (
            <Profile key={profile.id} index={index} {...profile}></Profile>
        ))}
        </div>
      </div>
    </section>
    );
}

export default CodingProfile;