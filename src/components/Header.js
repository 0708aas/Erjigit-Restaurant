import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import bg from '../img/pngegg.png'
import inst from '../img/inst.png'
import face from '../img/face.png'
import vg from '../img/vg.png'
import {NavLink} from "react-router-dom";
const Header = () => {

    const [input, setInput] = useState('')
    const navigaite = useNavigate()
    const hendlInput = (e) => {
        setInput(e.target.value)
    }
    const click = () => {
        navigaite(`/search/${input}`)
    }

    const inp = (e) => {
        if (e.key === "Enter") {
            navigaite(`/search/${input}`)
        }
    }


    return (

        <div className="head  ">
            <div className="container">
                <div className="block-header">
                    <div className="img-food">
                     <NavLink to="/"> <img className="img-log1" src={bg} alt=""/> </NavLink>
                        <h3 className="era">𝕰𝖗𝖟𝖍𝖎𝖌𝖎𝖙 𝕽𝖊𝖘𝖙𝖆𝖚𝖗𝖆𝖓𝖙</h3>


                    </div>
                    <div>
                        <img className="img-log" src={vg} alt=""/>
                    </div>

                    <div className="block-search">
                        <a href="https://www.instagram.com/?hl=ru"><img className="img-inst" src={inst} alt=""/></a>
                        <a href="https://www.facebook.com/v6.0/dialog/oauth/read/"><img className="img-face" src={face}
                                                                                        alt=""/></a>
                        <input onKeyDown={inp} className="input" onChange={hendlInput} type="text"/>
                        <button disabled={!input} onClick={click} className="link-btn">search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;