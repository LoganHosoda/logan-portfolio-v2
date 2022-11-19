import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://github.com/LoganHosoda" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.linkedin.com/in/logan-hosoda/" target="_blank">
        <BsLinkedin />
      </a>
    </div>
  )
}

export default SocialMedia