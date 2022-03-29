import * as React from 'react';


const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

};

function Profile(){

    return(
    <>
    <h1>PROFILE</h1>
    <div class="profile-container">
        <div>
            <img class="profile-image"
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_3000/https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg"
                width="200"
                height="200"
                
            />
        </div>
        <div class ="profile-information">
            <h2>Nerd E. Gamer</h2>
            <h4>Avid Bored Gamer</h4>
            <div class = "profile-description">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
        
    </div>
    </>
    );
}


export default Profile;
