import React, { Component } from "react";

import { FaUserCircle } from "react-icons/fa";

import {
  Header,
  Logo,
  TimeLine,
  Post,
  PostOwner,
  PostDate,
  Divider,
  Comentary,
  Avatar,
  Name,
  Text
} from "./styles";

export default class Main extends Component {
  state = {
    logo: "facebook",
    posts: [
      {
        id: 1,
        date: "04 Jun 2019",
        text: "Galera, como que se programa em reactjs, reactnative e nodejs??",
        user: {
          name: "Alisson Santos",
          avatar:
            "https://scontent.fldb2-2.fna.fbcdn.net/v/t1.0-9/p960x960/82135829_2690385501076515_6102943116510101504_o.jpg?_nc_cat=101&_nc_ohc=XhK7dbZkAS4AX9kuwql&_nc_ht=scontent.fldb2-2.fna&_nc_tp=6&oh=363e6ddb1c26c6419c832191ab27decb&oe=5EC9D288"
        },
        commentaries: [
          {
            avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4",
            name: "Diego Fernandes",
            text: "Cara, tu tem que codar irmão"
          },
          {
            avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4",
            name: "Diego Fernandes",
            text: "Sabe? CSS mano"
          },
          {
            avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4",
            name: "Diego Fernandes",
            text: "Sair soltando uns display flex"
          },
          {
            avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4",
            name: "Diego Fernandes",
            text: "Num sei quelá"
          }
        ]
      },
      {
        id: 1,
        date: "04 Jun 2019",
        text: "Galera, como que se programa em reactjs, reactnative e nodejs??",
        user: {
          name: "Alisson Santos",
          avatar:
            "https://scontent.fldb2-2.fna.fbcdn.net/v/t1.0-9/p960x960/82135829_2690385501076515_6102943116510101504_o.jpg?_nc_cat=101&_nc_ohc=XhK7dbZkAS4AX9kuwql&_nc_ht=scontent.fldb2-2.fna&_nc_tp=6&oh=363e6ddb1c26c6419c832191ab27decb&oe=5EC9D288"
        },
        commentaries: [
          {
            avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4",
            name: "Diego Fernandes",
            text: "Cara, tu tem que codar irmão"
          }
        ]
      },
      {
        id: 1,
        date: "04 Jun 2019",
        text: "Galera, como que se programa em reactjs, reactnative e nodejs??",
        user: {
          name: "Alisson Santos",
          avatar:
            "https://scontent.fldb2-2.fna.fbcdn.net/v/t1.0-9/p960x960/82135829_2690385501076515_6102943116510101504_o.jpg?_nc_cat=101&_nc_ohc=XhK7dbZkAS4AX9kuwql&_nc_ht=scontent.fldb2-2.fna&_nc_tp=6&oh=363e6ddb1c26c6419c832191ab27decb&oe=5EC9D288"
        },
        commentaries: [
          {
            avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4",
            name: "Diego Fernandes",
            text: "Cara, tu tem que codar irmão"
          }
        ]
      },
      {
        id: 1,
        date: "04 Jun 2019",
        text: "Galera, como que se programa em reactjs, reactnative e nodejs??",
        user: {
          name: "Alisson Santos",
          avatar:
            "https://scontent.fldb2-2.fna.fbcdn.net/v/t1.0-9/p960x960/82135829_2690385501076515_6102943116510101504_o.jpg?_nc_cat=101&_nc_ohc=XhK7dbZkAS4AX9kuwql&_nc_ht=scontent.fldb2-2.fna&_nc_tp=6&oh=363e6ddb1c26c6419c832191ab27decb&oe=5EC9D288"
        },
        commentaries: [
          {
            avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4",
            name: "Diego Fernandes",
            text: "Cara, tu tem que codar irmão"
          }
        ]
      },
      {
        id: 1,
        date: "04 Jun 2019",
        text: "Galera, como que se programa em reactjs, reactnative e nodejs??",
        user: {
          name: "Alisson Santos",
          avatar:
            "https://scontent.fldb2-2.fna.fbcdn.net/v/t1.0-9/p960x960/82135829_2690385501076515_6102943116510101504_o.jpg?_nc_cat=101&_nc_ohc=XhK7dbZkAS4AX9kuwql&_nc_ht=scontent.fldb2-2.fna&_nc_tp=6&oh=363e6ddb1c26c6419c832191ab27decb&oe=5EC9D288"
        },
        commentaries: [
          {
            avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4",
            name: "Diego Fernandes",
            text: "Cara, tu tem que codar irmão"
          }
        ]
      }
    ]
  };

  render() {
    const { logo, posts } = this.state;
    return (
      <>
        <Header>
          <Logo>{logo}</Logo>
          <div>
            <h1>Meu perfil</h1>
            <FaUserCircle size={24} />
          </div>
        </Header>
        <TimeLine>
          {posts &&
            posts.map(post => (
              <Post>
                <PostOwner>
                  <Avatar size={42} src={`${post.user.avatar}`} />
                  <div>
                    <Name size={14}>{post.user.name}</Name>
                    <PostDate>{post.date}</PostDate>
                  </div>
                </PostOwner>
                <Text>{post.text}</Text>
                <Divider />
                <div>
                  {post.commentaries.map(comentary => (
                    <Comentary>
                      <Avatar size={32} src={`${comentary.avatar}`} />
                      <div>
                        <Name size={12}>{comentary.name}</Name>
                        <Text size={12}>{comentary.text}</Text>
                      </div>
                    </Comentary>
                  ))}
                </div>
              </Post>
            ))}
        </TimeLine>
      </>
    );
  }
}
