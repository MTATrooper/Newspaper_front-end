import React from 'react';
import Popup from 'reactjs-popup';
import Content from "./Content.jsx";
import './SummarizeModal.css';

const SummarizeModal = () => {
    return (
        // <div>
            <Popup modal trigger={<button className="summarize_btn"></button>}>
                {close => <Content close={close} />}
            </Popup>
        // </div>
    );
};

export default SummarizeModal;