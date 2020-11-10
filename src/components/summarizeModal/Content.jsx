import React from 'react';
import { HTTP } from '../../constants/contants';
import axios from 'axios';
import './SummarizeModal.css';

const Content = ({ close }) => {
  const summary = () => {
    let text = document.getElementById('textInput').value;
    let language = document.getElementById('select_lang').value;
    // fetch(`${HTTP.SUMMARIZE}`, { method: "POST", mode: 'no-cors', body: {text, language}})
    //   .then(response => response.json())
    //   .then(data => {
    //     let sents_summ = data['results'];
    //     document.getElementById('textSummary').value = sents_summ
    //   });
    var myParams = {
      text: text,
      language: language
    }
    axios.post(`${HTTP.SUMMARIZE}`, myParams)
        .then(function(response){
          console.log(response);
          let sents_summ = response.data['results'];
          let tmp = '';
          for (let i = 0; i < sents_summ.length; i++){
            tmp += sents_summ[i] + '\n';
          }
          document.getElementById('textSummary').value = tmp
        })
  }
  return (
    <div className="modal1">
    <button className="close" onClick={close}>
      &times;
    </button>
    <div className="header"> Tóm tắt</div>
    <div className="content">
        <div className="labelsource col-md-3">
          <label style={{ fontSize:'12pt' }}>Văn bản gốc</label>
          <select className="catgArchive" id="select_lang">
            <option value="0" defaultValue>Tiếng Việt</option>
            <option value="1">Tiếng Anh</option>
          </select>
        </div>
        <div className="col-md-9"><textarea className="textInput" id="textInput"></textarea></div>
        <div className="col-md-12">
          <div className="summarize">
            <button className="btn btn-primary" onClick={summary}>Tóm tắt</button>
          </div>
        </div>
        <div className="labelsummary col-md-3"><label style={{ fontSize:'12pt' }}>Văn bản tóm tắt</label></div>
        <div className="col-md-9"><textarea className="textSummary" id="textSummary"></textarea></div>
    </div>
  </div>
  );
};

export default Content;