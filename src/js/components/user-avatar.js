import React from 'react/addons';

class UserAvatar extends React.Component {
  render() {
    return (
     <div>
       <img src="http://s.gravatar.com/avatar/4749c40d939587d2bfd7e1b60f9eaa38?s=80"/>
       <a href="#">{this.props.user}</a>
     </div>
    )
  }
}


export default UserAvatar;
