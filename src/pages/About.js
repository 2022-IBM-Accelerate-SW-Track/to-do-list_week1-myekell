import React, { Component } from 'react';
import "./About.css";
import <profile_pic_name> from "../assets/pfp.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              // Image goes here
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Matthew Yekell</div>
            <div className="brief_description">
              Hi! My name is Matthew Yekell, and I am a rising sophomore at Stanford University. 
              I am studying Computer Science and Psychology. In my free time, I enjoy long walks,
              discovering new places to eat, and meeting new people. 
            </div>
          </div>
        </div>
      </div>
    )
  } 
}