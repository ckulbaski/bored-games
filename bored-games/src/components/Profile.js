import * as React from 'react';


function Profile() {

    return (
        <div className="content">
            <div className="profile-background">
                <h1>PROFILE</h1>
                <div className="profile-container">
                    <div>
                        <img className="profile-image"
                            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_3000/https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg"
                            width="200"
                            height="200"
                            alt="not available"

                        />
                        <p>Location: Winnipeg</p>
                        <p>Member Since: March 2022</p>
                    </div>
                    <div className="profile-information">
                        <h2>Nerd E. Gamer</h2>
                        <h4>Avid Bored Gamer</h4>
                        <h5>Description:</h5>
                        <div className="profile-description">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
                <h3>Favourite Games</h3>
                <div className="profile-favourite-games">

                    <img className="profile-favourite-games-image"
                        src="https://cf.geekdo-images.com/9nGoBZ0MRbi6rdH47sj2Qg__itemrep/img/8EP4ErNA709diOt6fUyJH30FtbU=/fit-in/246x300/filters:strip_icc()/pic5786795.jpg"
                        alt="not available"
                    />
                    <img className="profile-favourite-games-image"
                        src="https://www.boardgamequest.com/wp-content/uploads/2013/04/Settlers-of-Catan-300x243.jpg"
                        alt="not available"
                    />
                    <img className="profile-favourite-games-image"
                        src="https://www.mobygames.com/images/covers/l/489966-uno-kindle-classNameic-front-cover.jpg"
                        alt="not available"
                    />
                    <img className="profile-favourite-games-image"
                        src="https://849310.smushcdn.com/1803394/wp-content/uploads/2017/12/gloomhaven-overview-header-1024x576.jpg?lossy=1&strip=1&webp=1"
                        alt="not available"
                    />
                </div>

            </div>
        </div>
    );
}


export default Profile;
