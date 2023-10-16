import { ISidebarProps } from './_types';
import { Flex } from '@chakra-ui/react';

import NameBadge from './NameBadge';
import Frame from './Frame';

function Sidebar(props: ISidebarProps) {
  const { expandedWidth = '212px', isExpanded = true, collapsedWidth = '70px' } = props;
  return (
    <Flex
      w={isExpanded ? expandedWidth : collapsedWidth}
      direction='column'
      alignItems='center'
      gap='measurement.16'
      px='measurement.16'
      py='measurement.20'
      flexShrink={0}
      h='full'
      borderRight='1px'
      borderRightColor='black.10'
    >
      {/* Name badge */}
      <NameBadge />
      {/* sidebar frame */}
      <Frame />
    </Flex>
  );
}

const sidebarNameProps = {
  avatarUrl: "https://bit.ly/dan-abramov",
  name: "ByeWind"
}

const sidebaFavoriteProps = {
  favorites: [{ display: "Overview", "url": "" }, { display: "Projects", "url": "" }],
  recently: [{ display: "re-Overview", "url": "" }, { display: "re-Projects", "url": "" }]
}
export const menuItems = [
  {
    title: "Home",
    url: "/",
    items: [
      {
        title: "web design",
        url: "web-design"
      },
      {
        title: "web development",
        url: "web-dev",
        items: [
          {
            title: "Frontend",
            url: "frontend"
          },
          {
            title: "Back End G1",
            isGroup: true,
            items: [
              {
                title: "Java",
                url: "node"
              },
              {
                title: "Rust",
                url: "php"
              }
            ]
          },
          {
            title: "Backend",
            items: [
              {
                title: "NodeJS",
                url: "node"
              },
              {
                title: "PHP",
                url: "php"
              }
            ]
          },
          {
            title: "SEO",
            url: "seo"
          }
        ]
      }
    ]
  },
  {
    title: "Services",
    url: "/services"
  },
  {
    title: "About",
    url: "/about"
  }
];

export default Sidebar;
