import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time : "",
            tday : ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
            tmonth : ["01", "02", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
        }
        this.GetClock = this.GetClock.bind(this);
    }

    
    GetClock() {
        var d = new Date();
        var nday = d.getDay(), nmonth = d.getMonth(), ndate = d.getDate(), nyear = d.getYear();
        if (nyear < 1000) nyear += 1900;
        var nhour = d.getHours(), nmin = d.getMinutes(), nsec = d.getSeconds();

        if (nmin <= 9) nmin = "0" + nmin;
        if (nsec <= 9) nsec = "0" + nsec;

        this.setState({time :  "" + this.state.tday[nday] + ", " + ndate + "/" + this.state.tmonth[nmonth] + "/" + nyear + ", " + nhour + ":" + nmin + ":" + nsec + ""});
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.GetClock();
        setInterval(this.GetClock, 1000);
    }

    render() {
        return (
            <div className="header_top_right">
                <p>{this.state.time}</p>
            </div>
        );
    }
}

Clock.propTypes = {

};

export default Clock;