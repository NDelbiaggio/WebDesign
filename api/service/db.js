/**
 * Created by fredericlopesgoncalvesmagalhaes on 21.02.17.
 */

var data = [
    {
        id: 0,
        name: "elec_worker",
        header: "Dedicated to excellence",
        desc: "At DELONIFR, our team is dedicated to excellence and we do our best to provide the best service to each customer." +
        "We know how difficult it is to give trust and that is the reason why you will do our best for you.",
        imgPath: 'images/scrollingPopupImages/elec_worker.jpg'

    },
    {
        id: 1,
        name: "elec_outside",
        header: "Feeling home outside like inside",
        desc: "Brightning your outside is as much important as the inside of your home. Bringing light during night will give and secure your outside part of your home.",
        imgPath: 'images/scrollingPopupImages/elec_outside.jpg'

    },
    {
        id: 2,
        name: "elec_panels",
        header: "Renewable energy",
        desc: "At DELONIFR, we think that renewable energy is the future. Then, we offer a customized service to transform your house into an electricity generator to light up your home.",
        imgPath:'images/scrollingPopupImages/elec_panels.jpg'
    },
    {
        id: 3,
        name: "elec_luster",
        header: "High ceilling should be dressed as well",
        desc: "With a simple luster.",
        imgPath: 'images/scrollingPopupImages/elec_lustre.jpg'
    },
]
var company = {
    company: "DELONIFR",
    creation: "2017",
    webpage: "http://localhost:3000/"
}

function getDescObj(name) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].name === name) {
            return data[i]
        }
        ;
    }
    return null;
}

module.exports = {
    getCompany: function () {
        return company;
    },

    getDescription: function (id) {
        var data = getDescObj(id);
        return data;
    }
}
