import React from 'react'
import { BackButton } from '../../Components/BackButton/BackButton';
import "./About.css"

export class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <BackButton
          location = "/"
          text = "Back"
        />
        <div className="about-text">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, 
            nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur 
            sagittis hendrerit ante. Aliquam erat volutpat. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Duis condimentum augue 
            id magna semper rutrum. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Proin pede metus, vulputate nec, fermentum 
            fringilla, vehicula vitae, justo. Fusce consectetuer risus a nunc. Aliquam ornare wisi eu metus. Integer pellentesque quam vel velit. Duis pulvinar.
          </p>
          <p>
            Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. 
            In nisl. Nullam sit amet magna in magna gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuere. Nullam lectus justo, vulputate eget, mollis 
            sed, tempor sed, magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam neque. Curabitur ligula sapien, 
            pulvinar a, vestibulum quis, facilisis vel, sapien. Nullam eget nisl. Donec vitae arcu.
          </p>
          <p>
            Praesent in mauris eu tortor porttitor accumsan. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris 
            vel metus. Aenean fermentum risus id tortor. Integer imperdiet lectus quis justo. Integer tempor. Vivamus ac urna vel leo pretium faucibus. Mauris 
            elementum mauris vitae tortor. In dapibus augue non sapien. Aliquam ante. Curabitur bibendum justo non orci.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida libero nec velit. Morbi scelerisque luctus velit. Etiam dui sem, fermentum vitae, 
            sagittis id, malesuada in, quam. Proin mattis lacinia justo. Vestibulum facilisis auctor urna. Aliquam in lorem sit amet leo accumsan lacinia. Integer 
            rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Phasellus et lorem id felis nonummy placerat. 
            Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Aenean vel massa quis mauris vehicula lacinia. Quisque tincidunt scelerisque libero. Maecenas 
            libero. Etiam dictum tincidunt diam. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Suspendisse nisl. Sed convallis magna eu sem. Cras 
            pede libero, dapibus nec, pretium sit amet, tempor quis, urna.
          </p>
        </div>
        
      </div>
    );
  }
}