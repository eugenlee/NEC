import React, { Component } from 'react';
import GuidesItem from './GuidesItem';

class Guides extends Component {
    state = {
        guides: [
            {
                id: 1,
                imgLink: '/assets/guides/united.jpeg',
                firstText: 'Airlines',
                articleLink: 'https://www.neverendingcycle.org/united-economy-plus-review.html',
                secondText: 'Economy Class on United Airlines',
                spanBody: 'When I was looking at booking a flight to Melbourne, I was surprised that United offered nonstop service to Melbourne. Usually, Qantas and Virgin Australia have a monopoly on any US routes bound to Australia. However, more and more airlines are launching routes to Australia which is increasing competition.'
            },
            {
                id: 2,
                imgLink: 'assets/guides/qatar.jpeg',
                firstText: 'Airlines',
                articleLink: 'https://www.neverendingcycle.org/qatar-airways-business-class-review.html',
                secondText: 'Business Class on Qatar Airways',
                spanBody: 'I\'ve never been a very indulgent person. But, when I got an email from Qatar Airways offering me an upgrade for a reasonable fee, I knew this could be the opportunity of a lifetime. During this stage of my trip, I was actually spending less than I expected so I decided to take the leap. The upgrade was definitely pricey, but I don\'t regret it at all! The experience was simply indescribable and it\'s something I would do again - but when I\'m making way more money in the future.'
            },
            {
                id: 3,
                imgLink: 'assets/guides/driving.jpeg',
                firstText: 'Driving',
                articleLink: 'https://www.neverendingcycle.org/long-distance-driving.html',
                secondText: 'Long-Distance Driving',
                spanBody: 'Long distance driving is one of those things that is easy to learn, but hard to master. Throughout the years, I did weekly 3-4 hour drives and 6-7 hour monthly drives. All of this driving was either round-trip from Santa Barbara to NorCal or to SoCal. All of these drives have built up my driving tolerance to an ungodly level. The goal of this guide is to help the average driver get through a long-distance drive without feeling too tired at the end!'
            },
            {
                id: 4,
                imgLink: 'assets/guides/packing.jpg',
                firstText: 'Necessities',
                articleLink: 'https://www.neverendingcycle.org/packing.html',
                secondText: 'Packing',
                spanBody: 'Packing can either be the easiest part or the hardest of your trip, depending on how prepared you are! Of course, it can be very simple if you can bring lots of suitcases without worrying about their weight. However, airlines are adopting practices where they charge for you to check in a bag and for overhead bin space! Therefore, you have to resort to a carry-on bag only if you want to save some money, but fitting everything into a carry-on might be a challenge!'
            },
            {
                id: 5,
                imgLink: 'assets/guides/disneyland.jpg',
                firstText: 'Parks & Recreation',
                articleLink: 'https://www.neverendingcycle.org/disneyland.html',
                secondText: 'Disneyland',
                spanBody: 'Disneyland is one of my favorite places of all time - there’s just something about the theme park that just brings me excitement every time I go. Both Disneyland Park and Disneyland California Adventure (DCA) have their appeal, but figuring out how to maximize the utility of your day is difficult. With ticket prices increasing, ever-growing crowds, and the opening of Galaxy’s Edge, it’s getting more and more frustrating to justify spending a day in the park.'
            },
            {
                id: 6,
                imgLink: 'assets/guides/traveling.jpeg',
                firstText: 'Money',
                articleLink: 'https://www.neverendingcycle.org/traveling-around-the-world-on-a-budget.html',
                secondText: 'Traveling on a Budget',
                spanBody: 'Traveling doesn’t need to be incredibly complicated or expensive. Planning a vacation can be pretty overwhelming as you have to worry about different aspects: logistics, cost, things to do and eat, being safe, and lots of other things! You want to have the best time with the lowest cost, but you aren’t sure how to find that balance. Sometimes, there are factors that are outside your control. However, the goal of this article is to help you control the things you can so that you can focus on having a great vacation.'
            }
        ]
    }

    render () {
        return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <span className="banner"><img src={ process.env.PUBLIC_URL + '/assets/guides/banner.jpg'} style={{ width:"100%" }} alt="guides-banner"></img></span>
                    <h1 style={{ textAlign: "center", position: "absolute" }}>Guides</h1>
                </div>
            </div>

            <div className="container">
                    <div className="row">
                        <span style= {{ margin: "0px 10px 25px 10px", textAlign: "center" }} className="main_text">
                            Here, you'll find comprehensive summaries and tips of various topics that I feel that I'm really knowledgeable about - my goal is to pass my knowledge and experience down to others! A list of my guides is below, and they should redirect to another link. But if there is no link, the guide is in progress - thank you for your patience!
                        </span>
                    </div>
                    
                    <GuidesItem guides={this.state.guides}/>

            </div>
        </div>
        );
    }
}

export default Guides;
