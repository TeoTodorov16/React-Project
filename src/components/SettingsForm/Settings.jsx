import React from 'react';
import Profile from '../ProfileForm/Profile';
import './Settings.css';


const Settings = () => {


    return (
        <div>
        <Profile></Profile>
            <div className="TopLine">
                <h3 className="TopH1">BOOK SETTINGS</h3>
                <button className="TopButton">ADD NEW</button>
            </div>

            <div className="MediumLine">
                <h4>NOTIFICATION AND EMAILS</h4>
                <div className="icon-arrow"></div>
            </div>

            <div className="MediumLineQ">
                <h4>BOOK VISABILITY</h4>
                <div className="icon-arrow1"></div>
            </div>

            <div className="MediumLineQ">
                <h4>AUTHORS DATABASE</h4>
                <div className="icon-arrow2"></div>
            </div>

            <div className="MediumLineQ">
                <h4>BOOK COVERS</h4>
                <div className="icon-arrow3"></div>
            </div>

            <div className="MediumLineQ">
                <h4>BOOK STATICS</h4>
                <div className="icon-arrow4"></div>
            </div>

        </div>
    )
}

export default Settings
