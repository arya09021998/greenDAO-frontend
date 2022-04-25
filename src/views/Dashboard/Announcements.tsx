import { TwitterTimelineEmbed } from "react-twitter-embed";

function Announcements() {
    return (
        <section className="dashboard-contents-wrap bg announcements">
            <article className="title">Announcements</article>
            <div className="contents">
                {/* <section className="twitterContainer">
                    <div className="twitter-embed"></div>
                </section> */}
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="cryptopainters_"
                    options={{
                        tweetLimit: "10",
                        width: "100%",
                        height: "320px",
                    }}
                    theme="dark"
                    transparent
                    noHeader={true}
                    noFooter={true}
                />
            </div>
        </section>
    );
}

export default Announcements;
